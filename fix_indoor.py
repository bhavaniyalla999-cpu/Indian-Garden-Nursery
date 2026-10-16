with open('indoor.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("\\'", "'")

with open('indoor.html', 'w', encoding='utf-8') as f:
    f.write(content)
