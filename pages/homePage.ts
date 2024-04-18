import { Page, Locator } from '@playwright/test';

export default class HomePage {
 page:Page;
 getStartedButton: Locator

constructor(page : Page) {
    this.page = page;
    this.getStartedButton = page.getByTestId('get-started');
}
async navigate(){
    await this.page.goto('/');
}
}
