import { Page } from "@playwright/test";

export class CheckoutOnePage {
  public checkoutBtn;
  constructor(private page: Page) {
    this.checkoutBtn = this.page.locator('[data-test="checkout"]');
  }

  async clickCheckoutBtn(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
