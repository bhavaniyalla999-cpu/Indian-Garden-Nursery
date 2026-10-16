with open('outdoor.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace key identifiers for outdoor -> ornamental
html = html.replace('Outdoor Plants', 'Ornamental Plants')
html = html.replace('outdoor plants', 'ornamental plants')
html = html.replace('outdoor.html', 'ornamental.html')
html = html.replace('OUTDOOR_PLANTS', 'ORNAMENTAL_PLANTS')
html = html.replace('od-', 'orn-')

# Find the data array and replace
start_str = 'const ORNAMENTAL_PLANTS = ['
start_idx = html.find(start_str)
end_str = '];'
end_idx = html.find(end_str, start_idx)

new_plants = """
    {
        id:       'orn-canna-pink',
        name:     'Canna Lily (Pink)',
        sci:      'Canna indica',
        img:      'ornamental-1.jpg',
        fallback: 'ornamental-1.jpg',
        cats:     ['flowering','tropical'],
        price:    199,
        mrp:      350,
        rating:   4.9,
        reviews:  88,
        desc:     'Stunning pink Canna Lily with large glossy leaves and vibrant blooms. Ideal for borders and mass planting.',
        tags:     ['Flowering','Tropical','Border'],
        badge:    'Popular',
        corner:   'NEW',
    },
    {
        id:       'orn-plumeria-1',
        name:     'Plumeria / Frangipani',
        sci:      'Plumeria rubra',
        img:      'ornamental-2.jpg',
        fallback: 'ornamental-2.jpg',
        cats:     ['flowering','ornamental'],
        price:    349,
        mrp:      550,
        rating:   4.8,
        reviews:  142,
        desc:     'Beautiful branched Plumeria shrub ready to bloom. Fragrant pink-white flowers perfect for gardens and temples.',
        tags:     ['Fragrant','Flowering','Low Maintenance'],
        badge:    'Premium',
        corner:   null,
    },
    {
        id:       'orn-canna-red',
        name:     'Canna Lily (Red)',
        sci:      'Canna indica',
        img:      'ornamental-3.jpg',
        fallback: 'ornamental-3.jpg',
        cats:     ['flowering','tropical'],
        price:    199,
        mrp:      350,
        rating:   4.9,
        reviews:  76,
        desc:     'Bold red Canna Lily with tropical broad leaves. A striking accent plant for garden beds and pathways.',
        tags:     ['Flowering','Tropical','Garden Bed'],
        badge:    'Popular',
        corner:   'NEW',
    }
"""

if start_idx != -1 and end_idx != -1:
    html = html[:start_idx + len(start_str)] + new_plants + html[end_idx:]

with open('ornamental.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("ornamental.html built successfully with 3 plants.")
