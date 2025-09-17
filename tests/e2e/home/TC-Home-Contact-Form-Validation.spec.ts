// Source: EXP-37 Home page acceptance criteria
import { test } from "@playwright/test";
import {
  gotoHome,
  fillContactForm,
  clickSend,
} from "../../pageObjects/homePage";

test.describe("TC-Home-Contact-Form-Validation — Contact form validation", () => {
  test("should show errors for invalid email and empty message", async ({
    page,
  }) => {
    await gotoHome(page);
    await fillContactForm(page, {
      firstName: "TestFirst",
      lastName: "TestLast",
      email: "invalid-email",
      company: "TestCompany",
      message: "",
    });
    await clickSend(page);
    // TODO: Add expect for error messages (requires error locator, e.g. getByText(/invalid email/i))
  });
});
