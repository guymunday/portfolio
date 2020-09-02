var plugins = [{
      plugin: require('/Users/Guy/ar1/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Guy/ar1/node_modules/gatsby-plugin-google-fonts-v2/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Inter","variable":true,"weights":["200..900"]}]},
    },{
      plugin: require('/Users/Guy/ar1/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Guy Munday's Portfolio","short_name":"Guy Munday","start_url":"/","background_color":"#17223b","theme_color":"#17223b","display":"minimal-ui","icon":"src/assets/images/guyFavicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"bec1e65911f28df9c0c75b1e38245d31"},
    },{
      plugin: require('/Users/Guy/ar1/node_modules/gatsby-plugin-dark-mode/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Guy/ar1/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Guy/ar1/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-177162678-1"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
