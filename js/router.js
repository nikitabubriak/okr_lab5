class Router 
{
    getCurrentState() 
    {
        let viewName = '';
        let endpointName = '';

        let currentHash = window.location.hash.split('#')[1];
        if (!currentHash) currentHash = '#';
        if (currentHash.includes('/')) currentHash = currentHash.split('/')[0];
        
        switch (currentHash) 
        {
            case 'offer':
                viewName = 'offerPage';
                endpointName = 'offers';
                break;

            case 'catalog':
                viewName = 'catalogPage';
                endpointName = 'catalog';
                break;

            case 'product':
                viewName = 'productPage';
                endpointName = 'catalog';
                break;
            
            case 'cart':
                viewName = 'cartPage';
                endpointName = 'catalog';
                break;

            case 'order':
                viewName = 'orderPage';
                endpointName = 'db';
                break;

            default:
                viewName = 'homePage';
                endpointName = 'db';
                window.location.hash = '#';
                break;
        }

        return {
            viewName,
            endpointName
        };
    }
}

export default Router;
