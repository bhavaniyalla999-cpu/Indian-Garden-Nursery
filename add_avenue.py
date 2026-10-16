with open('avenue.html', 'r', encoding='utf-8') as f:
    html = f.read()

end_str = '];'
end_idx = html.find(end_str, html.find('const AVENUE_PLANTS'))

new_plants = """
    ,{
        id:       'av-foxtail-palm-3',
        name:     'Foxtail Palm (Extra Tall)',
        sci:      'Wodyetia bifurcata',
        img:      'nursery-avenue-6.jpg',
        fallback: 'nursery-avenue-6.jpg',
        cats:     ['tropical','ornamental'],
        price:    1250,
        mrp:      1900,
        rating:   4.9,
        reviews:  55,
        desc:     'Extra tall foxtail palm. Gives an immediate majestic look to any avenue or large landscape.',
        tags:     ['Avenue','Mature','Palm'],
        badge:    'Premium',
        corner:   'NEW',
    },
    {
        id:       'av-ashoka-tree',
        name:     'False Ashoka Tree (Tall)',
        sci:      'Polyalthia longifolia',
        img:      'nursery-avenue-7.jpg',
        fallback: 'nursery-avenue-7.jpg',
        cats:     ['shade','ornamental'],
        price:    450,
        mrp:      700,
        rating:   4.8,
        reviews:  82,
        desc:     'Tall, slender evergreen tree perfect for noise reduction and screening along boundaries and avenues.',
        tags:     ['Screening','Avenue','Evergreen'],
        badge:    'Avenue',
        corner:   null,
    },
    {
        id:       'av-mango-tree-1',
        name:     'Mango Tree (Fruiting Size)',
        sci:      'Mangifera indica',
        img:      'nursery-avenue-8.jpg',
        fallback: 'nursery-avenue-8.jpg',
        cats:     ['shade'],
        price:    850,
        mrp:      1200,
        rating:   4.9,
        reviews:  134,
        desc:     'A large, healthy mango tree ready to provide shade and delicious fruits for your estate or large garden.',
        tags:     ['Fruit','Shade','Large Garden'],
        badge:    'Premium',
        corner:   null,
    },
    {
        id:       'av-mahogany-tall',
        name:     'Mahogany Tree (Extra Tall)',
        sci:      'Swietenia mahagoni',
        img:      'nursery-avenue-9.jpg',
        fallback: 'nursery-avenue-9.jpg',
        cats:     ['shade'],
        price:    950,
        mrp:      1500,
        rating:   4.9,
        reviews:  76,
        desc:     'An extremely tall mahogany tree in a heavy-duty bag. Perfect for instant avenue canopy.',
        tags:     ['Hardwood','Shade','Instant Canopy'],
        badge:    'Avenue',
        corner:   'SALE',
    },
    {
        id:       'av-boxwood-topiary',
        name:     'Boxwood Topiary Balls',
        sci:      'Buxus',
        img:      'nursery-avenue-10.jpg',
        fallback: 'nursery-avenue-10.jpg',
        cats:     ['ornamental'],
        price:    399,
        mrp:      600,
        rating:   4.7,
        reviews:  210,
        desc:     'Perfectly pruned boxwood balls. Ideal for lining formal pathways and avenues.',
        tags:     ['Topiary','Formal Garden','Ornamental'],
        badge:    'Premium',
        corner:   'NEW',
    }
"""

if end_idx != -1:
    html = html[:end_idx] + new_plants + html[end_idx:]

with open('avenue.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Added 5 new plants to avenue.html successfully.")
