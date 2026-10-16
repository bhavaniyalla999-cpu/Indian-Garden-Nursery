import os

css_append = """
/* ==========================================================================
   HERO ANIMATIONS & SVG PLANTS
   ========================================================================== */

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(3deg); }
}

@keyframes floatReverse {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(-3deg); }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bloomIn {
    from {
        opacity: 0;
        transform: scale(0.5) rotate(-20deg);
    }
    to {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }
}

.plants-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none; /* Let clicks pass through to buttons */
    z-index: 5;
}

.floating-plant {
    position: absolute;
    will-change: transform;
    opacity: 0.85;
    filter: drop-shadow(0 15px 25px rgba(0,0,0,0.3));
}

.plant-1 {
    width: 280px;
    bottom: -40px;
    left: -20px;
    animation: float 6s ease-in-out infinite;
}

.plant-2 {
    width: 220px;
    top: -30px;
    right: -30px;
    animation: floatReverse 7s ease-in-out infinite;
    transform-origin: top right;
}

.plant-3 {
    width: 180px;
    bottom: 20%;
    right: 5%;
    animation: float 8s ease-in-out infinite 1s;
}

.hero-content .slide-up {
    opacity: 0;
    animation: slideInUp 0.8s ease-out forwards;
}

.hero-content .delay-1 { animation-delay: 0.2s; }
.hero-content .delay-2 { animation-delay: 0.4s; }
.hero-content .delay-3 { animation-delay: 0.6s; }

@media (max-width: 768px) {
    .plant-1 { width: 180px; left: -40px; bottom: 0; }
    .plant-2 { width: 150px; right: -20px; top: -10px; }
    .plant-3 { display: none; }
}
"""

with open(r'c:\Users\Admin\Desktop\Sri Bhaskar\styles.css', 'a', encoding='utf-8') as f:
    f.write(css_append)

print("CSS appended.")
