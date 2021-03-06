module.exports = {

  api: function(isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic ? "" : process.env.BASE_URL;
    return {
      baseURL,
      browserBaseURL,
    };
  },
  content: [
    [
      "",
      {
        page: "/page/_page",
        permalink: "/:slug",
        isPost: false
      }
    ],

    [
      "it",
      {
        page: "/page/_page",
        permalink: "/:slug",
        isPost: false
      }
    ],
    [
      "outdoor",
      {
        page: "/page/_page",
        permalink: "/:slug",
        isPost: false
      }
    ],
    [
      "travel",
      {
        page: "/page/_page",
        permalink: "/:slug",
        isPost: false
      }
    ],
  ]
};
