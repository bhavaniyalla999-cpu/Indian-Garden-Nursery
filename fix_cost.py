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

for filename in files_to_update:
    filepath = os.path.join("c:/Users/Admin/Desktop/Sri Bhaskar", filename)
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Fix the errant backslash
    new_content = content.replace("<a href=\\'https://wa.me", "<a href='https://wa.me")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Fixed {filename}")
