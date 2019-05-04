<template>
  <div>
  <div style="height:117px;"></div>
  <p>vdg</p>
    <nuxtdown-body class="body" :body="page.body"/>
  </div>
</template>

<script>
export default {
  head: function() {
    return {
      title: `${this.page.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload }) => {
    console.log(route)
    //console.log("fuck "+app.$content("/pages").get(route.path))
    return {
      page: (await app.$content("/travel").get(route.path)) || payload
    };
  }
};
</script>
