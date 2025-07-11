const puppeteer = require("puppeteer");

async function testApplication() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Listen for console messages
  page.on("console", (msg) => {
    console.log("Browser Console:", msg.type(), msg.text());
  });

  // Listen for page errors
  page.on("pageerror", (error) => {
    console.log("Page Error:", error.message);
  });

  try {
    console.log("Testing Landing Page...");
    await page.goto("http://localhost:5173", { waitUntil: "networkidle2" });
    await page.screenshot({ path: "landing-page.png" });
    console.log("Landing page loaded successfully");

    console.log("Testing Dashboard Page...");
    await page.goto("http://localhost:5173/dashboard", {
      waitUntil: "networkidle2",
    });
    await page.screenshot({ path: "dashboard-page.png" });
    console.log("Dashboard page loaded successfully");

    console.log("Testing Transformations Page...");
    await page.goto("http://localhost:5173/transformations", {
      waitUntil: "networkidle2",
    });
    await page.screenshot({ path: "transformations-page.png" });
    console.log("Transformations page loaded successfully");

    // Test webhook trigger
    console.log("Triggering a test webhook...");
    const response = await fetch(
      "http://localhost:3001/api/hooks/b97acc9e-6510-4dd4-a668-e5d5c06d2faf",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          test: "data",
          timestamp: new Date().toISOString(),
        }),
      }
    );

    if (response.ok) {
      console.log("Webhook triggered successfully!");

      // Get the latest webhook request to navigate to its details
      const webhooksResponse = await fetch(
        "http://localhost:3001/api/hooks/b97acc9e-6510-4dd4-a668-e5d5c06d2faf"
      );
      if (webhooksResponse.ok) {
        const webhooksData = await webhooksResponse.json();
        if (webhooksData.length > 0) {
          const latestWebhook = webhooksData[0];
          console.log("Latest webhook ID:", latestWebhook.id);

          // Navigate to webhook details
          console.log("Testing Webhook Details Page...");
          await page.goto(`http://localhost:5173/hooks/${latestWebhook.id}`, {
            waitUntil: "networkidle2",
          });
          await page.screenshot({ path: "webhook-details-page.png" });
          console.log("Webhook details page loaded successfully");
        }
      }
    } else {
      console.log("Failed to trigger webhook:", response.status);
    }
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await browser.close();
  }
}

testApplication();
