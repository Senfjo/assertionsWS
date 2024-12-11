import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { CheckoutOnePage } from "../pages/CheckoutOnePage";

test("should checkout successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutOnePage(page);

    await page.goto(loginPage.url);
    await loginPage.login("standard_user", "secret_sauce");

    await inventoryPage.clickAddCart();
    await inventoryPage.clickCartBtn();

    await checkoutPage.clickCheckoutBtn();

    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
});