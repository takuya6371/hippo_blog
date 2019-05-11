module.exports = {
  api: function(isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic ? "" : process.env.BASE_URL;
    return {
      baseURL,
      browserBaseURL
      
    };
  },
  /*
  routes: [
		{
			path: "/",
			name: "index"
		},
		{
			path: "_id/list",
			name: "list"
    }
  ],*/
  content: [
    [
      "it",
      {
        page: "/list/_list",
        permalink: "/:slug",
        isPost: false
      }
    ],
    [
      "outdoor",
      {
        page: "/list/_list",
        permalink: "/:slug",
        isPost: false
      }
    ],
    [
      "travel",
      {
        page: "/list/_list",
        permalink: "/:slug",
        isPost: false
      }
    ],
    [
      "",
      {
        page: "/page/_page",
        permalink: "/:slug",
        isPost: false
      }
    ],
  ]
};
