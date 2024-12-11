import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test("should login successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(loginPage.url);
  await loginPage.login("standard_user", "secret_sauce");

  // Assertion: Verify successful login by checking the redirected URL
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
