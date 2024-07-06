import checkoutPage from '../pages/checkoutPage.js';
import cartPage from '../pages/cartPage.js';
import inventoriPage from '../pages/inventoriPage.js';
import LoginPage from '../pages/loginPage.js';
import { validCredentials, invalidCredentials, errorMessage } from '../data.js';

describe('Login Page', () => {
    before(async () => {
 
        await LoginPage.open();
    });

    it('should be able to checkout sauce labs backpack', async () => {
        await LoginPage.login(validCredentials.username, validCredentials.password);
        await inventoriPage.clickBackpack();
        await inventoriPage.addtoCart();
        await inventoriPage.clickCart();
        await cartPage.clickcheckout();
        await expect(checkoutPage.infoCheckout).toBeExisting();
    });

});
