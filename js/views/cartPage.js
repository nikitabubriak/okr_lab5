const view = (catalog) => 
{
    let cart = JSON.parse(localStorage.getItem("cart"));
    let cartProducts = [];
    let totalPrice = 0;

    if (!cart || Object.keys(cart).length === 0)
    {
        window.location.hash = '#';
    }

    catalog[1].map((product) =>
    {
        for (let id of Object.keys(cart))
        {
            if (product.ID == id)
            {
                for (let i = 0; i < cart[id]; i++)
                {
                    cartProducts.push(product);
                    totalPrice += product.price;
                }
            }
        }
    });
    
    let cartPage = 
    `
    <div class = "products-container">
        <h2>Your shopping cart</h2><br>
        <div class = "products-grid">
        ${
            cartProducts.map((product) =>
            `
            <div class = "product-tile">
                <a class = "product-link" href = "#product/${product.url}">
                    <img src = "${product.image}" alt = "${product.name}">
                    <br><br><span class = "product-name">${product.name}</span>
                </a>
                <br><span class = "product-price">${product.price} ₴</span>
                <button class = "buy-button remove-button" id = "${product.ID}-remove-btn" value = ${product.ID}>Remove</button>
            </div>
            `).join("")
        }
        </div>
    </div>
    <span class = "total-price">Total price: ${totalPrice} ₴</span>
    `;

    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));

    if (Object.keys(cart).length === 0 && cart.constructor === Object) 
    {cartPage += `<a href = "#catalog"><button class = "buy-button" id = "proceed-to-order-btn">Your Cart is empty</button></a>`;}
    else 
    {cartPage += `<a href = "#order"><button class = "buy-button" id = "proceed-to-order-btn">Proceed to Order</button></a>`;}

    return cartPage;
}


export default view;