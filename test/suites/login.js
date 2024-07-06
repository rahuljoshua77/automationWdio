import LoginPage from '../pages/loginPage.js';
import { validCredentials, invalidCredentials, errorMessage } from '../data.js';

describe('Login Page', () => {
    // Hook `beforeEach` untuk mengeksekusi kode sebelum semua tes dalam blok ini
    beforeEach(async () => {
        // Membuka URL dari halaman yang diuji
        await LoginPage.open();
    });
    
    afterEach(async () => {
        // Menutup browser setelah setiap tes
        await browser.reloadSession()
    });

    // Menguji apakah halaman login memiliki judul yang benar
    it('should have the right title', async () => {
        // Memeriksa apakah judul halaman adalah 'Swag Labs'
        await expect(browser).toHaveTitle('Swag Labs');
    });

    // Menguji apakah bisa login dengan kredensial yang valid
    it('should be able to login with valid credentials', async () => {
        // Melakukan login dengan kredensial yang valid
        await LoginPage.login(validCredentials.username, validCredentials.password);
        
        // Memeriksa apakah elemen container inventori ada di halaman
        await expect(LoginPage.inventoryContainer).toBeExisting();
    });

    // Menguji apakah tidak bisa login dengan kredensial yang tidak valid
    it('should not be able to login with invalid credentials', async () => {
        // Melakukan login dengan kredensial yang tidak valid
        await LoginPage.login(invalidCredentials.username, invalidCredentials.password);

        // Memeriksa apakah pesan kesalahan tampil di halaman
        await expect(LoginPage.errorMessage).toHaveText(errorMessage);
        await browser.debug();
    });
});
