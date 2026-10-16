// ============================================
// THE INDIAN GARDEN NURSERY — CART MODULE
// ============================================

const Cart = {
    getCart() {
        return JSON.parse(localStorage.getItem('sb_cart') || '[]');
    },
    saveCart(cart) {
        localStorage.setItem('sb_cart', JSON.stringify(cart));
        Cart.updateBadge();
    },
    addToCart(plant) {
        let cart = Cart.getCart();
        const existing = cart.find(i => i.id === plant.id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...plant, qty: 1 });
        }
        Cart.saveCart(cart);
        Cart.showToast(`🌿 "${plant.name}" added to cart!`);
    },
    removeFromCart(id) {
        let cart = Cart.getCart().filter(i => i.id !== id);
        Cart.saveCart(cart);
    },
    updateQty(id, qty) {
        let cart = Cart.getCart();
        const item = cart.find(i => i.id === id);
        if (item) {
            item.qty = Math.max(1, qty);
            Cart.saveCart(cart);
        }
    },
    clearCart() {
        localStorage.removeItem('sb_cart');
        Cart.updateBadge();
    },
    getTotal() {
        return Cart.getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
    },
    getCount() {
        return Cart.getCart().reduce((sum, i) => sum + i.qty, 0);
    },
    updateBadge() {
        const count = Cart.getCount();
        document.querySelectorAll('.cart-badge').forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    },
    showToast(msg) {
        let toast = document.getElementById('cart-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'cart-toast';
            toast.style.cssText = `
                position:fixed; bottom:90px; left:50%; transform:translateX(-50%);
                background:#0B5D3B; color:#fff; padding:14px 28px;
                border-radius:50px; font-weight:600; font-size:0.95rem;
                box-shadow:0 8px 25px rgba(0,0,0,0.2); z-index:9999;
                opacity:0; transition:opacity 0.3s ease; white-space:nowrap;
            `;
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.style.opacity = '1';
        clearTimeout(toast._timer);
        toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
    },

    // Save a placed order
    placeOrder(details) {
        const orders = JSON.parse(localStorage.getItem('sb_orders') || '[]');
        const order = {
            id: 'SBN' + Date.now(),
            date: new Date().toISOString(),
            items: Cart.getCart(),
            total: Cart.getTotal(),
            delivery: 49,
            address: details.address,
            payment: details.payment,
            status: 0 // 0=Placed,1=Confirmed,2=Packed,3=Shipped,4=Delivered
        };
        orders.unshift(order);
        localStorage.setItem('sb_orders', JSON.stringify(orders));
        Cart.clearCart();
        return order.id;
    },
    getOrders() {
        return JSON.parse(localStorage.getItem('sb_orders') || '[]');
    },
    cancelOrder(id) {
        let orders = Cart.getOrders();
        const order = orders.find(o => o.id === id);
        if (order && order.status === 0) {
            order.status = -1; // cancelled
            localStorage.setItem('sb_orders', JSON.stringify(orders));
            return true;
        }
        return false;
    }
};

// Init badge on page load
document.addEventListener('DOMContentLoaded', () => Cart.updateBadge());
