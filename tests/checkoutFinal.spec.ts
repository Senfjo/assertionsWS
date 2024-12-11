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

  // Go to the login page
  await page.goto(loginPage.url);
  await expect(page).toHaveURL(loginPage.url);
  await expect(loginPage.inpUsername).toBeVisible(); // Assert username input is visible
  await expect(loginPage.inpPassword).toBeVisible(); // Assert password input is visible
  await expect(loginPage.btnLogin).toBeVisible(); // Assert login button is visible

  // Perform login
  await loginPage.login("standard_user", "secret_sauce");
  await expect(page).toHaveURL(inventoryPage.url); // Assert redirected to inventory page
  await expect(inventoryPage.addCart).toBeVisible(); // Assert add to cart button is visible

  // Add item to cart
  await inventoryPage.clickAddCart();
  await expect(inventoryPage.cartBtn).toBeVisible(); // Assert cart button is visible
  await expect(inventoryPage.cartBtn).toHaveText("1"); // Assert cart badge shows 1 item

  // Go to cart
  await inventoryPage.clickCartBtn();
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html"); // Assert cart page URL

  // Checkout step one
  await checkoutOnePage.clickCheckoutBtn();
  await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
  await expect(checkoutTwoPage.firstName).toBeVisible(); // Assert first name input is visible
  await expect(checkoutTwoPage.lastName).toBeVisible(); // Assert last name input is visible
  await expect(checkoutTwoPage.zipCode).toBeVisible(); // Assert postal code input is visible

  // Fill in checkout form
  await checkoutTwoPage.fillForm("John", "Doe", "12345");
  await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html"); // Assert redirected to next step

  // Finish checkout
  await checkoutThreePage.clickFinishBtn();
  await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html"); // Assert checkout complete URL

  // Return to inventory
  await checkoutFinalPage.clickFinishBtn();
  await expect(page).toHaveURL(inventoryPage.url); // Assert redirected back to inventory page
});
