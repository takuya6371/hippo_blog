module.exports = {
  modules: ["nuxtdown"],
  //mode: 'history',
  env: {
    //base:"",
    //BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    base:"./",
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
