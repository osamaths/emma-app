import {QUESTIONS_SCREEN, WELCOME_SCREEN} from './e2eIDs';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show welcome screen', async () => {
    await expect(element(by.id(WELCOME_SCREEN.welcome_text))).toBeVisible();
  });

  it('should show Questions screen after tap Start Quiz', async () => {
    await element(by.id(WELCOME_SCREEN.btn)).tap();
    await expect(element(by.id(QUESTIONS_SCREEN.container))).toBeVisible();
  });

  it('Question screen should show welcome screen', async () => {
    await expect(element(by.id(WELCOME_SCREEN.welcome_text))).toBeVisible();
    await expect(element(by.id(WELCOME_SCREEN.btn))).toBeVisible();
  });

  it('Question screen should be visible', async () => {
    await element(by.id(WELCOME_SCREEN.btn)).tap();
    await expect(element(by.id(QUESTIONS_SCREEN.container))).toBeVisible();
  });
});
