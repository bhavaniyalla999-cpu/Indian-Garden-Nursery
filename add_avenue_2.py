with open('avenue.html', 'r', encoding='utf-8') as f:
    html = f.read()

end_str = '];'
end_idx = html.find(end_str, html.find('const AVENUE_PLANTS'))

new_plants = """
    ,{
        id:       'av-mahogany-tree-11',
        name:     'Mahogany Tree (Ultra Tall)',
        sci:      'Swietenia mahagoni',
        img:      'nursery-avenue-11.jpg',
        fallback: 'nursery-avenue-11.jpg',
        cats:     ['shade'],
        price:    1100,
        mrp:      1600,
        rating:   5.0,
        reviews:  32,
        desc:     'Ultra tall, robust mahogany tree perfect for quick shade and majestic avenue planting.',
        tags:     ['Hardwood','Shade','Instant Canopy'],
        badge:    'Premium',
        corner:   'NEW',
    },
    {
        id:       'av-false-ashoka-12',
        name:     'False Ashoka (Tall Columnar)',
        sci:      'Polyalthia longifolia',
        img:      'nursery-avenue-12.jpg',
        fallback: 'nursery-avenue-12.jpg',
        cats:     ['shade','ornamental'],
        price:    500,
        mrp:      750,
        rating:   4.8,
        reviews:  94,
        desc:     'Lush columnar tree, perfect for screening, noise reduction, and formal avenue planting.',
        tags:     ['Screening','Avenue','Evergreen'],
        badge:    'Avenue',
        corner:   null,
    },
    {
        id:       'av-spiral-topiary-13',
        name:     'Spiral Topiary (Tall)',
        sci:      'Ficus / Boxwood',
        img:      'nursery-avenue-13.jpg',
        fallback: 'nursery-avenue-13.jpg',
        cats:     ['ornamental'],
        price:    1500,
        mrp:      2200,
        rating:   4.9,
        reviews:  15,
        desc:     'Exquisitely trained spiral topiary. A stunning focal point for formal gardens and avenues.',
        tags:     ['Topiary','Formal Garden','Ornamental'],
        badge:    'Premium',
        corner:   'SALE',
    },
    {
        id:       'av-cone-topiary-14',
        name:     'Cone Topiary (Tall Pyramid)',
        sci:      'Ficus / Boxwood',
        img:      'nursery-avenue-14.jpg',
        fallback: 'nursery-avenue-14.jpg',
        cats:     ['ornamental'],
        price:    1200,
        mrp:      1800,
        rating:   4.8,
        reviews:  42,
        desc:     'Tall cone-shaped topiary trees. Excellent for framing entrances and pathways.',
        tags:     ['Topiary','Formal Garden','Ornamental'],
        badge:    'Premium',
        corner:   'NEW',
    }
"""

if end_idx != -1:
    html = html[:end_idx] + new_plants + html[end_idx:]

with open('avenue.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Added 4 more plants to avenue.html successfully.")
