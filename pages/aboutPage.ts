import {Page, Locator} from '@playwright/test';
export default class AboutPage{
    page:Page;

    constructor(page: Page){
        this.page=page
    }
    async navigate() {
        await this.page.goto('/about')
    }

}