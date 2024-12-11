import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { CheckoutOnePage } from "../pages/CheckoutOnePage";
import { CheckoutTwoPage } from "../pages/CheckoutTwoPage";
import { CheckoutThreePage } from "../pages/CheckoutThreePage";
import { CheckoutFinalPage } from "../pages/CheckoutFinalPage";

test("should checkout successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutOnePage = new CheckoutOnePage(page);
  const checkoutTwoPage = new CheckoutTwoPage(page);
  const checkoutThreePage = new CheckoutThreePage(page);
  const checkoutFinalPage = new CheckoutFinalPage(page);

  await page.goto(loginPage.url);
  expect(page).toHaveURL(loginPage.url);

  await loginPage.login("standard_user", "secret_sauce");
  expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  await inventoryPage.clickAddCart();
  await inventoryPage.clickCartBtn();
  expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

  await checkoutOnePage.clickCheckoutBtn();
  expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");

  await checkoutTwoPage.fillForm("John", "Doe", "12345");
  expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");

  await checkoutThreePage.clickFinishBtn();
  expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");
  await checkoutFinalPage.clickFinishBtn();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

