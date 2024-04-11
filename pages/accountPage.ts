import {Page,Locator} from '@playwright/test'
import { userName,emailAddress, password } from '../helpers/users';

export default class AccountPage{
page: Page;
userInput: Locator;
emailInput:Locator;
passwordInput: Locator;
registerButton: Locator;

constructor(page: Page){
    this.page= page;
    this.userInput = page.locator('#reg_username');
    this.emailInput = page.locator('#reg_email')
    this.passwordInput = page.locator('#reg_password');
    this.registerButton = page.locator('button[type=submit]').getByText('Register');
}
async navigate() {
    await this.page.goto('/my-account');
}

async registerANewUser(){
    await this.userInput.fill(userName());
    await this.emailInput.fill(emailAddress());
    await this.passwordInput.fill(password());
    await this.registerButton.click();
}
}