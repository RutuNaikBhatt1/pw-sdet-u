import { Page, Locator } from "@playwright/test";

export default class TopNavigationBar{
    page: Page
    shoppingCart: Locator;
    constructor(page: Page){
        this.page = page;
       this.shoppingCart = page.locator('#zak-mobile-nav').getByTitle('View your shopping cart');
    }
}