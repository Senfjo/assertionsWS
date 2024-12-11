import { Page } from "@playwright/test";

export class InventoryPage {
  private page: Page;

  public addCart;
  public cartBtn;

  public url: string;

  constructor(page: Page) {
    this.page = page;
    this.addCart = this.page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cartBtn = this.page.locator('[data-test="shopping-cart-link"]');
    this.url = "https://www.saucedemo.com/inventory.html";
  }

  public async clickAddCart(): Promise<void> {
    await this.addCart.click();
  }

  public async clickCartBtn(): Promise<void> {
    await this.cartBtn.click();
  }
}
