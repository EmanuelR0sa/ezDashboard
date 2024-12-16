import { test, expect } from "@playwright/test";

const validCustomerData = {
  firstName: "John",
  lastName: "Doe",
  company: "Acme Corporation",
  address: "123 Main St, Anytown, USA",
  phone: "1234567890",
  email: "john.doe@example.com",
};

const invalidCustomerData = {
  firstName: "",
  lastName: "Smith",
  company: "",
  address: "Invalid Address",
  phone: "invalid",
  email: "invalid-email",
};

test.describe("Add Customer Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/customers/addcustomer");
  });

  test("form renders with all expected fields", async ({ page }) => {
    const firstNameInput = page.getByLabel(/first name/i);
    const lastNameInput = page.getByLabel(/last name/i);
    const companyInput = page.getByLabel(/company/i);
    const addressInput = page.getByLabel(/address/i);
    const phoneInput = page.getByLabel(/phone number/i);
    const emailInput = page.getByLabel(/email/i);
    const submitButton = page.getByRole("button", { name: /submit/i });

    await expect(firstNameInput).toBeVisible();
    await expect(lastNameInput).toBeVisible();
    await expect(companyInput).toBeVisible();
    await expect(addressInput).toBeVisible();
    await expect(phoneInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(submitButton).toBeVisible();
  });

  test("submit form with valid data", async ({ page }) => {
    await page.getByLabel(/first name/i).fill(validCustomerData.firstName);
    await page.getByLabel(/last name/i).fill(validCustomerData.lastName);
    await page.getByLabel(/company/i).fill(validCustomerData.company);
    await page.getByLabel(/address/i).fill(validCustomerData.address);
    await page.getByLabel(/phone number/i).fill(validCustomerData.phone);
    await page.getByLabel(/email/i).fill(validCustomerData.email);

    await page.getByRole("button", { name: /submit/i }).click();

    const successToast = page.getByText(/successfully added/i);
    await expect(successToast).toBeVisible();
  });

  test("submit button is disabled during submission", async ({ page }) => {
    await page.goto("http://localhost:5173/customers/addcustomer");

    await page.route("http://localhost:5000/customer", async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          id: "123",
          message: "Customer added successfully",
        }),
      });
    });

    await page.getByLabel(/first name/i).fill(validCustomerData.firstName);
    await page.getByLabel(/email/i).fill(validCustomerData.email);

    const submitButton = page.getByRole("button", { name: /submit/i });

    const submissionPromise = page.evaluate(() => {
      return new Promise((resolve) => {
        const form = document.querySelector("form");
        form?.addEventListener("submit", (e) => {
          e.preventDefault();
          resolve(true);
        });
      });
    });

    await submitButton.click();

    await submissionPromise;

    await expect(submitButton).toBeDisabled({ timeout: 1000 });
  });

  test("form submission works with minimal required fields", async ({
    page,
  }) => {
    await page.route("http://localhost:5000/customer", async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 5000));

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          id: "123",
          message: "Customer added successfully",
        }),
      });
    });

    await page.getByLabel(/first name/i).fill(validCustomerData.firstName);
    await page.getByLabel(/email/i).fill(validCustomerData.email);

    const submitButton = page.getByRole("button", { name: /submit/i });

    const submissionPromise = page.waitForResponse(
      "http://localhost:5000/customer"
    );

    await submitButton.click();

    await submissionPromise;

    const successToast = page.getByText(/successfully added/i);
    await expect(successToast).toBeVisible();

    await expect(submitButton).toBeEnabled();
  });
});
