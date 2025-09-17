// Source: EXP-37 Home page acceptance criteria
import { test, expect } from "@playwright/test";
import {
  gotoHome,
  clickSolutionsForStartups,
  clickEnterpriseProjects,
} from "../../pageObjects/homePage";

test.describe("TC-Home-Buttons — Home page buttons", () => {
  test("should display and navigate via buttons", async ({ page }) => {
    await gotoHome(page);
    await expect(
      page.getByRole("link", { name: "Solutions for Startups" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "My approach to Enterprise projects" }),
    ).toBeVisible();

    await test.step("Click Solutions for Startups", async () => {
      await clickSolutionsForStartups(page);
      await expect(page).toHaveURL(/.*general-7/);
    });

    await gotoHome(page);

    await test.step("Click My approach to Enterprise projects", async () => {
      await clickEnterpriseProjects(page);
      await expect(page).toHaveURL(/.*enterprise-projects/);
    });
  });
});
