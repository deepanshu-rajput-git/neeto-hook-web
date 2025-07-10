const { chromium } = require("playwright");

async function testApplication() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  console.log("Testing application...");

  try {
    // Test the main application
    console.log("1. Testing main application at http://localhost:5173");
    await page.goto("http://localhost:5173");

    // Wait for the page to load
    await page.waitForLoadState("networkidle");

    // Check for console errors
    const consoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    // Check for network errors
    const networkErrors = [];
    page.on("response", (response) => {
      if (!response.ok()) {
        networkErrors.push(
          `${response.url()} - ${response.status()} ${response.statusText()}`
        );
      }
    });

    // Wait a bit more for any errors to appear
    await page.waitForTimeout(3000);

    // Test API endpoints
    console.log("2. Testing API endpoints");

    // Test health check
    const healthResponse = await page.request.get(
      "http://localhost:3000/health_check"
    );
    console.log(`Health check status: ${healthResponse.status()}`);

    // Test creating a webhook inbox
    const createResponse = await page.request.post(
      "http://localhost:3000/api/hooks"
    );
    console.log(`Create inbox status: ${createResponse.status()}`);

    if (createResponse.ok()) {
      const inboxData = await createResponse.json();
      console.log("Created inbox:", inboxData);

      // Test getting webhook requests
      const requestsResponse = await page.request.get(
        `http://localhost:3000/api/webhook_inboxes/${inboxData.uuid}/webhook_requests`
      );
      console.log(`Get requests status: ${requestsResponse.status()}`);
    }

    // Test dashboard stats
    const statsResponse = await page.request.get(
      "http://localhost:3000/api/dashboard/stats"
    );
    console.log(`Dashboard stats status: ${statsResponse.status()}`);

    // Report findings
    console.log("\n=== TEST RESULTS ===");

    if (consoleErrors.length > 0) {
      console.log("\n❌ Console Errors:");
      consoleErrors.forEach((error) => console.log(`  - ${error}`));
    } else {
      console.log("\n✅ No console errors found");
    }

    if (networkErrors.length > 0) {
      console.log("\n❌ Network Errors:");
      networkErrors.forEach((error) => console.log(`  - ${error}`));
    } else {
      console.log("\n✅ No network errors found");
    }

    // Check if the main content loaded
    const title = await page.title();
    console.log(`\n📄 Page title: ${title}`);

    // Check for React root element
    const rootElement = await page.$("#root");
    if (rootElement) {
      console.log("✅ React root element found");
    } else {
      console.log("❌ React root element not found");
    }

    // Take a screenshot for visual verification
    await page.screenshot({ path: "test-screenshot.png" });
    console.log("\n📸 Screenshot saved as test-screenshot.png");
  } catch (error) {
    console.error("❌ Test failed:", error);
  } finally {
    await browser.close();
  }
}

testApplication();
