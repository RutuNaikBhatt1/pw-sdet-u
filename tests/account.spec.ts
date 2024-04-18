import {test, expect } from "@playwright/test";
import AccountPage from "../pages/accountPage";
import { generateEmailAddress, generateUserName, generatePassword} from "../helpers/users";

test.describe('Account Page', () => {
    let accountPage :AccountPage;
    const user = generateUserName();
    const email = generateEmailAddress();
    const password = generatePassword();

    test.beforeEach(async ({ page }) => {
    accountPage = new AccountPage(page);
    await accountPage.navigate();
    })
    
    test('Register a new user', async () => {
    await accountPage.registerANewUser(user, email, password);
    await expect(accountPage.dashboardLink).toBeVisible();
    })
    test('Login with registered user', async ({ page }) => {
      await accountPage.loginWithEmail(email, password);
      await expect(accountPage.dashboardLink).toBeVisible();
    })
})
