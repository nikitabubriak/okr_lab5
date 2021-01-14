/* eslint-env jest */
import offerPage from '../offerPage';

describe('Offer Page Module', () => {
    it('should return filled offer page template', () => {

        let page = 
          {
            url: "autumn_sale",
            name: "Autumn Sale",
            description: "The Steam Autumn Sale is now live!",
            image: "resources/offers/autumn_sale.jpg",
            datePosted: "01.12.2020"
          }
        const offers = [page];

        const expectedResult = 
        `
        <div class = "offer">
            <a class = "offer-link" href = "#offer/autumn_sale">
                <img src = "resources/offers/autumn_sale.jpg" alt = "Autumn Sale">
            </a>
            <div class = "offer-details">
                <br><span class = "offer-name">Autumn Sale</span>
                <br><span class = "offer-date-posted">Date posted: 01.12.2020</span>
                <br><span class = "offer-description">The Steam Autumn Sale is now live!</span>
            </div>
        </div>
        `;
        expect(offerPage(offers[0])).toBe(expectedResult);
    });
});
