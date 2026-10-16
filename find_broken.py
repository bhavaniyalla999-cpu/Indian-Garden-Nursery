import os, re
html_files = [f for f in os.listdir('.') if f.endswith('.html')]
all_links = set()
for f in html_files:
    content = open(f, encoding='utf-8', errors='ignore').read()
    links = re.findall(r'href=[\'\"]([^\'\">]+)[\'\"]', content)
    for l in links:
        if l.endswith('.html'):
            all_links.add(l)

for l in all_links:
    if not os.path.exists(l):
        print("Broken link found:", l)

