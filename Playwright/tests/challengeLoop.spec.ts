import { test, expect, Page } from '@playwright/test';

let page: Page;

test.describe('Find Chris', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://semanticbits.com/about/our-team/');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('read out the chris', async () => {
    await page.waitForSelector('[id="page-header-wrap"]');
    const locator = page.frameLocator('iframe[name="advanced_iframe"]').locator('[class = "name"]', {hasText: 'Chris'});
    const text = await locator.allTextContents();
    const count = await locator.count();
    let chrisName: string[] = ['Chris Martell'
      , 'Chris Nam'
      , 'Chris Vasile'
      , 'Chris Weizer'
      , 'Christian Manalansan'
      , 'Christina Biggs'
      , 'Christine Spargur'
      , 'Christopher Alexion'
      , 'Christopher Holden'
      , 'Christopher Hubert'
      , 'Christopher Kawell'
      , 'Christopher Teixeira'
      , 'Christopher Zuniga '];
    const nameList = [];
    for (let i = 0; i < count; ++i){
      console.log(locator.nth(i).textContent());
    }
  });
});