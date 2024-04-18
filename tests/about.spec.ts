import {test,expect} from '@playwright/test';
import AboutPage from '../pages/aboutPage';
test.describe('About Page', () => {
    let aboutPage : AboutPage
    
    test.beforeEach(async ({ page }) => {
     aboutPage = new AboutPage(page);
       await aboutPage.navigate();
    })
    
    test('Verify About Page title', async ({ page }) => {
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
         })
    })
