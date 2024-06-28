import { test, expect, Page } from "@playwright/test";
import path from "path";

// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });

const uploadFile = async (page: Page) => {
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.getByText("Drag 'n' drop some files here").click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(path.join("./src/markers.json"));
};

test("upload file", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await uploadFile(page);
  await page.getByAltText("marker0").click();
  await expect(page.getByText("Marker Located at: 30, 30")).toBeVisible();
});

test("mui", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByTestId("textfield").fill("10");
  await expect(page.getByTestId("typography")).toHaveText("100");
});
