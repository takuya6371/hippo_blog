module.exports = {
  api: function(isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic ? "/" : process.env.BASE_URL;
    //const browserBaseURL = !isStatic ? "" : "~/";
    console.log("ddd"+isStatic+"  "+browserBaseURL)
    //const baseDir = process.env.BASE_DIR || ''
    return {
      baseURL,
      browserBaseURL
      
    };
  },
  //base: "~/",
  routes: [
    //{base: ''},
		{
			path: "/",
			name: "index"
		},
		{
			path: "/:list",
			name: "list"
    }
  ],
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
