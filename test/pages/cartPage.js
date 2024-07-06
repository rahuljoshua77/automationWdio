class cartPage {

    get buttonAddtoCart() { return $('//a[text()="CHECKOUT"]'); }
    async clickcheckout() {
        await this.buttonAddtoCart.click();
    }
}

export default new cartPage();