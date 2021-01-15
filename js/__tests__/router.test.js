/* eslint-env jest */
import Router from '../router.js';

describe('Router Module', () => {
    it('should return viewname and endpoint name based on hash', () => {
        
        const router = new Router();

        window.location.hash = '#offer';
        let viewName = 'offerPage', endpointName = 'offers';

        expect(router.getCurrentState()).toStrictEqual({
            viewName,
            endpointName
        });

        window.location.hash = '#catalog';
        viewName = 'catalogPage', endpointName = 'catalog';

        expect(router.getCurrentState()).toStrictEqual({
            viewName,
            endpointName
        });

        window.location.hash = '#product';
        viewName = 'productPage', endpointName = 'catalog';

        expect(router.getCurrentState()).toStrictEqual({
            viewName,
            endpointName
        });

        window.location.hash = '#cart';
        viewName = 'cartPage', endpointName = 'catalog';

        expect(router.getCurrentState()).toStrictEqual({
            viewName,
            endpointName
        });

        window.location.hash = '#order';
        viewName = 'orderPage', endpointName = '';

        expect(router.getCurrentState()).toStrictEqual({
            viewName,
            endpointName
        });

        window.location.hash = '#idontexist';
        viewName = 'homePage', endpointName = 'db';

        expect(router.getCurrentState()).toStrictEqual({
            viewName,
            endpointName
        });

    });
});
