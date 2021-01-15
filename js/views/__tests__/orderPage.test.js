/* eslint-env jest */
import orderPage from '../orderPage';

describe('Order Page Module', () => {
    it('should return filled order page template', () => {

        let totalPrice = null;
        const expectedResult = 
        `
    <div class = "order-container">
        <form id = "order-form" onsubmit="return false;" method="post">
              <h3>Order information</h3>

              <label for = "name"> Full Name</label>
              <input type = "text" pattern="[a-zA-Z]+" minlength="3" maxlength="32" required = "required" id = "name" name = "name" placeholder = "Name Example">
              
              <label for = "email"> Email</label>
              <input type = "email" required = "required" id = "email" name = "email" placeholder = "name@example.com">
              
              <label for = "phone"> Phone</label>
              <input type = "tel" pattern = "[0-9]{10}" id = "phone" name = "phone" placeholder = "0891234567">

              <label for = "date"> Date</label>
              <input type = "date" id = "date" name = "date">

              <label for = "time"> Time</label>
              <input type ="time" id = "time" name = "time">

              <label for = "payment"> Payment method</label>
              <select id = "payment" required = "required">
                <option class = "option">Visa</option>
                <option class = "option">Mastercard</option>
              </select><br><br>

              <label for = "card">Credit card number</label>
              <input type = "text" required = "required" pattern = "[0-9]{16}" id = "card" name = "card" placeholder = "1111222233334444">
            
              <br><span class = "total-price">Total price: ${totalPrice} ₴</span><br>
              <br>
              <button class = "buy-button" id = "submit-order-btn">Submit Order</button>
              
        </form>
    </div>
    `;
        
        orderPage();
        expect(orderPage()).toBe(expectedResult);
    });
});
