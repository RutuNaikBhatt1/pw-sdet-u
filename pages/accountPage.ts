import {Page,Locator} from '@playwright/test';

export default class AccountPage{
page: Page;
registerUserNameInput: Locator;
loginUserInput: Locator;
emailInput:Locator;
registerPasswordInput: Locator;
loginPasswordInput: Locator;
registerButton: Locator;
loginButton: Locator;
dashboardLink: Locator;

constructor(page: Page){
    this.page= page;
    this.registerUserNameInput = page.locator('#reg_username');
    this.emailInput = page.locator('#reg_email');
    this.registerPasswordInput = page.locator('#reg_password');
    this.registerButton = page.locator('button[type=submit]').getByText('Register');
    this.dashboardLink = page.locator('.woocommerce-MyAccount-navigation ul li a').getByText('Dashboard');
    this.loginUserInput = page.locator('#username');
    this.loginPasswordInput = page.locator('#password');
    this.loginButton = page.locator('button[type=submit]').getByText('Log in');
}

async navigate() {
    await this.page.goto('/my-account');
}

async registerANewUser(user: string, email: string, password: string){
    await this.registerUserNameInput.fill(user);
    await this.emailInput.fill(email);
    await this.registerPasswordInput.fill(password);
    await this.registerButton.click();
}

async loginWithEmail(email: string, password: string){
    await this.loginUserInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
}
}