const urlParser = (catalog) =>
{
    let currentHash = window.location.hash.split('#')[1];

    if (!currentHash.includes('/'))         return 'catalog';

    let subdir = currentHash.split('/')[1];

    for (let i = 0; i < catalog[0].length; i++)
    {
        if (catalog[0][i].url === subdir)   return catalog[0][i];
    }
};

const getCategoryProducts = (category, products) =>
{
    let categoryProducts = [];

    products.map((product) =>
    {
        if (product.categoryID === category.ID)
        {
            categoryProducts.push(product);
        }
    });

    return categoryProducts;
};

const buildCategoryProductsGrid = (category, products) =>
{
    let categoryProducts = getCategoryProducts(category, products);
            
    let categoryPage =
    `
    <div class = "products-grid">
        ${
    categoryProducts.map((product) =>
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
    `;

    return categoryPage;
};

const view = (catalog) => 
{
    let page = urlParser(catalog);

    if (page === 'catalog')
    {
        let catalogPage = '<div class = "products-container">';

        for (let i = 0; i < catalog[0].length; i++)
        {
            catalogPage += 
            `
            <br><a href = "#catalog/${catalog[0][i].url}">
                <h2>${catalog[0][i].name}</h2>
            </a><br>
            `;
            catalogPage += buildCategoryProductsGrid(catalog[0][i], catalog[1]);
        }

        catalogPage += '</div>';

        return catalogPage;
    }
    else
    {
        let categoryPage = '<div class = "products-container">';
        categoryPage += 
        `
            <br><h2>${page.name}</h2><br>
            <span>${page.description}</span><br>
        `;
        categoryPage += buildCategoryProductsGrid(page, catalog[1]);
        categoryPage += '<div class = "products-container">';

        return categoryPage;
    }

};

export default view;