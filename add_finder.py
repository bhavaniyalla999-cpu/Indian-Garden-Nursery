import os

# Files to update
files = ['index.html', 'outdoor.html', 'indoor.html', 'avenue.html', 'ornamental.html', 'fruit.html']
base_path = r'c:\Users\Admin\Desktop\Sri Bhaskar'

for file_name in files:
    file_path = os.path.join(base_path, file_name)
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Add script tag if not present
        if 'plant-finder.js' not in content:
            # find the last script tag
            idx = content.rfind('<script src="amazon-store.js"></script>')
            if idx != -1:
                insertion = '<script src="amazon-store.js"></script>\n    <script src="plant-finder.js"></script>'
                content = content[:idx] + insertion + content[idx + len('<script src="amazon-store.js"></script>'):]
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)

# Update index.html to add the root div
index_path = os.path.join(base_path, 'index.html')
if os.path.exists(index_path):
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    target_comment = '<!-- Categories Section -->'
    if 'plant-finder-root' not in content:
        idx = content.find(target_comment)
        if idx != -1:
            insertion = f'''{target_comment}
    <section class="section container" id="search-section" style="padding-bottom: 0;">
        <div id="plant-finder-root"></div>
    </section>

    <!-- Original Categories -->'''
            # replace only the comment with the section + comment
            content = content[:idx] + insertion + content[idx + len(target_comment):]
            
            with open(index_path, 'w', encoding='utf-8') as f:
                f.write(content)

print("Plant Finder integration complete.")
