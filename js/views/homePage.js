const view = (db) => 
{
    let featured = [];

    db.catalog[1].map((product) =>
    {
        for (let i = 0; i < db.featuredProducts.length; i++)
        {
            if (product.ID === db.featuredProducts[i])
            {
                featured.push(product);
            }
        }
    });


    let homePage = 
    `
    <div class="offer">
        <div class = "slideshow">
            <a class = "slide fade" href = "#offer/${db.offers[0].url}">
                <div class = "numbertext">1 / 3</div>
                <img src = "${db.offers[0].image}" alt = "${db.offers[0].name}">
            </a>
    
            <a class="slide fade" href = "#offer/${db.offers[1].url}">
                <div class = "numbertext">2 / 3</div>
                <img src = "${db.offers[1].image}" alt = "${db.offers[1].name}">
            </a>
    
            <a class="slide fade" href = "#offer/${db.offers[2].url}">
                <div class = "numbertext">3 / 3</div>
                <img src = "${db.offers[2].image}" alt = "${db.offers[2].name}">
            </a>

            <a class = "prev" id = "prev">&#10094;</a>
            <a class = "next" id = "next">&#10095;</a>
        </div>
    </div>
    <br>
    <div class = "dot-pagination">
        <span class = "dot"></span>
        <span class = "dot"></span>
        <span class = "dot"></span>
    </div>
    <script>showSlides(0);</script>

    <div class = "products-container">
        <h2>Featured products</h2><br>
        <div class = "products-grid">
        ${
            featured.map((product) =>
            `
            <div class = "product-tile">
                <a class = "product-link" href = "#product/${product.url}">
                    <img src = "${product.image}" alt = "${product.name}">
                    <br><br><span class = "product-tile-name">${product.name}</span>
                    <span class = "product-tile-price">${product.price} ₴</span>
                </a>
            </div>
            `).join("")
        }
        </div>
    </div>
    `;
    
    return homePage;
}


export default view;