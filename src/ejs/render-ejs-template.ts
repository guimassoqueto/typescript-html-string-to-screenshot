import ejs from 'ejs';
import path from 'path';

// Define the path to the EJS template
const _templatePath = path.join(__dirname, 'template.ejs');

type TemplateData = {
    name: string;
};

/**
 * Renders an EJS template with the provided data.
 *
 * @param data - The data to be passed to the EJS template.
 * @param templatePath - The path to the EJS template file. Defaults to _templatePath.
 * @returns A Promise that resolves to the rendered HTML string.
 */
export async function renderEJSTemplate(data: TemplateData, templatePath: string = _templatePath) {
    try {
        const html = await ejs.renderFile(templatePath, data);
        return html;
    } catch (err) {
        return `<!DOCTYPE html><html lang=\"en\"><title>Error Page</title></head><body><h1>Error found</h1><code>${err}</code></body></html>`;
    }
}

