// ============================================================================
// THE INDIAN GARDEN NURSERY — AMAZON-STYLE CORE E-COMMERCE ENGINE
// ============================================================================

// 1. Unified Global Product Database
const PRODUCTS_DB = [
    {
        id: "indoor_zz_designer",
        name: "Designer ZZ Plant",
        category: "Indoor",
        price: 199,
        oldPrice: 349,
        img: "premium-zz.jpg",
        rating: 4.9,
        reviews: 218,
        scientificName: "Zamioculcas zamiifolia",
        sunlight: "Low to Bright Indirect Light",
        watering: "Once every 2-3 weeks (Dry soil completely)",
        height: "1.5 - 2 Feet",
        desc: "A perfectly grown, ultra-glossy ZZ plant housed in a sleek, minimalist ceramic pot. Its waxy leaves reflect light, bringing a vibrant, premium green aesthetic into modern living rooms and office workspaces. Renowned as a powerful air purifier and nearly indestructible.",
        prime: true,
        stock: 5
    },
    {
        id: "indoor_peace_lily",
        name: "Elegant Peace Lily",
        category: "Indoor",
        price: 199,
        oldPrice: 299,
        img: "peace-lily.jpg",
        rating: 4.7,
        reviews: 184,
        scientificName: "Spathiphyllum wallisii",
        sunlight: "Medium to Low Indirect Light",
        watering: "Once a week (When leaves slightly droop)",
        height: "1.2 - 1.8 Feet",
        desc: "Features striking, elegant hood-like white blooms and broad, deep green foliage. It is recognized by NASA as one of the absolute best air-purifying houseplants, filtering out household toxins while humidifying indoor air.",
        prime: true,
        stock: 8
    },
    {
        id: "indoor_areca_tabletop",
        name: "Tabletop Areca Palm",
        category: "Indoor",
        price: 199,
        oldPrice: 279,
        img: "indoor-palm.jpg",
        rating: 4.6,
        reviews: 96,
        scientificName: "Dypsis lutescens",
        sunlight: "Bright Indirect Sunlight",
        watering: "Twice a week (Keep soil lightly moist)",
        height: "1.5 Feet",
        desc: "A lush, compact variety of the standard Areca Palm. Designed specifically for office desks, dining tables, and small corner shelves to bring a refreshing, tropical canopy inside your spaces.",
        prime: false,
        stock: 12
    },
    {
        id: "indoor_snake_premium",
        name: "Premium Snake Plant",
        category: "Indoor",
        price: 199,
        oldPrice: 329,
        img: "snake-plant.jpg",
        rating: 4.8,
        reviews: 312,
        scientificName: "Sansevieria trifasciata",
        sunlight: "Adapts to Low, Medium, or Bright Light",
        watering: "Every 2-3 weeks (Allow soil to dry fully)",
        height: "2 - 2.5 Feet",
        desc: "Features architectural, tall sword-shaped leaves with beautiful golden-yellow margins. This resilient plant acts as a nocturnal oxygen generator, purifying air at night, making it the perfect bedroom companion.",
        prime: true,
        stock: 3
    },
    {
        id: "indoor_areca_palm",
        name: "Areca Palm",
        category: "Indoor",
        price: 249,
        oldPrice: 399,
        img: "areca-palm.jpg",
        rating: 4.7,
        reviews: 145,
        scientificName: "Dypsis lutescens",
        sunlight: "Bright, Indirect Light",
        watering: "Twice a week",
        height: "3.5 - 4.5 Feet",
        desc: "A tall, highly graceful tropical plant with delicate, arching feathery fronds. It is exceptionally effective at filtering toxic formaldehydes, making it highly recommended for large living spaces.",
        prime: true,
        stock: 7
    },
    {
        id: "indoor_fiddle_fig",
        name: "Fiddle Leaf Fig",
        category: "Indoor",
        price: 349,
        oldPrice: 599,
        img: "ficus-lyrata.jpg",
        rating: 4.5,
        reviews: 82,
        scientificName: "Ficus lyrata",
        sunlight: "Consistent, Bright Filtered Light",
        watering: "Once a week (When top 2 inches dry out)",
        height: "3 - 4 Feet",
        desc: "The ultimate modern interior statement plant. Featuring huge, violin-shaped glossy green leaves and a robust woody stem, it is a designer centerpiece for stylish homes.",
        prime: true,
        stock: 4
    },
    {
        id: "indoor_boston_fern",
        name: "Boston Fern",
        category: "Indoor",
        price: 149,
        oldPrice: 249,
        img: "boston-fern.jpg",
        rating: 4.6,
        reviews: 73,
        scientificName: "Nephrolepis exaltata",
        sunlight: "Medium Indirect Light, High Humidity",
        watering: "Keep soil consistently damp, mist weekly",
        height: "1 - 1.5 Feet",
        desc: "A gorgeous, arching cascading fern that thrives in hanging baskets or tall pedestals. Its tiny, feathery green fronds filter toxins and act as a natural humidifier.",
        prime: false,
        stock: 15
    },
    {
        id: "indoor_alocasia",
        name: "Alocasia (Elephant Ear)",
        category: "Indoor",
        price: 299,
        oldPrice: 449,
        img: "alocasia.jpg",
        rating: 4.4,
        reviews: 58,
        scientificName: "Alocasia amazonica",
        sunlight: "Bright, Humid Indirect Light",
        watering: "Weekly (Keep soil damp, not soggy)",
        height: "2 Feet",
        desc: "An exotic tropical plant with striking, dark emerald shield-shaped leaves featuring dramatic silver-white ribs. Adds a dramatic jungle aesthetic to any room.",
        prime: true,
        stock: 3
    },
    {
        id: "indoor_rubber_plant",
        name: "Rubber Plant",
        category: "Indoor",
        price: 199,
        oldPrice: 299,
        img: "rubber-plant.jpg",
        rating: 4.8,
        reviews: 112,
        scientificName: "Ficus elastica",
        sunlight: "Medium to Bright Indirect Light",
        watering: "Every 7-10 days",
        height: "2.5 Feet",
        desc: "Boasts thick, leathery leaves with a stunning deep burgundy-black hue and contrasting red sheaths on new growth. An incredibly hardy and dramatic houseplant.",
        prime: true,
        stock: 9
    },
    {
        id: "indoor_dwarf_snake_plant",
        name: "Dwarf Snake Plant",
        category: "Indoor",
        price: 149,
        oldPrice: 249,
        img: "dwarf-snake-plant.jpg",
        rating: 4.7,
        reviews: 68,
        scientificName: "Sansevieria trifasciata 'Hahnii'",
        sunlight: "Low to Bright Indirect Light",
        watering: "Once every 3 weeks",
        height: "0.5 - 0.8 Feet",
        desc: "A charming, nest-shaped dwarf snake plant with beautifully variegated green and cream leaves. Fits perfectly on compact home and office desks to refresh the air and mood.",
        prime: false,
        stock: 18
    },
    {
        id: "indoor_spider_plant",
        name: "Spider Plant",
        category: "Indoor",
        price: 129,
        oldPrice: 199,
        img: "spider-plant.jpg",
        rating: 4.6,
        reviews: 114,
        scientificName: "Chlorophytum comosum",
        sunlight: "Bright Filtered Light",
        watering: "Weekly (Keep lightly moist)",
        height: "1 Foot",
        desc: "An absolute classic featuring arching green-and-white striped foliage. Highly effective in absorbing carbon monoxide and formaldehydes, and is entirely pet-safe.",
        prime: true,
        stock: 14
    },
    {
        id: "indoor_dragon_tree",
        name: "Dragon Tree",
        category: "Indoor",
        price: 249,
        oldPrice: 399,
        img: "dragon-tree.jpg",
        rating: 4.5,
        reviews: 79,
        scientificName: "Dracaena marginata",
        sunlight: "Bright Indirect Light",
        watering: "Every 10-14 days",
        height: "2 - 3 Feet",
        desc: "Stunning upright architectural plant displaying narrow, ribbon-like green leaves with dramatic burgundy margins. Extremely resilient and drought-tolerant for modern rooms.",
        prime: true,
        stock: 6
    },
    {
        id: "indoor_sago_palm",
        name: "Sago Palm",
        category: "Indoor",
        price: 499,
        oldPrice: 799,
        img: "cycas-palm.jpg",
        rating: 4.8,
        reviews: 105,
        scientificName: "Cycas revoluta",
        sunlight: "Bright Indirect to Full Sun",
        watering: "Low (Let dry completely)",
        height: "2.5 Feet",
        desc: "A slow-growing premium prehistoric palm with stiff, symmetrical feather-like fronds growing from a thick trunk. Ideal for bringing an elegant, high-end tropical focal point.",
        prime: true,
        stock: 4
    },
    {
        id: "indoor_variegated_ficus",
        name: "Variegated Ficus",
        category: "Indoor",
        price: 349,
        oldPrice: 549,
        img: "variegated-ficus.jpg",
        rating: 4.6,
        reviews: 88,
        scientificName: "Ficus benjamina 'Variegata'",
        sunlight: "Bright, Indirect Sunlight",
        watering: "Weekly (Keep slightly damp)",
        height: "3 Feet",
        desc: "A very stylish, branching indoor tree presenting gorgeous green-and-white marbled leaves. Perfect for modern living room corners to add brightness and contrast.",
        prime: true,
        stock: 5
    },
    {
        id: "indoor_classic_zz",
        name: "Classic ZZ Plant",
        category: "Indoor",
        price: 199,
        oldPrice: 299,
        img: "zz-plant.jpg",
        rating: 4.8,
        reviews: 192,
        scientificName: "Zamioculcas zamiifolia 'Classic'",
        sunlight: "Low to Bright Indirect Light",
        watering: "Once every 2-3 weeks",
        height: "1.5 Feet",
        desc: "Renowned for its near-indestructibility, this plant features waxy, glossy deep green leaves that thrive beautifully even in dark corners or low-lit workspaces.",
        prime: false,
        stock: 16
    },

    {
        id: "fruit_star_fruit",
        name: "Sweet Star Fruit",
        category: "Fruit",
        price: 149,
        oldPrice: 249,
        img: "star-fruit.jpg",
        rating: 4.7,
        reviews: 104,
        scientificName: "Averrhoa carambola",
        sunlight: "Full Sun to Light Partial Shade",
        watering: "Keep soil moist, water deeply when dry",
        height: "3.5 Feet",
        desc: "A prolific, exotic fruit tree that bears heavy clusters of sweet, juicy, star-shaped yellow fruits. Compact growth makes it suitable for container planting on sunny balconies.",
        prime: true,
        stock: 4
    },
    {
        id: "fruit_manila_cherry",
        name: "Exotic Manila Cherry",
        category: "Fruit",
        price: 249,
        oldPrice: 399,
        img: "manila-cherry.jpg",
        rating: 4.6,
        reviews: 56,
        scientificName: "Flacourtia inermis",
        sunlight: "Full Direct Sun",
        watering: "Water regularly when soil dries",
        height: "3 Feet",
        desc: "A rare and highly decorative tropical fruit tree bearing clusters of round cherry-like red fruits with a sweet, acidic pulp. Adds unique value and flavor to your home collection.",
        prime: false,
        stock: 8
    },

    {
        id: "fruit_makota_dewa",
        name: "Medicinal Makota Dewa",
        category: "Fruit",
        price: 399,
        oldPrice: 599,
        img: "makota-dewa.jpg",
        rating: 4.9,
        reviews: 92,
        scientificName: "Phaleria macrocarpa",
        sunlight: "Full Sun to Partial Shade",
        watering: "Moderate regular watering",
        height: "2.5 Feet",
        desc: "Known as 'God's Crown' in Indonesia. Grows into a beautiful shrub producing striking red medicinal fruits along the branches. Outstanding therapeutic benefits and ornamental look.",
        prime: true,
        stock: 6
    },
    {
        id: "fruit_terengana_cherry",
        name: "Exotic Terengana Cherry",
        category: "Fruit",
        price: 249,
        oldPrice: 399,
        img: "terengana-cherry.jpg",
        rating: 4.5,
        reviews: 38,
        scientificName: "Lepisanthes fruticosa",
        sunlight: "Full Sun to Light Shade",
        watering: "Keep moist, water deeply when dry",
        height: "3 Feet",
        desc: "A rare tropical collector's fruit producing striking, dense hanging clusters of colorful purple-black berries. Sweet and highly decorative for private orchards.",
        prime: false,
        stock: 5
    },

    {
        id: "fruit_milk_fruit",
        name: "Exotic Milk Fruit",
        category: "Fruit",
        price: 299,
        oldPrice: 449,
        img: "milk-fruit.jpg",
        rating: 4.7,
        reviews: 64,
        scientificName: "Chrysophyllum cainito",
        sunlight: "Full Sun to Light Shade",
        watering: "Water twice a week deeply",
        height: "3 Feet",
        desc: "Also known as Star Apple. The tree features beautiful two-toned golden leaves, and produces incredibly sweet, creamy, dessert-quality milk fruit that tastes like sweet cream.",
        prime: true,
        stock: 4
    },
    {
        id: "fruit_green_apple",
        name: "Green Apple Sapling",
        category: "Fruit",
        price: 349,
        oldPrice: 499,
        img: "nursery-real-1.jpg",
        rating: 4.5,
        reviews: 48,
        scientificName: "Malus domestica 'Green'",
        sunlight: "Full Direct Sun",
        watering: "Regular deep watering",
        height: "3.5 Feet",
        desc: "Special low-chill green apple grafts developed specifically for warm climates. Fast-growing and highly adapted to bear crisp green apples in coastal or warm regions.",
        prime: true,
        stock: 7
    },
    {
        id: "fruit_dragon_fruit",
        name: "Dragon Fruit Plant",
        category: "Fruit",
        price: 199,
        oldPrice: 299,
        img: "nursery-real-2.jpg",
        rating: 4.8,
        reviews: 165,
        scientificName: "Hylocereus undatus",
        sunlight: "Full Intense Sunlight",
        watering: "Low (Once a week)",
        height: "1.5 Feet (Cuttings)",
        desc: "High-yielding red and white fleshed dragon fruit vine stock. Extremely easy to care for, climbing cactus variety that produces spectacular nocturnal blooms and delicious fruits.",
        prime: true,
        stock: 20
    },
    {
        id: "fruit_sweet_orange",
        name: "Sweet Orange Tree",
        category: "Fruit",
        price: 249,
        oldPrice: 399,
        img: "nursery-real-3.jpg",
        rating: 4.7,
        reviews: 142,
        scientificName: "Citrus sinensis",
        sunlight: "Full Direct Sun",
        watering: "Twice a week deeply",
        height: "3 Feet",
        desc: "Robust, premium sweet orange citrus tree grafts. Extremely heavy bearing, supplying sweet, juicy, vitamins-rich oranges on a healthy dwarf tree that fits home backyards.",
        prime: false,
        stock: 15
    },
    {
        id: "fruit_guava",
        name: "Premium Guava Sapling",
        category: "Fruit",
        price: 149,
        oldPrice: 249,
        img: "guava-plant.jpg",
        rating: 4.8,
        reviews: 120,
        scientificName: "Psidium guajava",
        sunlight: "Full Sun",
        watering: "Deep watering twice a week",
        height: "3.5 Feet",
        desc: "High-yielding, fast-growing local guava saplings. Known for bearing sweet, crunchy, aromatic white-fleshed guavas within months of transplantation into ground or large tubs.",
        prime: true,
        stock: 18
    },
    {
        id: "fruit_custard_apple",
        name: "Custard Apple (Seethaphal)",
        category: "Fruit",
        price: 199,
        oldPrice: 299,
        img: "custard-apple.jpg",
        rating: 4.7,
        reviews: 79,
        scientificName: "Annona squamosa",
        sunlight: "Full Sunlight",
        watering: "Twice a week when young",
        height: "3 Feet (Grafted)",
        desc: "A healthy grafted plant of the traditional Sitaphal. It grows quickly, is drought-tolerant once established, and yields incredibly sweet, custard-textured fruits.",
        prime: true,
        stock: 14
    },
    {
        id: "fruit_lemon_local",
        name: "Local Lemon Tree",
        category: "Fruit",
        price: 129,
        oldPrice: 199,
        img: "lemon-tree.jpg",
        rating: 4.6,
        reviews: 156,
        scientificName: "Citrus limon 'Local'",
        sunlight: "Full Sun",
        watering: "Twice a week",
        height: "2.5 Feet",
        desc: "Extremely heavy-bearing, juicy local lemon variety. Easy to care for, supplying lemons year-round. An essential and extremely rewarding addition to every home garden.",
        prime: false,
        stock: 25
    },
    {
        id: "outdoor_avenue_trees",
        name: "Premium Avenue Trees",
        category: "Outdoor",
        price: 299,
        oldPrice: 449,
        img: "avenue-trees.png",
        rating: 4.8,
        reviews: 154,
        scientificName: "Conocarpus erectus",
        sunlight: "Full Intense Sunlight",
        watering: "Once daily when newly planted",
        height: "6-8 Feet (Sturdy Sapling)",
        desc: "Fast-growing, highly resilient landscape avenue trees. Specifically cultivated for roadsides, villa boundaries, and farm plantations. Outstanding survival and rapid growth rates.",
        prime: false,
        stock: 50
    },
    {
        id: "outdoor_ficus_cone",
        name: "Ficus Topiary Cone",
        category: "Outdoor",
        price: 349,
        oldPrice: 549,
        img: "topiary-tree.jpg",
        rating: 4.8,
        reviews: 118,
        scientificName: "Ficus microcarpa 'Topiary'",
        sunlight: "Full Sun to Partial Shade",
        watering: "Moderate, consistent watering",
        height: "4 Feet",
        desc: "Meticulously sheared and pruned over several years into a flawless architectural cone. Perfect for adding symmetrical elegance and luxury styling to walkways and garden steps.",
        prime: true,
        stock: 6
    },
    {
        id: "outdoor_cycas_palm",
        name: "Elegant Cycas Palm",
        category: "Outdoor",
        price: 399,
        oldPrice: 599,
        img: "cycas-palm.jpg",
        rating: 4.9,
        reviews: 240,
        scientificName: "Cycas revoluta",
        sunlight: "Bright Light to Full Sun",
        watering: "Low (Water only when soil is completely dry)",
        height: "2.5 Feet",
        desc: "Also known as the Sago Palm, this slow-growing beauty features a thick woody trunk and stiff, crown-like feathery fronds. Adds a touch of rugged, architectural luxury.",
        prime: true,
        stock: 4
    },
    {
        id: "outdoor_champaka",
        name: "Fragrant Champaka",
        category: "Outdoor",
        price: 249,
        oldPrice: 399,
        img: "brundavana-champaka.jpg",
        rating: 4.7,
        reviews: 135,
        scientificName: "Magnolia champaca",
        sunlight: "Full Sun",
        watering: "Twice a week",
        height: "4 Feet",
        desc: "Produces highly aromatic, beautiful yellow flowers with a divine, long-lasting fragrance. Thrives outdoors and is deeply cherished in traditional home gardens and temple courtyards.",
        prime: true,
        stock: 10
    },
    {
        id: "outdoor_ficus_lyrata_21",
        name: "Ficus Lyrata (21/21)",
        category: "Outdoor",
        price: 599,
        oldPrice: 999,
        img: "ficus-lyrata.jpg",
        rating: 4.9,
        reviews: 165,
        scientificName: "Ficus lyrata '21/21'",
        sunlight: "Bright, Indirect to Filtered Sun",
        watering: "Moderate (Every 7-9 days)",
        height: "5 Feet (Landscape Ready)",
        desc: "Premium, massive landscape-ready 21/21 Ficus Lyrata. Featuring multiple thick branches and huge, robust waxy leaves. Perfect for luxury villa entrances and landscape focal points.",
        prime: true,
        stock: 2
    },
    {
        id: "outdoor_round_topiary",
        name: "Elegant Round Topiary",
        category: "Outdoor",
        price: 379,
        oldPrice: 579,
        img: "round-topiary.jpg",
        rating: 4.7,
        reviews: 86,
        scientificName: "Ficus microcarpa 'Globe'",
        sunlight: "Full Direct Sunlight",
        watering: "Regular (Keep moist in summer)",
        height: "3.5 Feet",
        desc: "Expertly trimmed into a dense, perfect spherical green globe on a sturdy single stem. Ideal for modern formal garden layouts, geometric planters, and entrance pathways.",
        prime: false,
        stock: 8
    },
    {
        id: "outdoor_areca_graceful",
        name: "Graceful Areca Palm",
        category: "Outdoor",
        price: 279,
        oldPrice: 449,
        img: "areca-palm.jpg",
        rating: 4.8,
        reviews: 154,
        scientificName: "Dypsis lutescens 'Graceful'",
        sunlight: "Bright Indirect to Full Sun",
        watering: "Water twice a week",
        height: "5 Feet",
        desc: "Tall, lush, and arching feathery palm trees ready to plant. Outstanding for forming instant privacy screens, landscape green walls, and adding a high-end resort feel to garden borders.",
        prime: true,
        stock: 15
    },
    {
        id: "outdoor_shade_trees",
        name: "Mature Shade Trees",
        category: "Outdoor",
        price: 899,
        oldPrice: 1499,
        img: "tall-shade-tree.jpg",
        rating: 4.7,
        reviews: 68,
        scientificName: "Peltophorum pterocarpum",
        sunlight: "Full Sun",
        watering: "Deep weekly watering",
        height: "8-10 Feet (Root balled)",
        desc: "Sturdy, mature shade tree saplings presenting developed canopies. Ideal for immediate greening, providing natural shade, and landscaping large villa grounds or parks.",
        prime: false,
        stock: 10
    },
    {
        id: "outdoor_fan_palm",
        name: "Majestic Fan Palm",
        category: "Outdoor",
        price: 449,
        oldPrice: 699,
        img: "tall-fan-palm.jpg",
        rating: 4.8,
        reviews: 112,
        scientificName: "Pritchardia pacifica",
        sunlight: "Full Direct Sun",
        watering: "Moderate weekly",
        height: "5 Feet",
        desc: "A spectacular fan palm displaying large, pleated bright green fan-like leaves. An extremely elegant statement plant highly coveted for adding architectural focus in luxury gardens.",
        prime: true,
        stock: 6
    },
    {
        id: "outdoor_royal_cuban",
        name: "Royal Cuban Palms",
        category: "Outdoor",
        price: 499,
        oldPrice: 799,
        img: "gallery-royal-palms.jpg",
        rating: 4.9,
        reviews: 134,
        scientificName: "Roystonea regia",
        sunlight: "Full Direct Sunlight",
        watering: "Water deeply twice a week",
        height: "6-7 Feet",
        desc: "Tall, majestic royal palms boasting smooth concrete-like gray trunks and dense dark green crowns. Perfect for formal avenue lining and grand estate entranceways.",
        prime: true,
        stock: 12
    },
    {
        id: "outdoor_privacy_shrub",
        name: "Tall Privacy Shrub",
        category: "Outdoor",
        price: 229,
        oldPrice: 349,
        img: "tall-privacy-shrub.jpg",
        rating: 4.6,
        reviews: 94,
        scientificName: "Clerodendrum inerme",
        sunlight: "Full Sun",
        watering: "Regular moderate watering",
        height: "3.5 Feet",
        desc: "Fast-growing, evergreen dense shrub stock. Specially grown to shear into green walls and privacy hedges to keep out noise and dust from road edges.",
        prime: false,
        stock: 40
    },
    {
        id: "outdoor_bonsai_topiary",
        name: "Bonsai Style Topiary",
        category: "Outdoor",
        price: 1299,
        oldPrice: 1999,
        img: "bonsai-topiary.jpg",
        rating: 4.9,
        reviews: 73,
        scientificName: "Ficus microcarpa 'Bonsai'",
        sunlight: "Full Sun to Light Shade",
        watering: "Moderate regular watering",
        height: "4 Feet (Developed Trunk)",
        desc: "A magnificent large-scale topiary shaped into a premium cloud-style bonsai. Crafted meticulously over years to serve as a high-end living sculpture in prestige villa lawns.",
        prime: true,
        stock: 3
    },
    {
        id: "outdoor_neem_tree",
        name: "Healthy Neem Tree",
        category: "Outdoor",
        price: 149,
        oldPrice: 249,
        img: "neem-tree.jpg",
        rating: 4.7,
        reviews: 158,
        scientificName: "Azadirachta indica",
        sunlight: "Full Sun",
        watering: "Low to moderate",
        height: "4.5 Feet",
        desc: "The ultimate medicinal shade tree. Healthy saplings growing robust root systems. Offers outstanding natural purification, herbal properties, and a dense refreshing canopy.",
        prime: false,
        stock: 30
    },
    {
        id: "outdoor_timber_saplings",
        name: "Quality Timber Saplings",
        category: "Outdoor",
        price: 99,
        oldPrice: 179,
        img: "timber-saplings.jpg",
        rating: 4.5,
        reviews: 84,
        scientificName: "Tectona grandis",
        sunlight: "Full Sun",
        watering: "Regular watering until established",
        height: "3 Feet",
        desc: "High-quality, fast-growing teak wood saplings. Excellent for long-term farm forestry and commercial timber plantations. Extremely resilient with high growth success rates.",
        prime: false,
        stock: 100
    },
    {
        id: "outdoor_broadleaf_shade",
        name: "Broadleaf Shade Trees",
        category: "Outdoor",
        price: 349,
        oldPrice: 499,
        img: "broadleaf-avenue-trees.jpg",
        rating: 4.7,
        reviews: 56,
        scientificName: "Terminalia catappa",
        sunlight: "Full Sun",
        watering: "Regular deep watering",
        height: "5-6 Feet",
        desc: "Produces massive, broad, leather-like leaves growing in a horizontal tiered umbrella-like structure. Fantastic shade tree supplying cool shade and vibrant red leaf displays in autumn.",
        prime: false,
        stock: 15
    },
    {
        id: "ornamental_yellow_flowering",
        name: "Premium Yellow Flowering Tree",
        category: "Ornamental",
        price: 279,
        oldPrice: 449,
        img: "yellow-ornamental.jpg",
        rating: 4.8,
        reviews: 114,
        scientificName: "Tecoma stans",
        sunlight: "Full Direct Sun",
        watering: "Twice a week",
        height: "4 Feet",
        desc: "Striking yellow trumpet-like blooms that create a spectacular visual display. Ideal as a focal point in luxury landscapes and large gardens.",
        prime: true,
        stock: 10
    },
    {
        id: "ornamental_bougainvillea",
        name: "Premium Bougainvillea",
        category: "Ornamental",
        price: 189,
        oldPrice: 299,
        img: "bougainvillea.jpg",
        rating: 4.7,
        reviews: 162,
        scientificName: "Bougainvillea glabra",
        sunlight: "Full Intense Sunlight",
        watering: "Low (Water when dry)",
        height: "3 Feet",
        desc: "Vibrant, heavy-flowering pink climber ready to train over pergolas and villa gates. Highly drought-tolerant once established and thrives under heat.",
        prime: true,
        stock: 20
    },
    {
        id: "ornamental_red_flowering",
        name: "Exotic Red Flowering Tree",
        category: "Ornamental",
        price: 299,
        oldPrice: 449,
        img: "red-ornamental.jpg",
        rating: 4.8,
        reviews: 128,
        scientificName: "Delonix regia",
        sunlight: "Full Sun",
        watering: "Water deeply twice a week",
        height: "4.5 Feet",
        desc: "Breathtaking clusters of deep red flowers. A rare and stunning variety that adds a touch of tropical luxury to any landscape.",
        prime: true,
        stock: 8
    },
    {
        id: "ornamental_white_yellow",
        name: "Premium White-Yellow Flowering Tree",
        category: "Ornamental",
        price: 289,
        oldPrice: 449,
        img: "white-yellow-ornamental.jpg",
        rating: 4.8,
        reviews: 139,
        scientificName: "Plumeria obtusa",
        sunlight: "Full Sunlight",
        watering: "Low (Water once a week)",
        height: "3.5 Feet",
        desc: "A stunning hybrid featuring delicate white and yellow blossoms. Perfect for adding a touch of elegance and soft color to your garden landscape.",
        prime: true,
        stock: 6
    },
    {
        id: "ornamental_petunias",
        name: "Vibrant Petunias",
        category: "Ornamental",
        price: 89,
        oldPrice: 149,
        img: "ornamental-petunia.jpg",
        rating: 4.6,
        reviews: 210,
        scientificName: "Petunia hybrida",
        sunlight: "Full Sun to Partial Shade",
        watering: "Moderate regular watering",
        height: "0.8 Feet",
        desc: "Stunning seasonal bedding flowers supplying a vibrant, continuous display of colors. Fantastic for borders, hanging baskets, and veranda styling.",
        prime: false,
        stock: 50
    },
    {
        id: "ornamental_pink_canna",
        name: "Pink Canna Lily",
        category: "Ornamental",
        price: 129,
        oldPrice: 199,
        img: "pink-canna-lily.jpg",
        rating: 4.7,
        reviews: 85,
        scientificName: "Canna indica",
        sunlight: "Full Direct Sun",
        watering: "Twice a week",
        height: "2.5 Feet",
        desc: "Presents lush banana-like green leaves and heavy spikes of radiant pink flowers. An outstanding addition to moist garden edges and pond borders.",
        prime: false,
        stock: 18
    },
    {
        id: "ornamental_plumeria",
        name: "Plumeria Plant",
        category: "Ornamental",
        price: 249,
        oldPrice: 399,
        img: "plumeria-plant.jpg",
        rating: 4.8,
        reviews: 114,
        scientificName: "Plumeria rubra",
        sunlight: "Full Sun",
        watering: "Low (Water when dry)",
        height: "3.5 Feet",
        desc: "Beautiful, highly fragrant red and pink plumeria blossoms. Thrives beautifully under hot conditions, bringing an exotic fragrance to terrace gardens.",
        prime: true,
        stock: 7
    },
    {
        id: "ornamental_premium_tree",
        name: "Premium Ornamental Tree",
        category: "Ornamental",
        price: 499,
        oldPrice: 799,
        img: "premium-ornamental-tree.jpg",
        rating: 4.9,
        reviews: 65,
        scientificName: "Tabebuia rosea",
        sunlight: "Full Sun",
        watering: "Weekly deep watering",
        height: "5 Feet",
        desc: "A highly coveted ornamental landscape tree producing clouds of trumpet-like pink and lavender flowers. Creates an incredible blossom display in spring.",
        prime: true,
        stock: 5
    },
    {
        id: "ornamental_red_brush",
        name: "Red Brush Shrub",
        category: "Ornamental",
        price: 199,
        oldPrice: 299,
        img: "red-brush-ornamental.jpg",
        rating: 4.6,
        reviews: 64,
        scientificName: "Syzygium myrtifolium",
        sunlight: "Full Direct Sun",
        watering: "Moderate regular watering",
        height: "3 Feet",
        desc: "A gorgeous hedging shrub featuring highly vibrant red-tipped new leaves that slowly fade to deep green. Creates striking, colorful natural privacy borders.",
        prime: true,
        stock: 18
    },
    {
        id: "ornamental_red_robin",
        name: "Red Robin Stock",
        category: "Ornamental",
        price: 329,
        oldPrice: 499,
        img: "gallery-red-robin-stock.jpg",
        rating: 4.7,
        reviews: 54,
        scientificName: "Photinia x fraseri 'Red Robin'",
        sunlight: "Full Sun to Partial Shade",
        watering: "Moderate regular watering",
        height: "3.5 Feet",
        desc: "A dense, upright evergreen shrub displaying highly glossy foliage, with brilliant crimson-red new leaf growth. Outstanding choice for luxurious hedging.",
        prime: false,
        stock: 12
    },
    {
        id: "ornamental_crepe_myrtle",
        name: "Crepe Myrtle",
        category: "Ornamental",
        price: 269,
        oldPrice: 399,
        img: "gallery-crepe-myrtle.jpg",
        rating: 4.8,
        reviews: 76,
        scientificName: "Lagerstroemia indica",
        sunlight: "Full Direct Sunlight",
        watering: "Regular watering",
        height: "4 Feet",
        desc: "Produces massive crinkled pink, red, or white blooms that resemble delicate crepe paper. Exceptionally long blooming period during summer, highly decorative.",
        prime: true,
        stock: 9
    },
    {
        id: "avenue_mature_transplant",
        name: "Mature Transplant Tree",
        category: "Avenue",
        price: 799,
        oldPrice: 1299,
        img: "mature-transplant-tree.jpg",
        rating: 4.9,
        reviews: 43,
        scientificName: "Ficus benghalensis",
        sunlight: "Full Sun",
        watering: "Deep weekly watering",
        height: "10-12 Feet (Developed root balled)",
        desc: "A fully grown, mature banyan-relative tree prepared expertly for direct transplantation. Supplies immediate canopy and scale for high-end resorts and avenues.",
        prime: false,
        stock: 5
    }
    {
        id: "fruit_golden_star_fruit",
        name: "Golden Star Fruit",
        category: "Fruit",
        price: 249,
        oldPrice: 349,
        img: "star-fruit.jpg",
        rating: 4.7,
        reviews: 104,
        scientificName: "Averrhoa carambola",
        sunlight: "Full Sun to Light Partial Shade",
        watering: "Keep soil moist, water deeply when dry",
        height: "3.5 Feet",
        desc: "A prolific, exotic fruit tree that bears heavy clusters of sweet, juicy, star-shaped yellow fruits. Compact growth makes it suitable for container planting on sunny balconies.",
        prime: true,
        stock: 4
    },
    {
        id: "outdoor_premium_shade_trees",
        name: "Premium Shade Trees",
        category: "Outdoor",
        price: 799,
        oldPrice: 1299,
        img: "tall-shade-tree.jpg",
        rating: 4.7,
        reviews: 68,
        scientificName: "Peltophorum pterocarpum",
        sunlight: "Full Sun",
        watering: "Deep weekly watering",
        height: "8-10 Feet (Root balled)",
        desc: "Sturdy, mature shade tree saplings presenting developed canopies. Ideal for immediate greening, providing natural shade, and landscaping large villa grounds or parks.",
        prime: false,
        stock: 10
    }
];

