// Source: EXP-37 Home page acceptance criteria

import { test } from "@playwright/test";
import {
  gotoHome,
  fillContactForm,
  clickSend,
} from "../../pageObjects/homePage";

test.describe("TC-Home-Recaptcha — Recaptcha enforcement", () => {
  test("should block submission if recaptcha not checked", async ({ page }) => {
    await gotoHome(page);
    await fillContactForm(page, {
      email: "test@example.com",
      message: "Test message",
    });
    await clickSend(page);
    // TODO: Add expect for recaptcha error (requires error locator)
  });
});
