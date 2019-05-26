module.exports = {

  api: function(isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic ? "" : process.env.BASE_URL;
    return {
      baseURL,
      browserBaseURL,
    };
  },
  router: { mode: 'hash' },
  content: [
    [
      "",
      {
        page: "/page",
        permalink: "/:slug",
        isPost: false
      }
    ],

    [
      "it",
      {
        page: "/page",
        permalink: "/:slug",
        isPost: false
      }
    ],
    [
      "outdoor",
      {
        page: "/page",
        permalink: "/:slug",
        isPost: false
      }
    ],
    [
      "travel",
      {
        page: "/page",
        permalink: "/:slug",
        isPost: false
      }
    ],
  ]
};