// 2. Coupon Discount Database
const COUPONS = {
    "AMAZONPLANT": 0.10, // 10% Off
    "BHASKAR20": 0.20,   // 20% Off
    "INDIANGARDEN20": 0.20, // 20% Off
    "GREENFRIDAY": 0.15, // 15% Off
    "GSTIN37": 0.18      // 18% Off (GST special discount!)
};

// 3. Dynamic Styling Injection
const injectGlobalStyles = () => {
    if (document.getElementById("amazon-store-styles")) return;
    const style = document.createElement("style");
    style.id = "amazon-store-styles";
    style.innerHTML = `
        /* Forest Slate Theme Colors */
        :root {
            --amz-slate: #0d261a;
            --amz-navy: #081a12;
            --amz-orange: #FF9900;
            --amz-yellow: #FFD700;
            --amz-light: #e3e6e6;
            --amz-white: #ffffff;
            --amz-text: #0f1111;
            --amz-link: #007185;
            --amz-prime: #00A8E1;
        }

        /* --- Custom Amazon Navigation Shell --- */
        nav#navbar {
            background-color: var(--amz-navy) !important;
            padding: 0 !important;
            margin: 0 !important;
            height: auto !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 10000 !important;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2) !important;
        }
        .amz-nav-main {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 15px;
            gap: 15px;
            color: var(--amz-white);
            max-width: 1400px;
            margin: 0 auto;
        }
        .amz-nav-left {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .amz-nav-logo {
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            padding: 6px 10px;
            border: 1px solid transparent;
            border-radius: 3px;
        }
        .amz-nav-logo:hover {
            border-color: var(--amz-white);
        }
        .amz-nav-logo img {
            height: 38px;
            border-radius: 50%;
            border: 2px solid var(--primary-light);
        }
        .amz-nav-logo-text {
            font-family: 'Outfit', sans-serif;
            line-height: 1;
        }
        .amz-nav-logo-text span:first-child {
            font-size: 1.15rem;
            font-weight: 800;
            color: var(--amz-white);
            display: block;
        }
        .amz-nav-logo-text span:last-child {
            font-size: 0.68rem;
            color: var(--amz-yellow);
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .amz-nav-loc {
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            padding: 6px 10px;
            border: 1px solid transparent;
            border-radius: 3px;
        }
        .amz-nav-loc:hover {
            border-color: var(--amz-white);
        }
        .amz-nav-loc i {
            font-size: 1.1rem;
            color: var(--amz-light);
            margin-top: 4px;
        }
        .amz-nav-loc-text {
            font-size: 0.72rem;
            color: #ccc;
        }
        .amz-nav-loc-text strong {
            display: block;
            font-size: 0.82rem;
            color: var(--amz-white);
        }

        /* Amazon Custom Search Bar */
        .amz-nav-search {
            flex: 1;
            display: flex;
            height: 40px;
            border-radius: 4px;
            overflow: hidden;
            background: var(--amz-white);
            position: relative;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .amz-nav-search.focused {
            box-shadow: 0 0 0 3px var(--amz-orange);
        }
        .amz-search-cat {
            background-color: #f3f3f3;
            color: #555;
            border: none;
            padding: 0 15px;
            font-size: 0.78rem;
            cursor: pointer;
            border-right: 1px solid #ddd;
            font-family: inherit;
            max-width: 100px;
        }
        .amz-search-input {
            flex: 1;
            border: none;
            padding: 10px 15px;
            font-size: 0.95rem;
            font-family: inherit;
            outline: none;
            color: var(--amz-text);
        }
        .amz-search-btn {
            background-color: var(--amz-orange);
            border: none;
            width: 45px;
            cursor: pointer;
            font-size: 1.1rem;
            color: var(--amz-navy);
            transition: background 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .amz-search-btn:hover {
            background-color: #f3a847;
        }

        /* Search Suggest Box */
        .amz-suggest-box {
            position: absolute;
            top: 42px;
            left: 0;
            width: 100%;
            background: var(--amz-white);
            border-radius: 4px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.25);
            z-index: 10001;
            overflow: hidden;
            display: none;
            color: var(--amz-text);
            border: 1px solid #ddd;
        }
        .amz-suggest-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 15px;
            cursor: pointer;
            transition: background 0.2s;
            border-bottom: 1px solid #f5f5f5;
        }
        .amz-suggest-item:hover {
            background-color: #f0f3f3;
        }
        .amz-suggest-item img {
            width: 35px;
            height: 35px;
            border-radius: 4px;
            object-fit: cover;
            border: 1px solid #eee;
        }
        .amz-suggest-name {
            font-weight: 600;
            font-size: 0.88rem;
            flex: 1;
        }
        .amz-suggest-cat {
            font-size: 0.72rem;
            background: #e8f5e9;
            color: #0b5d3b;
            padding: 2px 8px;
            border-radius: 20px;
        }
        .amz-suggest-price {
            font-weight: 700;
            color: var(--primary);
            font-size: 0.88rem;
        }

        .amz-nav-right {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .amz-nav-btn {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 6px 10px;
            border: 1px solid transparent;
            border-radius: 3px;
            cursor: pointer;
            font-size: 0.72rem;
            color: #ccc;
            text-align: left;
        }
        .amz-nav-btn:hover {
            border-color: var(--amz-white);
        }
        .amz-nav-btn strong {
            display: block;
            font-size: 0.82rem;
            color: var(--amz-white);
            font-weight: 700;
        }
        .amz-nav-cart {
            display: flex;
            align-items: flex-end;
            gap: 5px;
            padding: 6px 10px;
            border: 1px solid transparent;
            border-radius: 3px;
            cursor: pointer;
            position: relative;
        }
        .amz-nav-cart:hover {
            border-color: var(--amz-white);
        }
        .amz-cart-icon-container {
            position: relative;
        }
        .amz-cart-icon-container i {
            font-size: 1.7rem;
            color: var(--amz-white);
        }
        .amz-cart-count {
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--amz-orange);
            color: var(--amz-navy);
            border-radius: 50%;
            min-width: 18px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.68rem;
            font-weight: 800;
        }
        .amz-cart-text {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--amz-white);
        }

        /* --- Sub-Navigation Bar --- */
        .amz-subnav {
            background-color: var(--amz-slate);
            display: flex;
            align-items: center;
            padding: 5px 15px;
            gap: 18px;
            font-size: 0.84rem;
            color: var(--amz-white);
            overflow-x: auto;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .amz-subnav::-webkit-scrollbar {
            display: none;
        }
        .amz-subnav-all {
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: 700;
            cursor: pointer;
            padding: 4px 8px;
            border: 1px solid transparent;
            border-radius: 3px;
        }
        .amz-subnav-all:hover {
            border-color: var(--amz-white);
        }
        .amz-subnav-link {
            cursor: pointer;
            white-space: nowrap;
            padding: 4px 8px;
            border: 1px solid transparent;
            border-radius: 3px;
            font-weight: 500;
            color: #ddd;
        }
        .amz-subnav-link:hover {
            border-color: var(--amz-white);
            color: var(--amz-white);
        }
        .amz-subnav-link.active {
            color: var(--amz-yellow) !important;
            font-weight: 700;
        }

        /* --- Hamburger slide-out (Amazon ALL Menu) --- */
        .amz-sidebar-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            z-index: 20000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .amz-sidebar-overlay.show {
            opacity: 1;
            visibility: visible;
        }
        .amz-sidebar {
            position: fixed;
            top: 0;
            left: -350px;
            width: 320px;
            height: 100vh;
            background: var(--amz-white);
            box-shadow: 5px 0 30px rgba(0,0,0,0.3);
            z-index: 20001;
            transition: left 0.3s cubic-bezier(0.19, 1, 0.22, 1);
            display: flex;
            flex-direction: column;
            font-family: inherit;
        }
        .amz-sidebar-overlay.show .amz-sidebar {
            left: 0;
        }
        .amz-sidebar-header {
            background-color: var(--amz-slate);
            color: var(--amz-white);
            padding: 15px 25px;
            font-family: 'Outfit', sans-serif;
            font-size: 1.15rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 2px solid var(--primary-light);
        }
        .amz-sidebar-header i {
            font-size: 1.3rem;
            color: var(--amz-yellow);
        }
        .amz-sidebar-content {
            flex: 1;
            overflow-y: auto;
            padding: 15px 0;
        }
        .amz-sidebar-title {
            font-size: 0.85rem;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--amz-text);
            padding: 10px 25px 5px;
            letter-spacing: 0.5px;
        }
        .amz-sidebar-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 25px;
            font-size: 0.9rem;
            color: #444;
            cursor: pointer;
            transition: background 0.2s;
            font-weight: 500;
        }
        .amz-sidebar-link:hover {
            background-color: #eaeded;
            color: var(--amz-navy);
        }
        .amz-sidebar-link i {
            color: #888;
            font-size: 0.8rem;
        }
        .amz-sidebar-close {
            position: absolute;
            top: 15px;
            left: 330px;
            color: var(--amz-white);
            font-size: 1.8rem;
            cursor: pointer;
            opacity: 0.8;
            transition: opacity 0.2s;
        }
        .amz-sidebar-close:hover {
            opacity: 1;
        }

        /* --- Dynamic Product Modal --- */
        .amz-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
            z-index: 100000;
            opacity: 0;
            visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            transition: all 0.3s;
        }
        .amz-modal-overlay.show {
            opacity: 1;
            visibility: visible;
        }
        .amz-modal {
            background: var(--amz-white);
            width: 100%;
            max-width: 960px;
            max-height: 90vh;
            border-radius: 10px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            overflow-y: auto;
            position: relative;
            animation: popIn 0.35s cubic-bezier(0.175,0.885,0.32,1.275);
            display: grid;
            grid-template-columns: 1.1fr 1.3fr 1fr;
            font-family: inherit;
        }
        @keyframes popIn {
            from { transform: scale(0.85); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .amz-modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 1.5rem;
            color: #888;
            cursor: pointer;
            transition: color 0.2s;
            z-index: 10;
        }
        .amz-modal-close:hover {
            color: #e53935;
        }

        /* Modal Layout Parts */
        .amz-modal-gallery {
            padding: 25px;
            border-right: 1px solid #eee;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .amz-modal-gallery-img {
            width: 100%;
            height: 280px;
            object-fit: cover;
            border-radius: 8px;
            border: 1px solid #eee;
            margin-bottom: 15px;
            cursor: zoom-in;
            transition: transform 0.3s;
        }
        .amz-modal-gallery-img:hover {
            transform: scale(1.05);
        }
        .amz-modal-gallery-thumbs {
            display: flex;
            gap: 10px;
        }
        .amz-modal-thumb {
            width: 50px;
            height: 50px;
            border: 1.5px solid #ddd;
            border-radius: 4px;
            object-fit: cover;
            cursor: pointer;
        }
        .amz-modal-thumb.active {
            border-color: var(--amz-orange);
            box-shadow: 0 0 0 2px rgba(255,153,0,0.2);
        }

        .amz-modal-details {
            padding: 25px;
            border-right: 1px solid #eee;
            overflow-y: auto;
        }
        .amz-modal-breadcrumbs {
            font-size: 0.72rem;
            color: #666;
            margin-bottom: 8px;
        }
        .amz-modal-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--amz-navy);
            margin-bottom: 5px;
            line-height: 1.3;
        }
        .amz-modal-scientific {
            font-style: italic;
            font-size: 0.84rem;
            color: var(--primary-light);
            margin-bottom: 10px;
            font-weight: 600;
        }
        .amz-modal-rating {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.85rem;
            color: var(--amz-text);
            margin-bottom: 15px;
        }
        .amz-stars {
            color: var(--amz-yellow);
        }
        .amz-reviews-link {
            color: var(--amz-link);
            cursor: pointer;
        }
        .amz-reviews-link:hover {
            color: #c45500;
            text-decoration: underline;
        }
        .amz-modal-price-row {
            display: flex;
            align-items: baseline;
            gap: 10px;
            margin-bottom: 15px;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 15px;
        }
        .amz-price-big {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--primary);
        }
        .amz-price-off {
            font-size: 1.1rem;
            font-weight: 700;
            color: #cc0c39;
        }
        .amz-price-old {
            text-decoration: line-through;
            color: #666;
            font-size: 0.85rem;
        }
        .amz-bullets {
            font-size: 0.84rem;
            color: #333;
            margin-bottom: 15px;
            padding-left: 15px;
        }
        .amz-bullets li {
            margin-bottom: 6px;
            list-style-type: disc;
        }
        .amz-specs-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.82rem;
            margin-top: 15px;
        }
        .amz-specs-table td {
            padding: 6px 10px;
            border-bottom: 1px solid #eee;
        }
        .amz-specs-table td:first-child {
            font-weight: 700;
            color: #666;
            width: 35%;
        }

        /* Dynamic Buy Box */
        .amz-modal-buybox {
            padding: 25px;
            background: #fafafa;
            display: flex;
            flex-direction: column;
            gap: 12px;
            justify-content: flex-start;
        }
        .amz-prime-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-size: 0.72rem;
            font-weight: 700;
            color: var(--amz-prime);
            background: #e6f6fc;
            padding: 3px 8px;
            border-radius: 4px;
            width: fit-content;
        }
        .amz-bb-del {
            font-size: 0.82rem;
            color: #565959;
        }
        .amz-bb-del strong {
            color: #111;
        }
        .amz-bb-stock {
            font-size: 0.88rem;
            font-weight: 700;
            color: #b12704;
        }
        .amz-bb-stock.in-stock {
            color: #007600;
        }
        .amz-bb-qty {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.88rem;
        }
        .amz-bb-qty select {
            padding: 5px 8px;
            border-radius: 4px;
            border: 1px solid #ddd;
            font-family: inherit;
        }

        .amz-btn-buybox {
            width: 100%;
            padding: 12px 10px;
            border-radius: 20px;
            border: 1px solid;
            font-size: 0.88rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: transform 0.2s, filter 0.2s;
        }
        .amz-btn-buybox:active {
            transform: scale(0.98);
        }
        .amz-btn-add {
            background: linear-gradient(135deg, #f7dfa5, #f0c14b);
            border-color: #a88734 #9c7e31 #846a29;
            color: #111;
        }
        .amz-btn-add:hover {
            filter: brightness(1.05);
        }
        .amz-btn-buy {
            background: linear-gradient(135deg, #f3b074, #ea8a39);
            border-color: #ca762b #be6e25 #9c5b1e;
            color: #fff;
        }
        .amz-btn-buy:hover {
            filter: brightness(1.05);
        }

        /* --- Frequently Bought Together Bundle --- */
        .amz-bundle-box {
            grid-column: 1 / span 3;
            border-top: 1px solid #eee;
            padding: 20px 25px;
            background: #fdfdfd;
        }
        .amz-bundle-title {
            font-weight: 700;
            font-size: 0.95rem;
            color: var(--amz-navy);
            margin-bottom: 12px;
        }
        .amz-bundle-flex {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
        }
        .amz-bundle-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .amz-bundle-item img {
            width: 60px;
            height: 60px;
            border-radius: 6px;
            object-fit: cover;
            border: 1px solid #eee;
        }
        .amz-bundle-item i {
            color: #888;
            font-size: 1.1rem;
        }
        .amz-bundle-action {
            margin-left: auto;
            text-align: right;
        }
        .amz-bundle-price {
            font-size: 0.92rem;
            margin-bottom: 6px;
        }
        .amz-bundle-price strong {
            color: var(--primary);
            font-size: 1.1rem;
        }

        /* Pincode Popup */
        .amz-pin-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 100005;
            display: none;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s;
        }
        .amz-pin-overlay.show {
            display: flex;
            opacity: 1;
        }
        .amz-pin-box {
            background: #fff;
            padding: 24px;
            border-radius: 8px;
            width: 320px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.25);
            text-align: center;
        }
        .amz-pin-box h3 {
            font-size: 1.1rem;
            color: var(--amz-navy);
            margin-bottom: 8px;
        }
        .amz-pin-box p {
            font-size: 0.78rem;
            color: #666;
            margin-bottom: 16px;
        }
        .amz-pin-input {
            width: 100%;
            padding: 10px;
            border: 1.5px solid #ddd;
            border-radius: 4px;
            margin-bottom: 14px;
            font-size: 1rem;
            text-align: center;
            outline: none;
        }
        .amz-pin-input:focus {
            border-color: var(--amz-orange);
        }
        .amz-pin-btn {
            background: var(--amz-orange);
            color: var(--amz-navy);
            border: none;
            width: 100%;
            padding: 10px;
            border-radius: 4px;
            font-weight: 700;
            cursor: pointer;
            margin-bottom: 8px;
        }
        .amz-pin-cancel {
            background: none;
            border: none;
            color: #555;
            font-size: 0.8rem;
            cursor: pointer;
        }
        .amz-pin-cancel:hover {
            text-decoration: underline;
        }

        /* CSS Flying Leaf Animation */
        .amz-flying-leaf {
            position: fixed;
            width: 35px;
            height: 35px;
            background-color: #2e7d32;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            pointer-events: none;
            z-index: 999999;
            transition: all 0.9s cubic-bezier(0.075, 0.82, 0.165, 1);
        }


        @media (max-width: 900px) {
            .amz-nav-main {
                flex-wrap: wrap;
            }
            .amz-nav-search {
                order: 3;
                width: 100%;
                margin-top: 5px;
            }
            .amz-nav-left {
                width: auto;
            }
            .amz-nav-right {
                width: auto;
            }
        }
        @media (max-width: 600px) {
            .amz-nav-main {
                padding: 12px 15px;
            }
            .amz-nav-logo-text span:first-child {
                font-size: 1.3rem;
            }
            .amz-nav-logo-text span:last-child {
                font-size: 0.8rem;
            }
            .amz-nav-loc {
                display: none;
            }
            .amz-nav-btn {
                display: none;
            }
            .amz-nav-call div {
                display: none !important;
            }
            .amz-nav-call {
                padding: 10px !important;
                border: none !important;
                font-size: 1.2rem !important;
            }
            .amz-cart-text {
                display: none;
            }
            .amz-nav-cart {
                padding: 8px;
            }
            .amz-nav-cart .amz-cart-icon-container i {
                font-size: 1.4rem;
            }
            .amz-cart-count {
                top: -6px;
                right: -10px;
                width: 22px;
                height: 22px;
                font-size: 0.85rem;
            }
            .amz-subnav {
                padding: 10px 15px;
                gap: 16px;
            }
            .amz-subnav-all {
                padding: 8px 10px;
                font-size: 1.1rem;
            }
            .amz-subnav-link {
                font-size: 1rem;
                padding: 8px 12px;
            }
        }

        @media (max-width: 860px) {
            .amz-modal {
                grid-template-columns: 1fr;
                max-height: 95vh;
            }
            .amz-modal-gallery {
                border-right: none;
                border-bottom: 1px solid #eee;
            }
            .amz-modal-details {
                border-right: none;
                border-bottom: 1px solid #eee;
            }
            .amz-bundle-box {
                grid-column: 1;
            }
            .amz-bundle-action {
                margin-left: 0;
                width: 100%;
                text-align: left;
                margin-top: 15px;
            }
            .amz-nav-search {
                display: none !important; /* Hide Search bar on compact mobile main nav */
            }
            .amz-nav-call {
                display: none !important; /* Hide Call button on mobile, floating btn handles it */
            }
        }
        .amz-nav-call:hover {
            background: rgba(255,255,255,0.18) !important;
            border-color: #fff !important;
            transform: scale(1.03);
        }
    `;
    document.head.appendChild(style);
};

