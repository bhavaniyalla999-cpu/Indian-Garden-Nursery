import os, re
html_files = [f for f in os.listdir('.') if f.endswith('.html')]
all_src = set()
for f in html_files:
    content = open(f, encoding='utf-8', errors='ignore').read()
    links = re.findall(r'src=[\'\"]([^\'\">]+)[\'\"]', content)
    for l in links:
        if not l.startswith('http'):
            all_src.add(l)

for l in all_src:
    if not os.path.exists(l):
        print("Missing resource found:", l)

