const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Guy/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Guy/portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/Guy/portfolio/src/pages/about.js"))),
  "component---src-pages-ana-js": hot(preferDefault(require("/Users/Guy/portfolio/src/pages/ana.js"))),
  "component---src-pages-human-js": hot(preferDefault(require("/Users/Guy/portfolio/src/pages/human.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Guy/portfolio/src/pages/index.js"))),
  "component---src-pages-kemosabe-js": hot(preferDefault(require("/Users/Guy/portfolio/src/pages/kemosabe.js"))),
  "component---src-pages-notonlybutalso-js": hot(preferDefault(require("/Users/Guy/portfolio/src/pages/notonlybutalso.js"))),
  "component---src-pages-playground-js": hot(preferDefault(require("/Users/Guy/portfolio/src/pages/playground.js")))
}

