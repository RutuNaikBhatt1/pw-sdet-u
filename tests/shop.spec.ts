import {test, expect } from "@playwright/test";
import ShopPage from "../pages/shopPage";
import TopNavigationBar from "../pages/topNavigationBar";
//import exp from "constants";

test.describe('Shop Page', () => {
let shopPage: ShopPage;
let topNavigationBar: TopNavigationBar;

    test.beforeEach(async ({ page }) => {
        shopPage = new ShopPage(page);
        topNavigationBar = new TopNavigationBar(page);
        await shopPage.navigate();
    })

    test('Add an item to cart', async () => {
       await shopPage.addCannonCameraLink.click();
       await expect(shopPage.viewCartLink).toBeVisible();
       await expect(topNavigationBar.shoppingCart).toHaveText('1');
    })

   // eslint-disable-next-line playwright/expect-expect
   test('Add multiple items to cart', async() => {
      await shopPage.getItemLink()
   })
})
