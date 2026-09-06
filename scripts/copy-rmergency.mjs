import fs from 'node:fs';
import path from 'node:path';
import { R_MERGENCY_MODULES, getRmergencyUrls } from './rmergency-urls.mjs';

const srcDir = path.resolve('R-mergency/dist');
const destDir = path.resolve('dist/r-mergency');

if (!fs.existsSync(srcDir)) {
  console.warn('[R-mergency] Warning: R-mergency/dist does not exist, skipping static copy.');
  process.exit(0);
}

fs.mkdirSync(destDir, { recursive: true });
fs.cpSync(srcDir, destDir, { recursive: true });
console.log('[R-mergency] Successfully copied submodule build to dist/r-mergency/');

// Read the base HTML template
const templatePath = path.join(destDir, 'index.html');
let baseHtml = fs.readFileSync(templatePath, 'utf8');

// Ensure base href is set so nested routes resolve /r-mergency/ assets correctly
if (!baseHtml.includes('<base href=')) {
  baseHtml = baseHtml.replace('<head>', '<head>\n    <base href="/r-mergency/">');
  fs.writeFileSync(templatePath, baseHtml);
}

// Generate static HTML pages for all languages, drills, cheatsheets, and modules
let generatedCount = 0;

function createStaticRoute(subPath, pageTitle, pageDesc) {
  const targetDir = path.join(destDir, subPath);
  fs.mkdirSync(targetDir, { recursive: true });

  let pageHtml = baseHtml;
  if (pageTitle) {
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`);
  }
  if (pageDesc) {
    pageHtml = pageHtml.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${pageDesc}" />`);
  }

  fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml);
  generatedCount++;
}

for (const group of R_MERGENCY_MODULES) {
  // Language syllabus root: /r-mergency/<lang>/
  createStaticRoute(
    group.lang,
    `${group.name} Emergency Cram Kit // R-mergency`,
    `Comprehensive high-yield exam syllabus, cheat sheets, and trap questions for ${group.name}.`
  );

  // Drill view: /r-mergency/<lang>/drill/
  createStaticRoute(
    `${group.lang}/drill`,
    `${group.name} Gotcha Drill // R-mergency`,
    `Interactive practice drill testing professor traps and exam edge cases in ${group.name}.`
  );

  // Cram sheet view: /r-mergency/<lang>/cram/
  createStaticRoute(
    `${group.lang}/cram`,
    `${group.name} 1-Page Exam Cheat Sheet // R-mergency`,
    `Print-ready 1-page emergency cheat sheet and syntax reference for ${group.name}.`
  );

  // Each module: /r-mergency/<lang>/<modId>/
  for (const mod of group.modules) {
    createStaticRoute(
      `${group.lang}/${mod.id}`,
      `${mod.title} (${group.name}) // R-mergency`,
      `Exam review module: ${mod.title} for ${group.name} university examinations.`
    );
  }
}

console.log(`[R-mergency] Generated ${generatedCount} static HTML entrypoints across all languages and modules.`);

// Generate standalone r-mergency sitemap.xml
const rmergencyUrls = getRmergencyUrls('https://funtohard.github.io');
const rmergencySitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rmergencyUrls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(destDir, 'sitemap.xml'), rmergencySitemapXml);
console.log(`[R-mergency] Generated dist/r-mergency/sitemap.xml with ${rmergencyUrls.length} URLs.`);

// Ensure root sitemap-index.xml includes r-mergency/sitemap.xml if sitemap-index exists
const sitemapIndexPath = path.resolve('dist/sitemap-index.xml');
if (fs.existsSync(sitemapIndexPath)) {
  let sitemapIndexContent = fs.readFileSync(sitemapIndexPath, 'utf8');
  if (!sitemapIndexContent.includes('/r-mergency/sitemap.xml')) {
    sitemapIndexContent = sitemapIndexContent.replace(
      '</sitemapindex>',
      '  <sitemap><loc>https://funtohard.github.io/r-mergency/sitemap.xml</loc></sitemap>\n</sitemapindex>'
    );
    fs.writeFileSync(sitemapIndexPath, sitemapIndexContent);
    console.log('[R-mergency] Appended r-mergency/sitemap.xml to dist/sitemap-index.xml.');
  }
}
