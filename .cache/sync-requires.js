
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/kdan80/Projects/portfolio/v2/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/home/kdan80/Projects/portfolio/v2/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/home/kdan80/Projects/portfolio/v2/src/pages/index.tsx"))
}

