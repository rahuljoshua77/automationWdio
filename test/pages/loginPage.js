// pages/LoginPage.js
class LoginPage {
    // Selektor untuk elemen-elemen halaman
    get usernameInput() { return $('//input[@id="user-name"]'); }
    get passwordInput() { return $('#password'); }
    get submitButton() { return $('#login-button'); }
    get errorMessage() { return $('h3'); }
    get inventoryContainer() { return $('#inventory_container'); }

    // Aksi untuk membuka URL halaman login
    async open() {
        await browser.url('https://www.saucedemo.com/v1/');
    }

    // Aksi untuk login dengan username dan password
    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }
}

export default new LoginPage();