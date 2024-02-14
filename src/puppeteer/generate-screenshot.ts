import puppeteer, { ScreenshotOptions } from 'puppeteer';


/**
 * Generates a screenshot of the provided HTML content using Puppeteer.
 * @param html The HTML content to generate the screenshot from.
 * @returns A Promise that resolves when the screenshot is generated.
 */
export async function generateScreenshot(html: string): Promise<void> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.setViewport({ height:1920, width:1080 })

    // Set your HTML content
    await page.setContent(html, {
        waitUntil: 'networkidle0' // ensure that the page is fully loaded
    });

    // Define screenshot options
    const screenshotOptions: ScreenshotOptions = {
        path: 'screenshot.png', // Path to save the screenshot
        fullPage: true // Capture the full page
    };

    // Take a screenshot
    await page.screenshot(screenshotOptions);

    // Close the browser
    await browser.close();
}
