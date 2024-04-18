import { Locator, Page } from "@playwright/test";

export default class CartPage{
page: Page
cartHeader: Locator;
selectFileButton: Locator;
uploadFileButton: Locator;
fileUploadSuccessMessage: Locator;

constructor(page: Page){
    this.page = page;
    this.cartHeader = this.page.locator('.zak-page-title').getByText('Cart');
    this.selectFileButton = this.page.locator('input#upfile_1');
    this.uploadFileButton = this.page.locator('input#upload_1');
    this.fileUploadSuccessMessage = this.page.locator('#wfu_messageblock_header_1_label_1');
}

async navigateToCartPage() {
    await this.page.goto('/cart');
}
}