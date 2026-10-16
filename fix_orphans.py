import os
import re
import glob

# Mapping for the restored image based on file
img_map = {
    'indoor.html': 'premium-zz.jpg',
    'outdoor.html': 'avenue-trees.png',
    'fruit.html': 'black-mango.jpg',
    'ornamental.html': 'ornamental-plant.jpg',
    'avenue.html': 'avenue-trees.png',
    'index.html': 'featured-plant.jpg'
}

files = glob.glob('c:/Users/Admin/Desktop/Sri Bhaskar/*.html')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    filename = os.path.basename(f)
    badge = filename.replace('.html', '').capitalize()
    if badge == 'Index': badge = 'Featured'
    
    img_src = img_map.get(filename, 'logo.jpg')
    
    def replacer(match):
        ws = match.group(1)
        return f'</div></div>\n                <div class="plant-card">\n                    <div class="plant-img">\n                        <img src="{img_src}" alt="Restored Image">\n                        <span class="plant-badge">{badge}</span>\n                    </div>{ws}<div class="plant-info">'

    new_content = re.sub(r'</div></div></div>(\s*)<div class="plant-info">', replacer, content)
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Fixed orphaned cards in {filename}")
