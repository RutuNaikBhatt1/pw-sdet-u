import {test,expect} from '@playwright/test';
import HomePage from '../pages/homePage';

test.describe('Home Page', () => {
    let homePage : HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate()
    })
    test('Verify Home page title', async ({ page }) => {
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
         })
})
