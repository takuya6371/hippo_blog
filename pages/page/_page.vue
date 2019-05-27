<template>
  <div>
    <div style="height:110px;"></div>
      <div class="content_div" v-if="content_mode === 'content'">
        <p class="content_title">{{page.title}}</p><br>
          <nuxtdown-body class="body" :body="page.body"/>
      </div>

      <div class="starter-template" v-if="content_mode === 'list'">
        <p class="content_title">記事リスト</p>
        <div class="card-deck">    
            <div style="width: 180px; border: 1px solid rgba(0,0,0,.125);margin: 8px;" class="" v-for="post in page" :key="post.title">
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
    <div class="nav_space">
      <globalnav v-bind="{'list_contents': list_contents}"/>
    </div>
  </div>
</template>

<script>
import globalnav from '~/components/globalnav.vue'
export default {
  components:{
      globalnav
  },
  data(){
    return{
        cnotent_show: false,
        page_body: '',
        page_title: '',
        content_mode: '',
        list_contents: '',
        page: '',
    }
},
  head: function() {
    console.log(this.page_body)
    console.log(this.$route.params.slug)
    console.log(this.page)
    let head_page = this.$route.params.slug
    if(this.page == ""){
      this.$router.push("/")
      //this.$router.push("/"+this.$route.params.slug)
    }
    return {
      //title: `${this.page.title}`,
      title: this.$route.params.slug,
      meta: [
        {
          hid: "description",
          name: "description",
          //content: this.page.description
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload,store }) => {
    let mode
    let page_data
    console.log("page come")
    console.log(app)
    console.log(route)
    console.log(route.params.slug)
    var content_path;
    console.log(process.env.BASE_URL)
    if(route.params.slug == "outdoor" || route.params.slug == "it" || route.params.slug == "travel"){
      mode = "list"
      if(process.env.BASE_URL == 'http://localhost:3000'){
        page_data = await app.$content("").get("")
      }else{
        page_data = await app.$content(route.params.slug).get("_all")
      }
    }else{
      //console.log("cont")
      mode = "content"
      page_data = await app.$content("").get(route.params.slug)
    }
    let list_contents
    if(process.env.BASE_URL == 'http://localhost:3000'){
      list_contents = await app.$content("").get("")
    }else{
      list_contents = await app.$content("").get("_all")
    }
    list_contents.sort(function(a,b){
      if(a.date > b.date) return -1;
      if(a.date < b.date) return 1;
      return 0;
    });

    store.dispatch('fetchContents',list_contents);
    store.commit('setBlogContents',list_contents)
      return {
        content_mode: mode,
        page:page_data,
        list_contents: list_contents
     };
  },
  created: function(){
    this.$store.commit('setTopFlg',false)
    //this.$store.commit('setTopPicFlg',false)
  },
  methods: {

    
  },
};
</script>
<style>
img{
    width: 50%;
    height: 250px;
}
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
    float: left;
    width: 70%;
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