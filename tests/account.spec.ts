import test from "@playwright/test";
import AccountPage from "../pages/accountPage";

test.describe('Account Page', () => {
    let accountPage :AccountPage;

    test.beforeEach(async ({ page }) => {
    accountPage = new AccountPage(page);
    await accountPage.navigate();
    })
    
    test('Register a new user', async ({ page }) => {
        await accountPage.registerANewUser();
       // await expect(accountPage.)    
    })
    
    
})
