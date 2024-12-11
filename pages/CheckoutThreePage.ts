import { Page } from "@playwright/test";

export class CheckoutThreePage {
  public finish;

  constructor(private page: Page) {
    this.finish = this.page.locator('[data-test="finish"]');
  }

  async clickFinishBtn(): Promise<void> {
    await this.finish.click();
  }
}
