<template>
  <div>
    <div style="height:117px;"></div>
      <div class="content_div" v-if="cnotent_show">
        <p class="content_title">{{page_title}}</p><br>
          <nuxtdown-body class="body" :body="page_body"/>
      </div>


      <div class="starter-template" v-else>
          <p class="content_title">記事リスト</p>
          <div class="card-deck">    
              <div style="width: 215px; border: 1px solid rgba(0,0,0,.125);margin: 8px;" class="" v-for="post in page" :key="post.title">
              <nuxt-link class="header_list" v-bind:to="post.permalink">
                  <div class="card-body">
                      <img style="height: 100px;" class="card-img-top" :src="`${post.thumbnail}`">
                      <h5 class="card-title" style="font-size: 30px;">{{post.title}}</h5>
                      <div class="title_body">
                          <nuxtdown-body max="３" class="body" :body="post.body"/>
                      </div>
                  </div>
              </nuxt-link>
              </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        cnotent_show: false,
        //page_body: '',
        //page_title: '',
        app: '',
    }
},
  head: function() {
    return {
      //title: `${this.page.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
        //  content: this.page.description
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload,store }) => {
    console.log(store.state.blog_category1)
    console.log(store.state.content_show_flg)
    console.log(app)
    console.log(route)
    console.log(app.$content("").get(route.path))
    var content_path;
    if (store.state.content_show_flg ){
      var content = await app.$content("").get(route.path)
      console.log(content)
      content_path = '/'
      return {
        page_body: content.body,
        page_title: content.title,
        cnotent_show: true,
        app: app
      };
    }else{
      content_path = route.path
      var content = await app.$content("").get("/")
      return {
        page: content || payload,
        cnotent_show: store.state.content_show_flg,
        app: app,
        cnotent_show: false,
        //page: (await app.$content("").get("/")) || payload
      };
    }
  },
  created: function(){
    this.$store.commit('setTopFlg',false)
  },
  methods: {
    async setContent(permapath){
      this.page_body = app.$content("").get(permapath)
      this.page_body = ''
    },
  },
};
</script>
<style>
.header_list{
    color:black;
    text-decoration: none;
}
.title_body{
    text-align: left;
    height: 36px;
    color: #a9a9a9;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
}
.starter-template {
    padding: 0.5rem;
    text-align: center;
}
.img {
    height : 80px;
    weight : 20px;
}
.card-deck{
    flex-wrap: wrap;
    width: 100%;
    display: flex;
}

</style>