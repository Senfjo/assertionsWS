import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/inventoryPage";
import { LoginPage } from "../pages/loginPage";

test("should login successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(loginPage.url);
  await loginPage.login("standard_user", "secret_sauce");

  const inventoryPage = new InventoryPage(page);

  await inventoryPage.clickAddCart();
  await inventoryPage.clickCartBtn();

  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
});
