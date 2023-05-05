import { BrowserContext, Page, expect } from '@playwright/test';
import {
  ALICE_ACCOUNT_NAME,
  ALICE_ACCOUNT_SEED,
  ALICE_ADDRESS,
  closePolkadotWelcomePopup,
  connectToNetwork,
  createAccount,
  selectAccount,
  signTransaction,
} from './common';
import { test } from './fixtures';
import { chainDecimals, getAccountLedger, getBalance, getStakedAmount } from './common-api';

const TEST_DAPP_ADDRESS = '0x0000000000000000000000000000000000000001';

const stake = async (page: Page, context: BrowserContext, amount: bigint): Promise<void> => {
  await page.goto(`/custom-node/dapp-staking/stake?dapp=${TEST_DAPP_ADDRESS}`);
  await selectAccount(page, ALICE_ACCOUNT_NAME);
  const balance = (await getBalance(ALICE_ADDRESS)) / BigInt(Math.pow(10, chainDecimals));
  await page.getByPlaceholder('0.0').fill(amount.toString());
  await page.getByRole('button', { name: 'Confirm' }).click();

  const stakedAmountBefore = await getStakedAmount(TEST_DAPP_ADDRESS);
  await signTransaction(context);
  await page.waitForSelector('.four', { state: 'hidden' });

  await expect(page.getByText('Success', { exact: true })).toBeVisible();
  const stakedAmountAfter = await getStakedAmount(TEST_DAPP_ADDRESS);
  expect(stakedAmountAfter - stakedAmountBefore).toEqual(
    amount * BigInt(Math.pow(10, chainDecimals))
  );
};

test.beforeEach(async ({ page, context }) => {
  await page.goto('/astar/dapp-staking/discover');

  // Close cookies popup
  await page.getByRole('button', { name: 'Accept' }).click();

  const closeButton = page.getByText('Polkadot.js');
  await closeButton.click();

  await closePolkadotWelcomePopup(context);
  await createAccount(page, ALICE_ACCOUNT_SEED, ALICE_ACCOUNT_NAME);
  await page.goto('/astar/dapp-staking/discover');
  await connectToNetwork(page);
});

test.describe('dApp staking transactions', () => {
  // Test case: DS001, DS002
  test('should be able to stake on test dApp', async ({ page, context }) => {
    const stakeAmount = BigInt(1000);
    await page.goto(`/custom-node/dapp-staking/stake?dapp=${TEST_DAPP_ADDRESS}`);
    await selectAccount(page, ALICE_ACCOUNT_NAME);
    const balance = (await getBalance(ALICE_ADDRESS)) / BigInt(Math.pow(10, chainDecimals));

    // Test edge cases
    await page.getByPlaceholder('0.0').fill((balance - BigInt(5)).toString());
    await expect(
      page
        .locator('div')
        .filter({
          hasText: /^Account must hold greater than 10ASTR in transferrable when you stake\.$/,
        })
        .locator('span')
    ).toBeVisible();
    await page.getByPlaceholder('0.0').fill((balance + BigInt(10)).toString());
    await expect(page.getByText('Insufficient ASTR balance')).toBeVisible();
    await page.getByPlaceholder('0.0').fill('100');
    await expect(
      page.getByText('The amount of token to be staking must be greater than 500 ASTR')
    ).toBeVisible();

    await page.getByPlaceholder('0.0').fill(stakeAmount.toString());
    await page.getByRole('button', { name: 'Confirm' }).click();

    const stakedAmountBefore = await getStakedAmount(TEST_DAPP_ADDRESS);
    await signTransaction(context);
    await page.waitForSelector('.four', { state: 'hidden' });

    await expect(page.getByText('Success', { exact: true })).toBeVisible();
    const stakedAmountAfter = await getStakedAmount(TEST_DAPP_ADDRESS);
    expect(stakedAmountAfter - stakedAmountBefore).toEqual(
      stakeAmount * BigInt(Math.pow(10, chainDecimals))
    );
  });

  // Test case: DS003
  test('should be able to unbond from the test dApp', async ({ page, context }) => {
    // Stake first
    await stake(page, context, BigInt(1000));

    // Unbond
    await page.goto('/custom-node/dapp-staking/discover');
    await page.getByText('My dApps').click();
    await page.getByRole('button', { name: 'Unbond' }).click();
    await page.getByPlaceholder('0.0').fill('1.1');
    await page.getByRole('button', { name: 'Start unbonding' }).click();
    await signTransaction(context);
    await page.waitForSelector('.four', { state: 'hidden' });

    await expect(page.getByText('Success', { exact: true })).toBeVisible();
    const ledger = await getAccountLedger(ALICE_ADDRESS);
    expect(ledger.unbondingInfo.unlockingChunks.length).toEqual(1);
    expect(ledger.unbondingInfo.unlockingChunks[0].amount.toString()).toEqual(
      '1100000000000000000'
    );
  });

  // Test case: DS006
  test('should be able to turn on/off re-staking', async ({ page, context }) => {
    // Stake first. User must be an active staker in order to change reward destination.
    await stake(page, context, BigInt(1000));

    // Check initial state
    await expect(page.getByText('ON', { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Turn off' })).toBeVisible();
    let ledger = await getAccountLedger(ALICE_ADDRESS);
    expect(ledger.rewardDestination.toString()).toEqual('StakeBalance');

    page.getByRole('button', { name: 'Turn off' }).click();
    await signTransaction(context);
    await page.waitForSelector('.four', { state: 'hidden' });
    await expect(page.getByText('OFF', { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Turn on' })).toBeVisible();
    ledger = await getAccountLedger(ALICE_ADDRESS);
    expect(ledger.rewardDestination.toString()).toEqual('FreeBalance');

    page.getByRole('button', { name: 'Turn on' }).click();
    await signTransaction(context);
    await page.waitForSelector('.four', { state: 'hidden' });
    await expect(page.getByText('ON', { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Turn off' })).toBeVisible();
    ledger = await getAccountLedger(ALICE_ADDRESS);
    expect(ledger.rewardDestination.toString()).toEqual('StakeBalance');
  });
});
