import os

with open('outdoor.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace titles, headings
html = html.replace('Outdoor Plants', 'Avenue Trees')
html = html.replace('outdoor.html', 'avenue.html')
html = html.replace('outdoor plants', 'avenue trees')
html = html.replace('Outdoor', 'Avenue')
html = html.replace('outdoor', 'avenue')
html = html.replace('OUTDOOR', 'AVENUE')
html = html.replace('od-', 'av-') # CSS prefixes and IDs

# Find the array definition and replace it
start_str = 'const AVENUE_PLANTS = ['
end_str = '];'
start_idx = html.find(start_str)
end_idx = html.find(end_str, start_idx)

new_plants = """
    {
        id:       'av-foxtail-palm-1',
        name:     'Foxtail Palm (Tall)',
        sci:      'Wodyetia bifurcata',
        img:      'nursery-avenue-1.jpg',
        fallback: 'nursery-avenue-1.jpg',
        cats:     ['tropical','ornamental'],
        price:    1200,
        mrp:      1800,
        rating:   4.9,
        reviews:  42,
        desc:     'A magnificent, mature foxtail palm. Extremely tall and perfect for grand avenue planting and large estates.',
        tags:     ['Avenue','Mature','Palm'],
        badge:    'Premium',
        corner:   'NEW',
    },
    {
        id:       'av-foxtail-palm-2',
        name:     'Royal Palm (Semi-Mature)',
        sci:      'Roystonea regia',
        img:      'nursery-avenue-2.jpg',
        fallback: 'nursery-avenue-2.jpg',
        cats:     ['tropical','ornamental'],
        price:    950,
        mrp:      1400,
        rating:   4.8,
        reviews:  35,
        desc:     'Beautiful tall palm tree ready for transplanting. Ideal for lining driveways and property borders.',
        tags:     ['Avenue','Fast Growing'],
        badge:    'Premium',
        corner:   null,
    },
    {
        id:       'av-areca-tall',
        name:     'Areca Palm (Avenue Size)',
        sci:      'Dypsis lutescens',
        img:      'nursery-avenue-3.jpg',
        fallback: 'nursery-avenue-3.jpg',
        cats:     ['tropical','shade'],
        price:    750,
        mrp:      1100,
        rating:   4.7,
        reviews:  89,
        desc:     'A very large, bushy clustering palm that provides excellent screening and a lush tropical look along pathways.',
        tags:     ['Screening','Tropical'],
        badge:    'Avenue',
        corner:   null,
    },
    {
        id:       'av-mahogany-1',
        name:     'Mahogany Tree (Mature)',
        sci:      'Swietenia mahagoni',
        img:      'nursery-avenue-4.jpg',
        fallback: 'nursery-avenue-4.jpg',
        cats:     ['shade'],
        price:    850,
        mrp:      1300,
        rating:   4.9,
        reviews:  110,
        desc:     'A large, well-established hardwood shade tree in a heavy-duty grow bag, ready to provide instant canopy.',
        tags:     ['Shade','Hardwood','Instant Canopy'],
        badge:    'Avenue',
        corner:   'SALE',
    },
    {
        id:       'av-ficus-1',
        name:     'Ficus Benjamina (Tall)',
        sci:      'Ficus benjamina',
        img:      'nursery-avenue-5.jpg',
        fallback: 'nursery-avenue-5.jpg',
        cats:     ['shade','ornamental'],
        price:    600,
        mrp:      900,
        rating:   4.8,
        reviews:  65,
        desc:     'A tall, bushy ficus tree perfect for avenue planting or creating a dense green wall.',
        tags:     ['Shade','Screening','Evergreen'],
        badge:    'Avenue',
        corner:   null,
    }
"""

if start_idx != -1 and end_idx != -1:
    html = html[:start_idx + len(start_str)] + new_plants + html[end_idx:]

with open('avenue.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("avenue.html built successfully.")
