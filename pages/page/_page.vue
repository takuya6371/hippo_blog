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
    console.log(store.state.blog_category1)
    console.log(app)
    console.log(route)
    //console.log("fuck "+app.$content("/pages").get(route.path))
    console.log(app.$content("").get(route.path))
    return {
      page: (await app.$content("").get(route.path)) || payload
      //page: (await app.$content("").get("/")) || payload
    };
  },
  created: function(){
    this.$store.commit('setTopFlg',false)
  },
};
</script>
<style>
</style>