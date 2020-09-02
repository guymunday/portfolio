module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Guy Munday's Portfolio","short_name":"Guy Munday","start_url":"/","background_color":"#17223b","theme_color":"#17223b","display":"minimal-ui","icon":"src/assets/images/guyFavicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"bec1e65911f28df9c0c75b1e38245d31"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-177162678-1"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
