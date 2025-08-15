import puppeteer from "puppeteer";

async function toggleTidal() {
  const browser = await puppeteer.launch({ headless: false });
  const pages = await browser.pages();

  // Find an open tidal tab
  let tidalPage = pages.find((p) => p.url().includes("listen.tidal.com"));

  // Or open it if not already
  if (!tidalPage) {
    tidalPage = await browser.newPage();
    await tidalPage.goto("https://listen.tidal.com");
  }

  // Execute play/pause button click
  await tidalPage.evaluate(() => {
    const button = document.querySelector('[data-test="play-pause-button"]') as HTMLElement;
    if (button) button.click();
  });
}

toggleTidal();
