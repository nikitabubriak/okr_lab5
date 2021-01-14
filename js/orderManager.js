const countProducts = () =>
{
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) cart = {};
    let count = 0;
    for (let [key, value] of Object.entries(cart)) count += Number(value);
    document.getElementById("total-count").textContent = count;
}

const cartAddProduct = () => 
{
    let count = document.getElementById("count").value;
    if (count == "" || !count) return;
    let btn = document.getElementById("add-to-cart-btn");
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) cart = {};
    let id = btn.value;
    cart[id] = count;
    localStorage.setItem("cart", JSON.stringify(cart));
    countProducts();
}

const cartRemoveProduct = (id) =>
{
    let cart = JSON.parse(localStorage.getItem("cart"));
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    countProducts();
}

const cartClear = () =>
{
    localStorage.removeItem("cart");
    localStorage.removeItem("totalPrice");
    countProducts();
}

const generateID = () =>
{
    let id = '';
    const digits = '0123456789';
    
    for (let i = 0; i < 16; i++) 
    {
        id += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    
    return id;
}

const orderStatus = (response) => 
{
    const rootNode = document.getElementById('main-container');
    rootNode.innerHTML =
    `
    <div class = "product">
        <div class = "order-status">
            <p>Thank you for your purchase! This online shop was made for educational purposes only</p><br>
            <p>Order ${response.id}</p>
            <br><p>Details:</p><br>
            <br><span>${response.name}</span>
            <br><span>${response.email}</span>
            <br><span>${response.phone}</span>
            <br><span>${response.date}</span>
            <br><span>${response.time}</span>
            <br><span>${response.payment}</span>
            <br><span>${response.card}</span>
            <br><p>Order Total: ${response.total} ₴</p>
        </div>
    </div>
    `;
    
    cartClear();
    history.replaceState(null, null, document.location.pathname + `#order/${response.id}`);
}

async function submitOrder ()
{
    const form = document.getElementById("order-form")
    if (!form.checkValidity())
    {
        window.location.hash = '#order';
        alert("Invalid form input. Please try again");
        return;
    }
    if (document.getElementById("total-count").textContent == 0)
    {
        window.location.hash = '#catalog';
        alert("Your cart is empty. Please try again");
        return;
    }
    
    const order =
    {
        id: generateID(),
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        date: form.date.value,
        time: form.time.value,
        payment: form.payment.value,
        card: form.card.value,
        cart: JSON.parse(localStorage.getItem("cart")),
        total: JSON.parse(localStorage.getItem("totalPrice"))
    }

    try 
    {
        await fetch
        (`https://my-json-server.typicode.com/nikitabubriak/okr_lab4/orders`,
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then((response) => response.json())
        .then((data) => 
        {
            console.log('Success:', data);
            orderStatus(data);
        });
    } catch (error) 
    {
        console.error('Error:', error);
        alert(error);
        window.location.hash = '#order';
    }
}

export {
    countProducts,
    cartAddProduct,
    cartRemoveProduct,
    submitOrder
}