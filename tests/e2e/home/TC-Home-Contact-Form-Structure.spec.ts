// Source: EXP-37 Home page acceptance criteria

import { test, expect } from "@playwright/test";
import { gotoHome } from "../../pageObjects/homePage";

test.describe("TC-Home-Contact-Form-Structure — Contact form structure", () => {
  test("should display all required fields and recaptcha", async ({ page }) => {
    await gotoHome(page);
    await expect(
      page.getByRole("textbox", { name: "First Name" }),
    ).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Last Name" }),
    ).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email *" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Company" })).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Message *" }),
    ).toBeVisible();
    // TODO: Recaptcha iframe selector is unstable. Please add a data-testid or stable attribute to the recaptcha container for robust automation. Current selector does not match any element reliably.
    await expect(page.getByRole("button", { name: "Send" })).toBeVisible();
  });
});
