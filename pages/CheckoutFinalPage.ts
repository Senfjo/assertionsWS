import { Page } from "@playwright/test";

export class CheckoutFinalPage {
private page: Page

    public finish

    constructor(page: Page) {
        this.page = (page);
        this.finish = this.page.locator('[data-test="back-to-products"]');
    }

    async clickFinishBtn(): Promise<void> {
        await this.finish.click();
    }
}