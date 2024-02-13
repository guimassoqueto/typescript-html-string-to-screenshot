import { renderEJSTemplate } from "./ejs/render-ejs-template";
import { generateScreenshot } from "./puppeteer/generate-screenshot";

(async() => {
    const html = await renderEJSTemplate({ name: "Guilherme" });
    await generateScreenshot(html);
})()
