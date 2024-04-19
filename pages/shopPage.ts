import { Locator, Page, expect } from "@playwright/test";

export default class ShopPage{
page: Page;
shopHeader: Locator;
addToCartLink: Locator;
addCannonCameraLink: Locator;
addBrandedConverse: Locator;
viewCartLink: Locator;

constructor(page: Page){
 this.page= page;
 this.shopHeader = this.page.locator('.zak-page-title').getByText('Shop');
this.addToCartLink = this.page.locator('#zak-primary ul li'); 
 this.addBrandedConverse = this.page.getByRole('link', { name: `Add to cart: ${'Branded Converse'}`, exact: true });
 this.addCannonCameraLink = this.page.getByRole('link', { name: 'Add to cart: “Canon Antique Camera”', exact: true });
 this.viewCartLink = this.addCannonCameraLink.locator('+a:has-Text("View cart")');
}
async navigate(){
    await this.page.goto('/shop');
    await expect(this.shopHeader).toBeVisible();
}
async getItemLink(productName: string) {
    let link;
  const items = this.page.locator('#zak-primary ul li a').all();
  console.log('I am outside for loop');
  for (const el of await items) {
    console.log('I am inside for loop');
    const linkText = `Add to cart: "${productName}"`;
           link = this.page.getByRole('link', { name: linkText, exact: true });
            //link = this.page.getByText(productName)
            console.log(link);
           // if(link === true){
           await link.click();
            await this.page.pause()
           // }
    }
   }
}
