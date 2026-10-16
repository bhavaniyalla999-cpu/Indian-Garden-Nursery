import os
import re

files_to_update = [
    "index.html",
    "avenue.html",
    "fruit.html",
    "indoor.html",
    "ornamental.html",
    "outdoor.html"
]

cost_html = '\n                        <h4 class="plant-price" style="color: var(--primary); margin: 10px 0; font-size: 1.1rem;">Cost: ₹199.00</h4>\n                        <a'

for filename in files_to_update:
    filepath = os.path.join("c:/Users/Admin/Desktop/Sri Bhaskar", filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename}, not found.")
        continue
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We look for the closing </p> before the WhatsApp button in the plant-info div
    # Actually, we can just replace the start of the <a> tag for WhatsApp
    
    # Let's find <div class="plant-info"> ... <a href="...WhatsApp...">
    # A simple regex to find </p>\s*<a href="https://wa.me
    
    new_content = re.sub(r'(</p>\s*)<a href="https://wa\.me', r'\1<h4 class="plant-price" style="color: var(--primary); margin: 10px 0; font-size: 1.1rem;">Cost: ₹199.00</h4>\n                        <a href="https://wa.me', content)
    
    # Also some cards might have single quotes like <a href='https://wa.me
    new_content = re.sub(r"(</p>|</div>)\s*<a href='https://wa\.me", r'\1<h4 class="plant-price" style="color: var(--primary); margin: 10px 0; font-size: 1.1rem;">Cost: ₹199.00</h4><a href=\'https://wa.me', new_content)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Updated {filename}")
