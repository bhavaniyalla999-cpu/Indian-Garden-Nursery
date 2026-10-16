import os

files = ['outdoor.html', 'indoor.html', 'avenue.html', 'ornamental.html', 'fruit.html']
base_path = r'c:\Users\Admin\Desktop\Sri Bhaskar'

target = """            <div class="footer-col">
                <h4>Support</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#contact">Contact Support</a></li>
                    <li><a href="tel:+919885533297">Call: +91 98855 33297</a></li>
                </ul>
            </div>"""

replacement = """            <div class="footer-col">
                <h4>Support</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#contact">Contact Support</a></li>
                    <li><a href="tel:+919885533297">Call: +91 98855 33297</a></li>
                </ul>
                <h4 style="margin-top: 30px;">Newsletter</h4>
                <p style="font-size: 0.85rem; margin-bottom: 10px; color: #bbb;">Subscribe for wholesale discounts and new plant arrivals.</p>
                <form id="newsletterForm" onsubmit="event.preventDefault(); alert('Thank you for subscribing! Check your email for a welcome discount.'); this.reset();" style="display: flex; gap: 5px;">
                    <input type="email" placeholder="Your email address" required style="flex: 1; padding: 10px; border-radius: 4px; border: none; outline: none; font-family: 'Outfit';">
                    <button type="submit" style="background: var(--primary); color: white; border: none; padding: 0 15px; border-radius: 4px; cursor: pointer; transition: 0.2s;"><i class="fas fa-paper-plane"></i></button>
                </form>
            </div>"""

for file_name in files:
    file_path = os.path.join(base_path, file_name)
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'id="newsletterForm"' not in content:
            content = content.replace(target, replacement)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

print("Newsletter form added to category pages.")
