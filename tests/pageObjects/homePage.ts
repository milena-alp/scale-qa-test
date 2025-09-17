// Source: EXP-37 Home page acceptance criteria
import { Page } from "@playwright/test";

/** Navigates to the Home page */
export async function gotoHome(page: Page): Promise<void> {
  await page.goto("https://www.scale-qa.com");
}

/** Clicks the "Solutions for Startups" button */
export async function clickSolutionsForStartups(page: Page): Promise<void> {
  await page.getByRole("link", { name: "Solutions for Startups" }).click();
}

/** Clicks the "My approach to Enterprise projects" button */
export async function clickEnterpriseProjects(page: Page): Promise<void> {
  await page
    .getByRole("link", { name: "My approach to Enterprise projects" })
    .click();
}

/** Fills the contact form */
export async function fillContactForm(
  page: Page,
  data: {
    firstName?: string;
    lastName?: string;
    email: string;
    company?: string;
    message: string;
  },
): Promise<void> {
  if (data.firstName)
    await page
      .getByRole("textbox", { name: "First Name" })
      .fill(data.firstName);
  if (data.lastName)
    await page.getByRole("textbox", { name: "Last Name" }).fill(data.lastName);
  await page.getByRole("textbox", { name: "Email *" }).fill(data.email);
  if (data.company)
    await page.getByRole("textbox", { name: "Company" }).fill(data.company);
  await page.getByRole("textbox", { name: "Message *" }).fill(data.message);
}

/** Clicks the Send button */
export async function clickSend(page: Page): Promise<void> {
  await page.getByRole("button", { name: "Send" }).click();
}
