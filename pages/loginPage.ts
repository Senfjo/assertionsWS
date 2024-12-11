import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  // Locators
  public inpUsername
  public inpPassword 
  public btnLogin 

  // URL
  public url: string;

  constructor(page: Page) {
    this.page = page;
    this.inpUsername = this.page.locator('[data-test="username"]');
    this.inpPassword = this.page.locator('[data-test="password"]');
    this.btnLogin = this.page.locator('[data-test="login-button"]');
    this.url = "https://www.saucedemo.com/";
  }

  

  private async setUsername(username: string): Promise<void> {
    await this.inpUsername.fill(username);
  }

  private async setPassword(password: string): Promise<void> {
    await this.inpPassword.fill(password);
  }

  private async clickBtnLogin(): Promise<void> {
    await this.btnLogin.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.setUsername(username);
    await this.setPassword(password);
    await this.clickBtnLogin();
  }
}