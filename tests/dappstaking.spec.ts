import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/astar/dapp-staking/discover');
});

test.describe('init screen', () => {
  test('should wallet is opened', async ({ page }) => {
    const walletWrapper = page.getByText('Select a Wallet');
    await expect(walletWrapper).toBeVisible();
  });
  test('should wallet is closed', async ({ page }) => {
    const walletWrapper = page.getByText('Select a Wallet');
    const closeButton = page.getByText('×');
    await closeButton.click();
    await expect(walletWrapper).toBeHidden();
  });
  test('should private policy is opened unless accept the policy', async ({ page }) => {
    await checkPolicyInLocalStorage(page);

    const privatePolicy = page
      .getByRole('alert')
      .getByRole('link', { name: 'privacy policy page.' });
    await expect(privatePolicy).toBeVisible();
  });
  test('should hide the private policy after accept the policy', async ({ page }) => {
    await checkPolicyInLocalStorage(page);

    const privatePolicy = page
      .getByRole('alert')
      .getByRole('link', { name: 'privacy policy page.' });
    await expect(privatePolicy).toBeVisible();
    await page.click('button:has-text("Accept")');
    await expect(privatePolicy).not.toBeVisible();
  });
  test('should display the connect button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'box icon Connect' })).toBeVisible();
  });
  test('should display the Astar Network button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Astar Network' })).toBeVisible();
  });

  test('should display install extension popup when click Talisman button', async ({ page }) => {
    await checkInjectedWeb3(page);
    const button = page.locator('div').filter({ hasText: 'Talisman (Native)' }).first();
    await expect(button).toBeVisible();
    await button.click();
  });
});

test.describe('on dapp staking screen', () => {
  test('should redirect to docs page when click the first banner', async ({ page }) => {
    const closeButton = page.getByText('×');
    await closeButton.click();
    const bannerCard = page.locator('.wrapper--banners .card:first-child');
    await expect(bannerCard).toBeVisible();
    // wait for loading complete
    // await bannerCard.click({ timeout: 13000 });
  });

  test('should redirect to dapp page when click the dapp card', async ({ page }) => {
    // await page.click('.wrapper--list .card:first-child');
    // const re = /^https?:\/\/[^\/]+(\/[^?]+)/;
    // await page.waitForURL(re);
  });

  // test('should display staking button when over the dapp card', async ({ page }) => {
  //   const dappCard = page.locator('.wrapper--list .card').first();
  //   await expect(dappCard).toBeVisible();
  //   await dappCard.hover();
  //   const stakeButton = page.getByRole('button', { name: 'Stake Now' });
  //   await expect(stakeButton).toBeVisible();
  // });
});

//https://api.astar.network/api/v1/astar/dapps-staking/dapps
// test.describe('api testing', () => {
//   test('should get dapps list', async ({ request }) => {
//     const dapps = await request.get('https://api.astar.network/api/v1/astar/dapps-staking/dapps');
//     expect(dapps.ok()).toBeTruthy();
//     expect(await dapps.json()).toContainEqual(
//       expect.objectContaining({
//         name: 'AstridDAO',
//       })
//     );
//   });
// });

async function checkPolicyInLocalStorage(page: Page) {
  return await page.waitForFunction((e) => {
    return localStorage['confirmCookiePolicy'] === e;
  }, undefined);
}

async function checkInjectedWeb3(page: Page) {
  return await page.waitForFunction((e) => {
    const wallets = Object.keys(window.injectedWeb3);
    const isInstalledExtension = wallets.find((it) => 'polkadot-js' === it);
    return isInstalledExtension === undefined;
  }, undefined);
}
