import os

css_append = """
/* ==========================================================================
   VIDEO HERO CSS
   ========================================================================== */
.hero {
    overflow: hidden;
}

.hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}
"""

with open(r'c:\Users\Admin\Desktop\Sri Bhaskar\styles.css', 'a', encoding='utf-8') as f:
    f.write(css_append)

print("Video CSS added.")
