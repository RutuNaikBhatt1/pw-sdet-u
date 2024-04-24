import {test,expect } from "@playwright/test";
import CartPage from "../pages/cartPage";
import path from "path";

test.describe('Cart Page', () => {
    let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.navigateToCartPage();
  })
  
    test('Upload file', async () => {
    const filePath = path.join(__dirname,'../assets/playwright.png');
    await cartPage.selectFileButton.setInputFiles(filePath);
    await cartPage.uploadFileButton.click();
    await expect(cartPage.fileUploadSuccessMessage).toContainText('File playwright.png uploaded successfully');
     })
})
