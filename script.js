const whatsappNumber = '6290488309';

function createProductCards() {
    const featuredGrid = document.getElementById('featured-grid');
    const catalogGrid = document.getElementById('catalog-grid');
    
    featuredGrid.innerHTML = '';
    catalogGrid.innerHTML = '';

    for (const key in products) {
        const prod = products[key];
        const hasVideo = prod.videoUrl && prod.videoUrl.trim() !== '';
        const youtubeBtnText = hasVideo ? 'Watch Video' : 'Video Coming Soon';
        const youtubeAction = hasVideo ? `window.open('${prod.videoUrl}', '_blank')` : `alert('Video for ${prod.name} is coming soon! Subscribe to our channel for updates.')`;

        const cardHTML = `
            <div class="card">
                <img src="${prod.image}" alt="${prod.name}">
                <div class="card-content">
                    <span class="tag">${prod.tag}</span>
                    <h3>${prod.name}</h3>
                    <p>${prod.desc.substring(0, 90)}...</p>
                    <div style="font-weight: bold; color: var(--accent); margin-bottom: 15px;">${prod.price}</div>
                    <div class="btn-group">
                        <button class="btn btn-details" onclick="showProduct('${key}')">View Specifications</button>
                        <button class="btn btn-whatsapp" onclick="orderOnWhatsApp('${prod.name}')">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.443-9.89 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.298-.149-1.763-.868-2.037-.967-.273-.099-.472-.148-.67.15-.197.297-.763.967-.937 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.763-.722 2.013-1.419.25-.697.25-1.293.174-1.419z"/></svg>
                            Order on WhatsApp
                        </button>
                        <button class="btn btn-youtube" onclick="${youtubeAction}">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            ${youtubeBtnText}
                        </button>
                    </div>
                </div>
            </div>
        `;
        catalogGrid.innerHTML += cardHTML;
        if (prod.featured) {
            featuredGrid.innerHTML += cardHTML;
        }
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active-page'));
    document.getElementById(pageId).classList.add('active-page');
    window.scrollTo(0, 0);
}

function showProduct(productKey) {
    const prod = products[productKey];
    if (!prod) return;

    const hasVideo = prod.videoUrl && prod.videoUrl.trim() !== '';
    const youtubeBtnText = hasVideo ? 'Watch Video' : 'Video Coming Soon';

    document.getElementById('prod-title').innerText = prod.name;
    document.getElementById('prod-tag').innerText = prod.tag;
    document.getElementById('prod-price').innerText = prod.price;
    document.getElementById('prod-desc').innerText = prod.desc;
    document.getElementById('prod-img').src = prod.image;
    document.getElementById('prod-img').alt = prod.name;

    const careList = document.getElementById('prod-care');
    careList.innerHTML = '';
    prod.care.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        careList.appendChild(li);
    });

    document.getElementById('prod-whatsapp-btn').onclick = function() {
        orderOnWhatsApp(prod.name);
    };

    const ytBtn = document.getElementById('prod-youtube-btn');
    document.getElementById('youtube-btn-text').innerText = youtubeBtnText;
    ytBtn.onclick = function() {
        if (hasVideo) {
            window.open(prod.videoUrl, '_blank');
        } else {
            alert(`Video for ${prod.name} is coming soon! Subscribe to our channel for updates.`);
        }
    };

    showPage('product-page');
}

function orderOnWhatsApp(productName) {
    const message = encodeURIComponent(`Hello, I would like to order the following rose plant from Alia Rose Nursery Shikarpur: ${productName}. Please confirm availability and payment details.`);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
}

createProductCards();