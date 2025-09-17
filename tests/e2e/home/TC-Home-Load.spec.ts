// Source: EXP-37 Home page acceptance criteria

import { test, expect } from "@playwright/test";
import { gotoHome } from "../../pageObjects/homePage";

test.describe("TC-Home-Load — Home page loads", () => {
  test("should display main content and navigation", async ({ page }) => {
    await test.step("Navigate to Home page", async () => {
      await gotoHome(page);
    });
    await test.step("Check main heading", async () => {
      await expect(
        page.getByRole("heading", {
          level: 1,
          name: "Milena Cylinska - QA Expert",
        }),
      ).toBeVisible();
    });
    await test.step("Check navigation bar", async () => {
      await expect(
        page.getByRole("navigation", { name: "Site" }),
      ).toBeVisible();
    });
  });
});
