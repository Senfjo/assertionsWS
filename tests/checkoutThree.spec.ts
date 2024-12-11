import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { CheckoutOnePage } from "../pages/CheckoutOnePage";
import { CheckoutTwoPage } from "../pages/CheckoutTwoPage";
import { CheckoutThreePage } from "../pages/CheckoutThreePage";

test("should checkout successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutOnePage = new CheckoutOnePage(page);
    const checkoutTwoPage = new CheckoutTwoPage(page);
    const checkoutThreePage = new CheckoutThreePage(page);

    await page.goto(loginPage.url);
    await loginPage.login("standard_user", "secret_sauce");

    await inventoryPage.clickAddCart();
    await inventoryPage.clickCartBtn();

    await checkoutOnePage.clickCheckoutBtn();

    await checkoutTwoPage.fillForm("John", "Doe", "12345");

    await checkoutThreePage.clickFinishBtn();

    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");
});