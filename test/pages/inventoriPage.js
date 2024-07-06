class InventoriPage {

    get sauceLabsBackpack() { return $('//div[text()="Sauce Labs Backpack"]'); }
    get buttonAddtoCart() { return $('//button[text()="ADD TO CART"]'); }
    get cartIcon() { return $('//div[@id="shopping_cart_container"]/a')}
    async clickBackpack() {
        await this.sauceLabsBackpack.click();
    }

    async addtoCart() {
        await this.buttonAddtoCart.click();
    }

    async clickCart() {
        await this.cartIcon.click();
    }
}

export default new InventoriPage();