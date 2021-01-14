import Router from './router.js';
import Client from './client.js';
import TemplateProcessor from './templateProcessor.js';
import {scrolling, goUp, moveSlide, setSlide, showSlides, getSlideIndex} from './interaction.js';
import {countProducts, cartAddProduct, cartRemoveProduct, submitOrder} from './orderManager.js';

let loader = document.getElementById("loader");
const loadingToggle = () =>
{
    loader.classList.toggle("hidden");
}

const renderView = () =>
{
    loadingToggle();
    
    const router = new Router();
    const templateProcessor = new TemplateProcessor();
    const client = new Client();

    const { viewName, endpointName } = router.getCurrentState();

    let view;

    import(`./views/${viewName}.js`)
        .then((viewModule) =>  
        {
            view = viewModule.default;
            return client.getData(endpointName);
        })
        
        .then((data) => 
        {
            templateProcessor.render(view(data));
        })

        .finally(() => 
        {
            switch (viewName) 
            {
                case 'homePage':
                    showSlides(getSlideIndex());
                    document.getElementById("prev").addEventListener("click", function () { moveSlide(-1); });
                    document.getElementById("next").addEventListener("click", function () { moveSlide(1); });

                    let dotList = document.querySelectorAll(".dot");
                    for (let i = 0; i < dotList.length; i++)
                    {
                        dotList[i].addEventListener('click', function () { setSlide(i); });
                    }
                    break;

                case 'productPage':
                    document.getElementById("add-to-cart-btn").addEventListener("click", cartAddProduct);
                    break;

                case 'cartPage':
                    let removeBtnList = document.querySelectorAll(".remove-button");
                    for (let i = 0; i < removeBtnList.length; i++)
                    {
                        removeBtnList[i].addEventListener('click', function () { cartRemoveProduct(removeBtnList[i].value); });
                    }
                    break;

                case 'orderPage':
                    document.getElementById("submit-order-btn").addEventListener("click", submitOrder);
                    let currentHash = window.location.hash.split('#')[1];
                    if (currentHash.includes('/')) {window.location.hash = '#catalog';}
                    break;
                        
                default:
                    break;
            }

            countProducts();
            loadingToggle();
        });
}

renderView();

window.addEventListener('hashchange', renderView);
window.addEventListener("scroll", scrolling);
document.getElementById("up-button").addEventListener("click", goUp);
