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

async getItemLink() {
const list = this.page.locator('.products.columns-3 li')
console.log(await list.count())
for(let i=0; i<=await list.count(); i++){
  console.log(list[i])
  //const item = list
 // console.log('print'+item)
  // eslint-disable-next-line playwright/no-page-pause
  
//const addItemToCart = this.page.getByRole('link', { name: `Add to cart: "${productName}"`});
//console.log('11111111111111111111111' + addItemToCart)
//await addItemToCart.click()
}
}
}
