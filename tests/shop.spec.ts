import {test, expect } from "@playwright/test";
import ShopPage from "../pages/shopPage";
import TopNavigationBar from "../pages/topNavigationBar";
import exp from "constants";

test.describe('Shop Page', () => {
let shopPage: ShopPage;
let topNavigationBar: TopNavigationBar;

    test.beforeEach(async ({ page }) => {
        shopPage = new ShopPage(page);
        topNavigationBar = new TopNavigationBar(page);
        await shopPage.navigate();
    })

    test('Add an item to cart', async ({ page }) => {
       await shopPage.addCannonCameraLink.click();
       await expect(shopPage.viewCartLink).toBeVisible();
       await expect(topNavigationBar.shoppingCart).toHaveText('1');
    })

    test('Add multiple items to cart', async ({ page }) => {
       // await shopPage.addCannonCameraLink.click();
        await shopPage.getItemLink('Headphone')
        await page.pause()
        // await expect(shopPage.viewCartLink).toBeVisible();
        // await expect(topNavigationBar.shoppingCart).toHaveText('1');
     })
})
