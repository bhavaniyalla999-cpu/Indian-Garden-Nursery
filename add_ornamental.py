with open('ornamental.html', 'r', encoding='utf-8') as f:
    html = f.read()

end_str = '];'
end_idx = html.find(end_str, html.find('const ORNAMENTAL_PLANTS'))

new_plants = """
    ,{
        id:       'orn-lagerstroemia-4',
        name:     'Lagerstroemia / Queen Crape Myrtle',
        sci:      'Lagerstroemia speciosa',
        img:      'ornamental-4.jpg',
        fallback: 'ornamental-4.jpg',
        cats:     ['flowering','ornamental'],
        price:    599,
        mrp:      900,
        rating:   4.9,
        reviews:  54,
        desc:     'Tall, beautiful flowering tree with vibrant purple-pink blooms. A stunning ornamental specimen for large gardens and avenues.',
        tags:     ['Flowering','Tall','Purple Blooms'],
        badge:    'Premium',
        corner:   'NEW',
    },
    {
        id:       'orn-calathea-5',
        name:     'Calathea / Prayer Plant (Flowering)',
        sci:      'Calathea sp.',
        img:      'ornamental-5.jpg',
        fallback: 'ornamental-5.jpg',
        cats:     ['flowering','indoor'],
        price:    299,
        mrp:      450,
        rating:   4.8,
        reviews:  97,
        desc:     'Exotic tropical plant with striking pink-and-white flowers with a golden centre. A rare gem for indoor and shaded garden spaces.',
        tags:     ['Exotic','Flowering','Rare'],
        badge:    'Rare',
        corner:   'NEW',
    }
"""

if end_idx != -1:
    html = html[:end_idx] + new_plants + html[end_idx:]

with open('ornamental.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Added 2 more plants to ornamental.html successfully.")
