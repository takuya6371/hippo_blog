process.traceDeprecation = true;
var path = require('path');
var glob = require('glob');
var dynamicRoutes = getDynamicPaths({
  '/': '/*.md'
});
module.exports = {
  modules: ["nuxtdown"],
  env: {
    base:"",
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    //BASE_URL: ''
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: "Hippo Blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Welcome to my website."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "./favicon.ico" }]
  },
  plugins: [
    '~plugins/scroll.js'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#FFBB43" },
  /*
  ** Build configuration
  */
  generate: {
    routes: dynamicRoutes
  },
  build: {
    /*
    ** Run ESLint on save
    */
   vendor: ['axios'],
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
    })
  );
}
