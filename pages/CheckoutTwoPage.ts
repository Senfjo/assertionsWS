import { Page } from "@playwright/test";

export class CheckoutTwoPage {
  public firstName;
  public lastName;
  public zipCode;
  public continueBtn;
  constructor(private page: Page) {
    this.firstName = this.page.locator('[data-test="firstName"]');
    this.lastName = this.page.locator('[data-test="lastName"]');
    this.zipCode = this.page.locator('[data-test="postalCode"]');
    this.continueBtn = this.page.locator('[data-test="continue"]');
  }
  async fillForm(
    firstName: string,
    lastName: string,
    zipCode: string
  ): Promise<void> {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);
    await this.continueBtn.click();
  }
}
