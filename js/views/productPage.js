const urlParser = (catalog) =>
{
    let subdir = window.location.hash.split('/')[1];

    for (let i = 0; i < catalog[1].length; i++)
    {
        if (catalog[1][i].url === subdir)   return catalog[1][i];
    }
};

const view = (catalog) => 
{
    let page = urlParser(catalog);
    let productCategory = {};
    let related = [];

    catalog[0].map((category) =>
    {
        if (category.ID === page.categoryID)
        {
            productCategory = category;
        }
    });

    catalog[1].map((product) =>
    {
        for (let i = 0; i < page.relatedProducts.length; i++)
        {
            if (product.ID === page.relatedProducts[i])
            {
                related.push(product);
            }
        }
    });

    let productPage =
    `
    <div class = "product">
        <a class = "product-link" href = "${page.steamLink}">
            <img src = "${page.image}" alt = "${page.name}">
            <br><span>the image links to the real game store page</span>
        </a>
        <div class = "product-details">
            <br><h1 class = "product-name">${page.name}</h1>
            <br><span class = "product-description">${page.description}</span><br>
            <br><span class = "product-info">Release date: ${page.releaseDate}</span>
            <br><span class = "product-info">Developer: ${page.developer}</span>
            <br><span class = "product-info">Publisher: ${page.publisher}</span>
            
            <br><br><span>Buy ${page.name} for ${page.price} ₴</span>
            <br><label for = "count">Select the number of products:</label>
                <input type = "number" id = "count" name = "count" min = "1" max = "4" value = "1">
            <br><a class = "add-to-cart-link" href = "#cart">
                <button class = "buy-button" id = "add-to-cart-btn" value = ${page.ID}>Add to Cart</button>
            </a>
            
            <br><br><a href = "#catalog/${productCategory.url}">
                <h2 class = "product-category">Category: ${productCategory.name}</h2>
            </a>
        </div>
    </div>

    <div class = "products-container">
        <h2>Related products</h2><br>
        <div class = "products-grid">
        ${
    related.map((product) =>
        `
            <div class = "product-tile">
                <a class = "product-link" href = "#product/${product.url}">
                    <img src = "${product.image}" alt = "${product.name}">
                    <br><br><span class = "product-tile-name">${product.name}</span>
                    <span class = "product-tile-price">${product.price} ₴</span>
                </a>
            </div>
            `).join('')
}
        </div>
    </div>
    `;

    return productPage;
};


export default view;