// 4. Global Core Setup
const AmazonStore = {
    activePincode: "533101",
    activeCity: "Kadiyam",

    init() {
        injectGlobalStyles();
        this.loadLocation();
        this.injectHeader();
        this.injectSidebar();
        this.injectFooter();
        this.injectModalShell();
        this.injectPincodePopup();
        this.bindEvents();
        this.updateHeaderCartCount();
        this.enhanceCatalogCards();
    },

    loadLocation() {
        const savedPin = localStorage.getItem("amz_pincode");
        const savedCity = localStorage.getItem("amz_city");
        if (savedPin) this.activePincode = savedPin;
        if (savedCity) this.activeCity = savedCity;
    },

    saveLocation(pin, city) {
        this.activePincode = pin;
        this.activeCity = city;
        localStorage.setItem("amz_pincode", pin);
        localStorage.setItem("amz_city", city);
        this.updateHeaderLocationLabel();
    },

    // Dynamically inject the premium Amazon Header
    injectHeader() {
        const navEl = document.querySelector("nav#navbar") || document.querySelector("nav");
        if (!navEl) return;

        // Clean out existing styles classes
        navEl.className = "";
        navEl.id = "navbar";

        const currentFilename = window.location.pathname.split("/").pop() || "index.html";

        const navHtml = `
            <div class="amz-nav-main">
                <div class="amz-nav-left">
                    <div class="amz-nav-logo" onclick="window.location.href='index.html'">
                        <img src="logo.jpg" alt="The Indian Garden Nursery Logo">
                        <div class="amz-nav-logo-text">
                            <span>The Indian Garden Nursery</span>
                            <span>Prime Store</span>
                        </div>
                    </div>
                    <div class="amz-nav-loc" onclick="AmazonStore.openPincodePopup()">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="amz-nav-loc-text">
                            Deliver from
                            <strong id="amz-loc-label">Loading...</strong>
                        </div>
                    </div>
                </div>

                <div class="amz-nav-search" id="amz-search-wrapper">
                    <select class="amz-search-cat" id="amz-search-cat">
                        <option>All</option>
                        <option>Indoor</option>
                        <option>Outdoor</option>
                        <option>Fruit</option>
                        <option>Ornamental</option>
                        <option>Avenue</option>
                    </select>
                    <input type="text" class="amz-search-input" id="amz-search-bar" placeholder="Search premium plants, avenue trees, landscape works..." autocomplete="off">
                    <button class="amz-search-btn" onclick="AmazonStore.triggerSearch()"><i class="fas fa-search"></i></button>
                    
                    <div class="amz-suggest-box" id="amz-suggest-box">
                        <!-- suggestions dynamically loaded -->
                    </div>
                </div>

                <div class="amz-nav-right">
                    <div class="amz-nav-btn" onclick="window.location.href='index.html#contact'">
                        Hello, Sign In
                        <strong>Account & Lists</strong>
                    </div>
                    <div class="amz-nav-btn" onclick="window.location.href='orders.html'">
                        Returns
                        <strong>& Orders</strong>
                    </div>
                    <a href="tel:+919885533297" class="amz-nav-call" id="amzCallBtn" title="Call Now" style="display:flex; align-items:center; gap:6px; color:#fff; text-decoration:none; padding:6px 14px; border:1.5px solid var(--amz-yellow); border-radius:4px; font-size:0.82rem; font-weight:600; cursor:pointer; transition:all 0.2s ease; background:rgba(255,255,255,0.08);">
                        <i class="fas fa-phone-alt" style="font-size:0.9rem; color:var(--amz-yellow);"></i>
                        <div style="line-height:1.2;">
                            <span style="font-size:0.68rem; display:block; opacity:0.8;">Call Now</span>
                            <strong style="font-size:0.78rem; white-space:nowrap;">+91 98855 33297</strong>
                        </div>
                    </a>
                    <div class="amz-nav-cart" onclick="window.location.href='cart.html'">
                        <div class="amz-cart-icon-container">
                            <i class="fas fa-shopping-cart"></i>
                            <span class="amz-cart-count" id="amz-cart-badge">0</span>
                        </div>
                        <span class="amz-cart-text">Cart</span>
                    </div>
                </div>
            </div>
            
            <div class="amz-subnav">
                <div class="amz-subnav-all" onclick="AmazonStore.openSidebar()">
                    <i class="fas fa-bars"></i> All
                </div>
                <span class="amz-subnav-link ${currentFilename === 'outdoor.html' ? 'active' : ''}" onclick="window.location.href='outdoor.html'">Outdoor Plants</span>
                <span class="amz-subnav-link ${currentFilename === 'indoor.html' ? 'active' : ''}" onclick="window.location.href='indoor.html'">Indoor Plants</span>
                <span class="amz-subnav-link ${currentFilename === 'avenue.html' ? 'active' : ''}" onclick="window.location.href='avenue.html'">Avenue Trees</span>
                <span class="amz-subnav-link ${currentFilename === 'ornamental.html' ? 'active' : ''}" onclick="window.location.href='ornamental.html'">Ornamental Plants</span>
                <span class="amz-subnav-link ${currentFilename === 'fruit.html' ? 'active' : ''}" onclick="window.location.href='fruit.html'">Fruit Plants</span>
                <span class="amz-subnav-link" onclick="window.location.href='orders.html'" style="color:var(--amz-yellow); font-weight:700;"><i class="fas fa-truck"></i> Live Delivery Tracking</span>
            </div>
        `;
        navEl.innerHTML = navHtml;
        this.updateHeaderLocationLabel();
    },

    updateHeaderLocationLabel() {
        const label = document.getElementById("amz-loc-label");
        if (label) {
            label.textContent = `${this.activeCity} ${this.activePincode}`;
        }
    },

    // Inject left slide-out panel (Amazon "ALL" Menu)
    injectSidebar() {
        if (document.getElementById("amz-sidebar-overlay")) return;

        const overlay = document.createElement("div");
        overlay.id = "amz-sidebar-overlay";
        overlay.className = "amz-sidebar-overlay";
        overlay.onclick = (e) => {
            if (e.target === overlay) AmazonStore.closeSidebar();
        };

        overlay.innerHTML = `
            <div class="amz-sidebar">
                <div class="amz-sidebar-close" onclick="AmazonStore.closeSidebar()"><i class="fas fa-times"></i></div>
                <div class="amz-sidebar-header">
                    <i class="fas fa-user-circle"></i> Hello, Guest Shopper
                </div>
                <div class="amz-sidebar-content">
                    <div class="amz-sidebar-title">Shop by Category</div>
                    <div class="amz-sidebar-link" onclick="window.location.href='outdoor.html'">Outdoor Plants <i class="fas fa-chevron-right"></i></div>
                    <div class="amz-sidebar-link" onclick="window.location.href='indoor.html'">Indoor Plants <i class="fas fa-chevron-right"></i></div>
                    <div class="amz-sidebar-link" onclick="window.location.href='avenue.html'">Avenue Trees <i class="fas fa-chevron-right"></i></div>
                    <div class="amz-sidebar-link" onclick="window.location.href='ornamental.html'">Ornamental Plants <i class="fas fa-chevron-right"></i></div>
                    <div class="amz-sidebar-link" onclick="window.location.href='fruit.html'">Fruit Plants <i class="fas fa-chevron-right"></i></div>
                    
                    <hr style="border:none; border-top:1px solid #eee; margin:15px 0;">
                    
                    <div class="amz-sidebar-title">Customer Support & Utilities</div>
                    <div class="amz-sidebar-link" onclick="window.location.href='orders.html'">My Orders <i class="fas fa-chevron-right"></i></div>
                    <div class="amz-sidebar-link" onclick="window.location.href='index.html#contact'">Contact Nursery <i class="fas fa-chevron-right"></i></div>
                    <div class="amz-sidebar-link" onclick="window.location.href='index.html#care-tips'">Plant Care Tips <i class="fas fa-chevron-right"></i></div>
                    <div class="amz-sidebar-link" onclick="AmazonStore.openPincodePopup()">Change Pincode <i class="fas fa-chevron-right"></i></div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    },

    openSidebar() {
        document.getElementById("amz-sidebar-overlay").classList.add("show");
        document.body.style.overflow = "hidden";
    },

    closeSidebar() {
        document.getElementById("amz-sidebar-overlay").classList.remove("show");
        document.body.style.overflow = "";
    },

    // Inject custom Amazon premium footer
    injectFooter() {
        const footer = document.querySelector("footer");
        if (!footer) return;

        footer.className = "";
        footer.style.cssText = "background-color: #122119 !important; color: #ccc !important; padding: 40px 20px 20px !important; font-family: inherit !important; border-top: 5px solid #0b5d3b !important;";
        footer.innerHTML = `
            <div class="footer-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:30px; max-width:1200px; margin:0 auto;">
                <div class="footer-col">
                    <h4 style="color:#fff; margin-bottom:15px; font-size:1.1rem; font-family:'Outfit';">The Indian Garden Nursery</h4>
                    <p style="font-size:0.85rem; line-height:1.6; opacity:0.8;">Providing India with the healthiest outdoor plants, avenue trees, and professional landscaping services since 2005. Cultivated in Kadiyam, shipped straight to your door.</p>
                </div>
                <div class="footer-col">
                    <h4 style="color:#fff; margin-bottom:15px; font-size:1.1rem; font-family:'Outfit';">Connect with Us</h4>
                    <ul style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
                        <li><a href="https://wa.me/919885533297" style="color:#aaa;" target="_blank"><i class="fab fa-whatsapp" style="color:#25d366;"></i> WhatsApp Support</a></li>
                        <li><a href="https://www.instagram.com/sri_bhaskar_nursery_kadiyam" style="color:#aaa;" target="_blank"><i class="fab fa-instagram" style="color:#e1306c;"></i> Instagram Updates</a></li>
                        <li><a href="https://www.facebook.com/sribhaskarnursery" style="color:#aaa;" target="_blank"><i class="fab fa-facebook-f" style="color:#3b5998;"></i> Facebook Community</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 style="color:#fff; margin-bottom:15px; font-size:1.1rem; font-family:'Outfit';">E-Commerce Links</h4>
                    <ul style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
                        <li><a href="cart.html" style="color:#aaa;">Shopping Cart</a></li>
                        <li><a href="orders.html" style="color:#aaa;">Track Shipments</a></li>
                        <li><a href="index.html#contact" style="color:#aaa;">GST / Business Inquiries</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 style="color:#fff; margin-bottom:15px; font-size:1.1rem; font-family:'Outfit';">Contact Office</h4>
                    <p style="font-size:0.85rem; opacity:0.8;">Main Branch: Muramanda, Kadiyam Mandal, Rajahmundry, Andhra Pradesh, 533101</p>
                    <p style="font-size:0.85rem; font-weight:700; color:var(--amz-yellow); margin-top:8px;">GSTIN: 37EMYPK8439R1ZH</p>
                </div>
            </div>
            <div style="border-top:1px solid #1a3a2b; margin-top:30px; padding-top:20px; text-align:center; font-size:0.8rem; color:#888;">
                &copy; 2026 The Indian Garden Nursery. All Rights Reserved. Made in India.
            </div>
        `;
    },

    // Inject dynamic detail modal container
    injectModalShell() {
        if (document.getElementById("amz-modal-overlay")) return;
        const modalOverlay = document.createElement("div");
        modalOverlay.id = "amz-modal-overlay";
        modalOverlay.className = "amz-modal-overlay";
        modalOverlay.onclick = (e) => {
            if (e.target === modalOverlay) AmazonStore.closeProductModal();
        };

        modalOverlay.innerHTML = `
            <div class="amz-modal" id="amz-modal-body">
                <!-- Content injected dynamically -->
            </div>
        `;
        document.body.appendChild(modalOverlay);
    },

    // Inject Location/Pincode Popup
    injectPincodePopup() {
        if (document.getElementById("amz-pin-overlay")) return;
        const popup = document.createElement("div");
        popup.id = "amz-pin-overlay";
        popup.className = "amz-pin-overlay";
        popup.onclick = (e) => {
            if (e.target === popup) AmazonStore.closePincodePopup();
        };

        popup.innerHTML = `
            <div class="amz-pin-box">
                <i class="fas fa-map-marker-alt" style="font-size:2rem; color:var(--amz-orange); margin-bottom:10px;"></i>
                <h3>Choose your delivery location</h3>
                <p>Delivery estimates and Prime shipping speeds may vary based on your location pincode.</p>
                <input type="text" class="amz-pin-input" id="amz-pin-field" placeholder="Enter 6-digit Pincode" maxlength="6">
                <button class="amz-pin-btn" onclick="AmazonStore.applyPincode()">Apply Location</button>
                <button class="amz-pin-cancel" onclick="AmazonStore.closePincodePopup()">Cancel</button>
            </div>
        `;
        document.body.appendChild(popup);
    },

    openPincodePopup() {
        document.getElementById("amz-pin-field").value = this.activePincode;
        document.getElementById("amz-pin-overlay").classList.add("show");
    },

    closePincodePopup() {
        document.getElementById("amz-pin-overlay").classList.remove("show");
    },

    applyPincode() {
        const pin = document.getElementById("amz-pin-field").value.trim();
        if (!/^\d{6}$/.test(pin)) {
            alert("Please enter a valid 6-digit Indian Pincode.");
            return;
        }

        // Map general regions to display a friendly city for visual excellence
        let city = "Kadiyam";
        if (pin.startsWith("533")) city = "Rajahmundry";
        else if (pin.startsWith("500")) city = "Hyderabad";
        else if (pin.startsWith("560")) city = "Bangalore";
        else if (pin.startsWith("600")) city = "Chennai";
        else if (pin.startsWith("400")) city = "Mumbai";
        else if (pin.startsWith("110")) city = "New Delhi";
        else if (pin.startsWith("530")) city = "Visakhapatnam";
        else city = "Location";

        this.saveLocation(pin, city);
        this.closePincodePopup();
        Cart.showToast(`📍 Delivery location updated to ${city} (${pin})!`);
        
        // Reload details if modal is currently open
        if (this.currentModalProductId) {
            this.openProductModal(this.currentModalProductId);
        }
    },

    // Global Search & suggestions auto-complete
    bindEvents() {
        const searchInput = document.getElementById("amz-search-bar");
        const suggestBox = document.getElementById("amz-suggest-box");
        const wrapper = document.getElementById("amz-search-wrapper");

        if (searchInput && suggestBox) {
            searchInput.addEventListener("input", (e) => {
                const query = e.target.value.trim().toLowerCase();
                if (query.length < 2) {
                    suggestBox.style.display = "none";
                    return;
                }

                const catFilter = document.getElementById("amz-search-cat").value;

                let matches = PRODUCTS_DB.filter(p => {
                    const matchesText = p.name.toLowerCase().includes(query) || 
                                      p.category.toLowerCase().includes(query) ||
                                      (p.scientificName && p.scientificName.toLowerCase().includes(query));
                    
                    if (catFilter === "All") return matchesText;
                    return matchesText && p.category === catFilter;
                });

                if (matches.length === 0) {
                    suggestBox.innerHTML = `<div style="padding:15px; text-align:center; color:#888; font-size:0.85rem;">No plants found matching "${e.target.value}"</div>`;
                } else {
                    suggestBox.innerHTML = matches.slice(0, 6).map(p => `
                        <div class="amz-suggest-item" onclick="AmazonStore.handleSuggestionClick('${p.id}')">
                            <img src="${p.img}" onerror="this.src='logo.jpg'">
                            <div class="amz-suggest-name">${p.name}</div>
                            <div class="amz-suggest-cat">${p.category}</div>
                            <div class="amz-suggest-price">₹${p.price}</div>
                        </div>
                    `).join('');
                }
                suggestBox.style.display = "block";
            });

            searchInput.addEventListener("focus", () => {
                wrapper.classList.add("focused");
            });

            searchInput.addEventListener("blur", () => {
                setTimeout(() => {
                    suggestBox.style.display = "none";
                    wrapper.classList.remove("focused");
                }, 200);
            });

            // Enter key search
            searchInput.addEventListener("keydown", (e) => {
                if (e.key === "Enter") this.triggerSearch();
            });
        }
    },

    handleSuggestionClick(productId) {
        document.getElementById("amz-suggest-box").style.display = "none";
        document.getElementById("amz-search-bar").value = "";
        this.openProductModal(productId);
    },

    triggerSearch() {
        const query = document.getElementById("amz-search-bar").value.trim();
        if (!query) return;

        // Perform dynamic content filter on current page, or redirect to catalog with filter
        Cart.showToast(`🔍 Searching for "${query}" across Our' s Kadiyam inventory...`);
        const results = PRODUCTS_DB.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
        if (results.length > 0) {
            // Open the first matching product to show off detail page directly
            this.openProductModal(results[0].id);
        } else {
            alert(`No exact matches for "${query}". Try searching for 'ZZ', 'Lily', 'Mango', or 'Palm'!`);
        }
    },

    // Convert regular cards in raw HTML to premium Amazon trigger buttons
    enhanceCatalogCards() {
        const cards = document.querySelectorAll(".plant-card");
        cards.forEach((card, index) => {
            const h3 = card.querySelector("h3");
            if (!h3) return;

            // Try to match the hardcoded card header with our JSON database
            const titleText = h3.textContent.trim().toLowerCase();
            let product = PRODUCTS_DB.find(p => titleText.includes(p.name.toLowerCase()) || p.name.toLowerCase().includes(titleText));
            
            if (!product) {
                const descEl = card.querySelector("p");
                const priceEl = card.querySelector(".plant-price");
                const imgEl = card.querySelector("img");
                const badgeEl = card.querySelector(".plant-badge");

                let price = 299;
                if (priceEl) {
                   const priceMatch = priceEl.textContent.match(/\d+/);
                   if (priceMatch) price = parseInt(priceMatch[0]);
                }

                product = {
                    id: "dynamic_" + index,
                    name: h3.textContent.trim(),
                    category: badgeEl ? badgeEl.textContent.trim() : "Outdoor",
                    price: price,
                    oldPrice: Math.round(price * 1.3),
                    img: imgEl ? imgEl.getAttribute("src") : "logo.jpg",
                    rating: 4.8,
                    reviews: 142,
                    scientificName: h3.textContent.trim() + " Species",
                    sunlight: "Sunlight to Partial Shade",
                    watering: "Regular watering",
                    height: "Varies by plant",
                    desc: descEl ? descEl.textContent.trim() : "Beautiful high-quality plant from our Kadiyam nursery.",
                    prime: true,
                    stock: 15
                };
                PRODUCTS_DB.push(product);
            }
            
            if (product) {
                // Bind click on card image/text to open detail modal
                const img = card.querySelector(".plant-img");
                if (img) {
                    img.style.cursor = "pointer";
                    img.onclick = () => AmazonStore.openProductModal(product.id);
                }
                h3.style.cursor = "pointer";
                h3.onclick = () => AmazonStore.openProductModal(product.id);

                // Inject Amazon star ratings just below the price
                const info = card.querySelector(".plant-info");
                if (info) {
                    // Remove standard WhatsApp buttons and inject high-end Add to Cart & Buy Box buttons
                    const oldBtn = info.querySelector("a.btn");
                    if (oldBtn) oldBtn.remove();

                    // Check if rating container already exists
                    let ratingDiv = info.querySelector(".amz-card-rating");
                    if (!ratingDiv) {
                        ratingDiv = document.createElement("div");
                        ratingDiv.className = "amz-card-rating";
                        ratingDiv.style.cssText = "font-size:0.8rem; margin:5px 0; color:#555; display:flex; align-items:center; gap:5px;";
                        
                        let starHtml = "";
                        const fullStars = Math.floor(product.rating);
                        for(let i=0; i<5; i++) {
                            if (i < fullStars) starHtml += `<i class="fas fa-star" style="color:var(--amz-yellow);"></i>`;
                            else starHtml += `<i class="far fa-star" style="color:#ccc;"></i>`;
                        }

                        ratingDiv.innerHTML = `
                            <div style="font-size:0.75rem;">${starHtml}</div>
                            <span style="color:var(--amz-link); font-weight:600;">${product.reviews}</span>
                        `;
                        
                        const h4 = info.querySelector(".plant-price");
                        if (h4) {
                            h4.before(ratingDiv);
                            
                            // Re-style pricing
                            h4.innerHTML = `
                                <div>
                                    <span style="font-size: 1.15rem; font-weight:800; color:var(--primary);">₹${product.price}</span>
                                    <span style="text-decoration:line-through; font-size:0.75rem; color:#777; margin-left:6px;">₹${product.oldPrice}</span>
                                </div>
                                ${product.prime ? `<span style="font-size:0.68rem; font-weight:800; color:var(--amz-prime);"><i class="fas fa-bolt"></i> Prime</span>` : ''}
                            `;
                        }
                    }

                    // Append high-end buttons
                    let actDiv = info.querySelector(".amz-card-actions");
                    if (!actDiv) {
                        actDiv = document.createElement("div");
                        actDiv.className = "amz-card-actions";
                        actDiv.style.cssText = "display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:12px;";
                        actDiv.innerHTML = `
                            <button class="amz-btn-buybox amz-btn-add" style="padding:8px; font-size:0.78rem;" onclick="AmazonStore.addToCartFromCard('${product.id}', this, event)">
                                <i class="fas fa-shopping-cart"></i> Cart
                            </button>
                            <button class="amz-btn-buybox amz-btn-buy" style="padding:8px; font-size:0.78rem;" onclick="AmazonStore.buyNow('${product.id}')">
                                Buy Now
                            </button>
                        `;
                        info.appendChild(actDiv);
                    }
                }
            }
        });
    },

    addToCartFromCard(productId, buttonEl, event) {
        event.stopPropagation();
        const p = PRODUCTS_DB.find(x => x.id === productId);
        if (!p) return;

        // Perform leaf-flying animation!
        this.triggerFlyingLeaf(buttonEl);

        // Core cart action
        Cart.addToCart({
            id: p.id,
            name: p.name,
            price: p.price,
            img: p.img,
            category: p.category
        });
        
        this.updateHeaderCartCount();
    },

    // Real-time dynamic leaf flying animation to the cart
    triggerFlyingLeaf(element) {
        const rect = element.getBoundingClientRect();
        const cartIcon = document.querySelector(".amz-nav-cart");
        if (!cartIcon) return;
        const cartRect = cartIcon.getBoundingClientRect();

        const leaf = document.createElement("div");
        leaf.className = "amz-flying-leaf";
        leaf.innerHTML = "🌿";
        leaf.style.left = `${rect.left + rect.width/2 - 15}px`;
        leaf.style.top = `${rect.top + rect.height/2 - 15}px`;
        document.body.appendChild(leaf);

        setTimeout(() => {
            leaf.style.left = `${cartRect.left + 20}px`;
            leaf.style.top = `${cartRect.top + 10}px`;
            leaf.style.transform = "scale(0.3) rotate(360deg)";
            leaf.style.opacity = "0.2";
        }, 50);

        setTimeout(() => {
            leaf.remove();
            
            // Trigger bouncy animation on the cart badge
            const badge = document.getElementById("amz-cart-badge");
            if (badge) {
                badge.style.transform = "translateX(-50%) scale(1.4)";
                badge.style.transition = "transform 0.15s ease-out";
                setTimeout(() => { badge.style.transform = "translateX(-50%) scale(1)"; }, 150);
            }
        }, 900);
    },

    updateHeaderCartCount() {
        const badge = document.getElementById("amz-cart-badge");
        if (badge) {
            const count = Cart.getCount();
            badge.textContent = count;
            badge.style.display = "flex"; // Always show badge similar to Amazon
        }
    },

    // Render & open detailed Amazon product detail modal
    openProductModal(productId) {
        const p = PRODUCTS_DB.find(x => x.id === productId);
        if (!p) return;

        this.currentModalProductId = productId;
        const overlay = document.getElementById("amz-modal-overlay");
        const body = document.getElementById("amz-modal-body");

        // Calculate delivery estimates
        const today = new Date();
        const standardDelDays = p.prime ? 2 : 4;
        today.setDate(today.getDate() + standardDelDays);
        const delDateText = today.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' });

        // Frequently Bought Together Bundle Pricing
        const soilPrice = 79;
        const potPrice = 99;
        const bundleTotal = p.price + soilPrice + potPrice;

        body.innerHTML = `
            <div class="amz-modal-close" onclick="AmazonStore.closeProductModal()"><i class="fas fa-times-circle"></i></div>
            
            <!-- Gallery -->
            <div class="amz-modal-gallery">
                <img class="amz-modal-gallery-img" id="amz-modal-main-img" src="${p.img}" alt="${p.name}" onerror="this.src='logo.jpg'">
                <div class="amz-modal-gallery-thumbs">
                    <img class="amz-modal-thumb active" src="${p.img}" onclick="AmazonStore.switchModalImage(this, '${p.img}')" onerror="this.src='logo.jpg'">
                    <img class="amz-modal-thumb" src="logo.jpg" onclick="AmazonStore.switchModalImage(this, 'logo.jpg')">
                </div>
            </div>

            <!-- Details -->
            <div class="amz-modal-details">
                <div class="amz-modal-breadcrumbs">Store &gt; Plants &gt; ${p.category} &gt; ${p.name}</div>
                <h2 class="amz-modal-title">${p.name}</h2>
                <div class="amz-modal-scientific">Scientific name: ${p.scientificName}</div>
                
                <div class="amz-modal-rating">
                    <span class="amz-stars">
                        ${`<i class="fas fa-star"></i>`.repeat(Math.floor(p.rating))}
                        ${p.rating % 1 !== 0 ? `<i class="fas fa-star-half-alt"></i>` : ''}
                    </span>
                    <span class="amz-reviews-link">${p.reviews} ratings</span>
                </div>

                <div class="amz-modal-price-row">
                    <span class="amz-price-off">-${Math.round((1 - p.price / p.oldPrice) * 100)}%</span>
                    <span class="amz-price-big">₹${p.price}</span>
                    <span class="amz-price-old">M.R.P: ₹${p.oldPrice}</span>
                </div>

                <p style="font-size:0.88rem; color:#444; line-height:1.5; margin-bottom:15px;">${p.desc}</p>

                <ul class="amz-bullets">
                    <li>Certified organic grown healthy, lush plant rootstock.</li>
                    <li>Highly adaptable to typical Indian climates.</li>
                    <li>Shipped in specially ventilated eco-friendly safety boxes.</li>
                </ul>

                <table class="amz-specs-table">
                    <tr>
                        <td>Sunlight</td>
                        <td>${p.sunlight}</td>
                    </tr>
                    <tr>
                        <td>Watering</td>
                        <td>${p.watering}</td>
                    </tr>
                    <tr>
                        <td>Est. Height</td>
                        <td>${p.height}</td>
                    </tr>
                </table>
            </div>

            <!-- Buy Box -->
            <div class="amz-modal-buybox">
                <div class="amz-price-big">₹${p.price}</div>
                
                ${p.prime ? `
                    <div class="amz-prime-badge"><i class="fas fa-bolt"></i> Prime Express</div>
                ` : ''}
                
                <div class="amz-bb-del">
                    FREE delivery <strong>${delDateText}</strong>. Order within 4 hrs.
                </div>

                <div class="amz-bb-stock ${p.stock > 0 ? 'in-stock' : ''}">
                    ${p.stock < 5 ? `⚠️ Only ${p.stock} left in stock - order soon!` : '🟢 In Stock'}
                </div>

                <div class="amz-bb-qty">
                    <label>Qty:</label>
                    <select id="amz-modal-qty">
                        <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
                    </select>
                </div>

                <button class="amz-btn-buybox amz-btn-add" onclick="AmazonStore.addModalItemToCart('${p.id}', this)" style="margin-top:10px;">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="amz-btn-buybox amz-btn-buy" onclick="AmazonStore.buyNow('${p.id}')">
                    Buy Now
                </button>
                
                <div style="font-size:0.7rem; color:#666; margin-top:8px; line-height:1.3; text-align:center;">
                    <i class="fas fa-shield-alt" style="color:var(--primary-light);"></i> Secure transaction. Dispatched directly from Kadiyam nurseries.
                </div>
            </div>

            <!-- Bundle Deal -->
            <div class="amz-bundle-box">
                <div class="amz-bundle-title">🌿 Frequently bought together</div>
                <div class="amz-bundle-flex">
                    <div class="amz-bundle-item">
                        <img src="${p.img}" onerror="this.src='logo.jpg'">
                        <span>${p.name} <strong style="color:var(--primary);">₹${p.price}</strong></span>
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="amz-bundle-item">
                        <img src="areca-palm.jpg" style="background:#ddd;" alt="Compost" onerror="this.src='logo.jpg'">
                        <span>Premium Organic Compost (2kg) <strong style="color:var(--primary);">₹79</strong></span>
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="amz-bundle-item">
                        <img src="featured-plant.jpg" style="background:#ddd;" alt="Ceramic Pot" onerror="this.src='logo.jpg'">
                        <span>Minimalist Ceramic Pot (White) <strong style="color:var(--primary);">₹99</strong></span>
                    </div>

                    <div class="amz-bundle-action">
                        <div class="amz-bundle-price">Total Price: <strong>₹${bundleTotal}</strong></div>
                        <button class="amz-btn-buybox amz-btn-add" style="font-size:0.8rem; padding:8px 16px;" onclick="AmazonStore.addBundleToCart('${p.id}')">
                            Add all three to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;

        overlay.classList.add("show");
        document.body.style.overflow = "hidden";
    },

    switchModalImage(thumbEl, imgSrc) {
        document.querySelectorAll(".amz-modal-thumb").forEach(t => t.classList.remove("active"));
        thumbEl.classList.add("active");
        document.getElementById("amz-modal-main-img").src = imgSrc;
    },

    addModalItemToCart(productId, buttonEl) {
        const p = PRODUCTS_DB.find(x => x.id === productId);
        if (!p) return;

        const qty = parseInt(document.getElementById("amz-modal-qty").value) || 1;
        this.triggerFlyingLeaf(buttonEl);

        for (let i = 0; i < qty; i++) {
            Cart.addToCart({
                id: p.id,
                name: p.name,
                price: p.price,
                img: p.img,
                category: p.category
            });
        }

        this.updateHeaderCartCount();
        setTimeout(() => this.closeProductModal(), 1000);
    },

    addBundleToCart(productId) {
        const p = PRODUCTS_DB.find(x => x.id === productId);
        if (!p) return;

        // Add Plant
        Cart.addToCart({ id: p.id, name: p.name, price: p.price, img: p.img, category: p.category });
        // Add Organic Soil
        Cart.addToCart({ id: p.id + "_soil", name: `${p.name} organic compost`, price: 79, img: p.img, category: "Supplements" });
        // Add Premium Pot
        Cart.addToCart({ id: p.id + "_pot", name: `Minimalist Ceramic Pot`, price: 99, img: p.img, category: "Planters" });

        this.updateHeaderCartCount();
        this.closeProductModal();
        Cart.showToast("🌿 Bundle deal added to your cart!");
    },

    buyNow(productId) {
        const p = PRODUCTS_DB.find(x => x.id === productId);
        if (!p) return;

        // Quick add to cart & immediate checkout route
        Cart.addToCart({
            id: p.id,
            name: p.name,
            price: p.price,
            img: p.img,
            category: p.category
        });
        window.location.href = "checkout.html";
    },

    closeProductModal() {
        document.getElementById("amz-modal-overlay").classList.remove("show");
        document.body.style.overflow = "";
        this.currentModalProductId = null;
    }
};

// Auto-run on load
document.addEventListener("DOMContentLoaded", () => {
    AmazonStore.init();
});
