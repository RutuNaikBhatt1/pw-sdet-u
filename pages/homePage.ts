import { Page, Locator } from '@playwright/test';

export default class HomePage {
 page:Page;

constructor(page : Page) {
    this.page = page;
}
async navigate(){
    await this.page.goto('/');
}
}
