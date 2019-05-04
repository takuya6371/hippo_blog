<template>
  <div>
    <div style="height:117px;"></div>
      <div class="content_div">
        <p class="content_title">{{page.title}}</p><br>
          <nuxtdown-body class="body" :body="page.body"/>
      </div>
    </div>
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
  asyncData: async ({ app, route, payload,store }) => {
    console.log(route)
    //console.log("fuck "+app.$content("/pages").get(route.path))
    return {
      page: (await app.$content(store.state.blog_category1).get(route.path)) || payload
    };
  }
};
</script>
<style>
</style>