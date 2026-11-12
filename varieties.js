// Replace this URL with your actual YouTube channel link
const userYouTubeChannel = 'https://www.youtube.com/@yourchannel'; 

const products = {
    'double-delight': {
        name: 'Double Delight',
        tag: 'Hybrid Tea',
        price: '₹250 per plant',
        desc: 'A world-famous hybrid tea rose known for its intense strawberry and spicy fragrance. The creamy white centers blush to a deep strawberry red at the edges as they open to the sun.',
        image: 'https://images.unsplash.com/photo-1568449774574-88981f215d2a?auto=format&fit=crop&w=800&q=80',
        care: ['Requires at least 6 hours of direct sunlight daily.', 'Water deeply at the base early in the morning, avoiding wet foliage.', 'Apply balanced organic fertilizer monthly during the active growing season.'],
        featured: true,
        videoUrl: '' // Empty string will trigger "Coming Soon"
    },
    'tineke': {
        name: 'Tineke',
        tag: 'White Hybrid Tea',
        price: '₹280 per plant',
        desc: 'A classic white rose producing large, perfectly formed high-centered blooms. Exceptional vase life and sturdy stems make this a favorite for commercial cut flower production.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        care: ['Plant in well-drained, nutrient-rich loamy soil.', 'Prune heavily in late winter to encourage strong, long-stemmed spring flushes.', 'Monitor weekly for common pests during high humidity.'],
        featured: false,
        videoUrl: ''
    },
    'peace-avalance': {
        name: 'Peace Avalanche',
        tag: 'Avalanche Series',
        price: '₹300 per plant',
        desc: 'A stunning soft pink and cream variety. Renowned for its prolific blooming cycle, massive head size, and incredible structural resilience.',
        image: 'https://images.unsplash.com/photo-1583267746897-bb91ae65afd3?auto=format&fit=crop&w=800&q=80',
        care: ['Provide adequate spacing for air circulation to prevent fungal issues.', 'Deadhead spent blooms promptly to redirect energy into new bud production.'],
        featured: true,
        videoUrl: ''
    },
    'sweet-avalanche': {
        name: 'Sweet Avalanche',
        tag: 'Avalanche Series',
        price: '₹300 per plant',
        desc: 'An exquisite pastel pink commercial cut rose. Features a high petal count opening into a classic romantic bloom shape.',
        image: 'https://images.unsplash.com/photo-1559592413-7d4d5c31a067?auto=format&fit=crop&w=800&q=80',
        care: ['Keep soil consistently moist but not waterlogged.', 'Mulch around the base to retain root moisture during hot spells.'],
        featured: true,
        videoUrl: ''
    },
    'taj-mahal': {
        name: 'Taj Mahal',
        tag: 'Exotic White',
        price: '₹350 per plant',
        desc: 'A majestic pure white variety cultivated for its pristine appearance and delicate, sweet fragrance reminiscent of classic romance.',
        image: 'https://images.unsplash.com/photo-1568449774574-88981f215d2a?auto=format&fit=crop&w=800&q=80',
        care: ['Protect from extreme midday heat in peak summer.', 'Feed with high-potassium fertilizer to support massive bloom production.'],
        featured: true,
        videoUrl: ''
    },
    'dr-john-pollen': {
        name: 'Dr. John Pollen',
        tag: 'Specialty Shrub',
        price: '₹320 per plant',
        desc: 'A robust and highly disease-resistant cultivar featuring striking coloration and vigorous growth habits suitable for West Bengal climate.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        care: ['Requires minimal pruning compared to delicate teas.', 'Adapts well to large container gardening or open ground planting.'],
        featured: false,
        videoUrl: ''
    },
    'red-button': {
        name: 'Red Button Miniature',
        tag: 'Miniature Rose',
        price: '₹180 per plant',
        desc: 'Charming miniature variety producing dense clusters of intense red, button-like flowers continuously throughout the year.',
        image: 'https://images.unsplash.com/photo-1583267746897-bb91ae65afd3?auto=format&fit=crop&w=800&q=80',
        care: ['Ideal for patio pots and borders.', 'Ensure regular deadheading of spent clusters to maintain continuous flowering.'],
        featured: false,
        videoUrl: ''
    },
    'pink-ground-cover': {
        name: 'Pink Ground Cover',
        tag: 'Landscape Shrub',
        price: '₹200 per plant',
        desc: 'Spreading growth habit completely covered in masses of soft pink blooms. Perfect for landscape management and slope stabilization.',
        image: 'https://images.unsplash.com/photo-1559592413-7d4d5c31a067?auto=format&fit=crop&w=800&q=80',
        care: ['Extremely low maintenance once established.', 'Can be trimmed back mechanically if boundaries need managing.'],
        featured: false,
        videoUrl: ''
    },
    'climbing-fragrant-cloud': {
        name: 'Climbing Fragrant Cloud',
        tag: 'Climbing Rose',
        price: '₹400 per plant',
        desc: 'Vigorous climbing variety boasting intensely fragrant coral-red flowers. Train along fences, pillars, or trellis systems for a dramatic vertical display.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        care: ['Requires strong structural support.', 'Tie in new flexible canes horizontally to encourage maximum lateral blooming spurs.'],
        featured: true,
        videoUrl: ''
    }
};