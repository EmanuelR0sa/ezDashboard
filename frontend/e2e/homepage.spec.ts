import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/dashboard");

  await expect(page).toHaveTitle(/ArchiDash/);
});

test("get customers link", async ({ page }) => {
  await page.goto("http://localhost:5173/dashboard");

  await page.getByRole("link", { name: "Customers" }).click();

  await expect(page.getByRole("link", { name: "Customer List" })).toBeVisible();
});
