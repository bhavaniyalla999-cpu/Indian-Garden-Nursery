with open('avenue.html', 'r', encoding='utf-8') as f:
    html = f.read()

end_str = '];'
end_idx = html.find(end_str, html.find('const AVENUE_PLANTS'))

new_plants = """
    ,{
        id:       'av-gulmohar-15',
        name:     'Gulmohar Tree (Tall)',
        sci:      'Delonix regia',
        img:      'nursery-avenue-15.jpg',
        fallback: 'nursery-avenue-15.jpg',
        cats:     ['shade','ornamental'],
        price:    650,
        mrp:      950,
        rating:   4.9,
        reviews:  78,
        desc:     'Tall, feathery-leafed Gulmohar tree. Famous for its brilliant red-orange blooms, perfect for avenues and parks.',
        tags:     ['Flowering','Avenue','Shade'],
        badge:    'Premium',
        corner:   'NEW',
    },
    {
        id:       'av-areca-cluster-16',
        name:     'Areca Palm (Tall Cluster)',
        sci:      'Dypsis lutescens',
        img:      'nursery-avenue-16.jpg',
        fallback: 'nursery-avenue-16.jpg',
        cats:     ['tropical','ornamental'],
        price:    900,
        mrp:      1300,
        rating:   4.8,
        reviews:  62,
        desc:     'A magnificent tall, multi-stem areca palm cluster. Creates an instant tropical statement in any landscape.',
        tags:     ['Tropical','Screening','Palm'],
        badge:    'Premium',
        corner:   'NEW',
    }
"""

if end_idx != -1:
    html = html[:end_idx] + new_plants + html[end_idx:]

with open('avenue.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Added 2 more plants to avenue.html successfully.")
