import os

js_append = """
    // 4. Parallax effect for floating plants
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const plant1 = document.querySelector('.plant-1');
        const plant2 = document.querySelector('.plant-2');
        const plant3 = document.querySelector('.plant-3');
        
        if (plant1) plant1.style.transform = `translateY(${scrollY * 0.3}px)`;
        if (plant2) plant2.style.transform = `translateY(${scrollY * -0.2}px)`;
        if (plant3) plant3.style.transform = `translateY(${scrollY * 0.5}px)`;
    });
"""

# Insert before the last closing brace of DOMContentLoaded in app.js
with open(r'c:\Users\Admin\Desktop\Sri Bhaskar\app.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.rfind('});')
if idx != -1:
    content = content[:idx] + js_append + content[idx:]
    with open(r'c:\Users\Admin\Desktop\Sri Bhaskar\app.js', 'w', encoding='utf-8') as f:
        f.write(content)

print("Parallax added.")
