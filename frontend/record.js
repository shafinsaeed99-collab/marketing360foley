import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function record() {
  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    recordVideo: {
      dir: './public/',
      size: { width: 1280, height: 800 }
    }
  });

  console.log("Opening page...");
  const page = await context.newPage();
  
  // Wait for DOM load instead of networkidle
  await page.goto('https://fireworksnation.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  // Wait 4 seconds for stylesheets/images to settle
  await page.waitForTimeout(4000);

  // Add custom styling to hide scrollbars and chats
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.innerHTML = '::-webkit-scrollbar { display: none; }';
    document.head.appendChild(style);
  });

  console.log("Scrolling smoothly...");
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  const steps = 160;
  const stepDelay = 50; // 160 * 50ms = 8000ms (8 seconds)
  const distancePerStep = scrollHeight / steps;

  for (let i = 0; i < steps; i++) {
    await page.evaluate((dist) => window.scrollBy(0, dist), distancePerStep);
    await page.waitForTimeout(stepDelay);
  }

  // Wait 1 second at the bottom
  await page.waitForTimeout(1000);

  console.log("Closing context & browser...");
  await context.close();
  
  // Find the recorded video file and rename it
  const video = page.video();
  if (video) {
    const videoPath = await video.path();
    console.log("Recorded video at:", videoPath);
    
    // Rename to fireworksnation-demo.webm in public folder
    const targetPath = './public/fireworksnation-demo.webm';
    fs.renameSync(videoPath, targetPath);
    console.log("Saved video to:", targetPath);
  }
  await browser.close();
}

record().catch(console.error);
