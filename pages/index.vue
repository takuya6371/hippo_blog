<template>
  <section class="main">
<!--
    <div class="main_imgBox">
      <div class="main_img main_img_1" style=""></div>
      <div class="main_img main_img_2" style=""></div>
      <div class="main_img main_img_3" style=""></div>
      <div class="main_img main_img_4" style=""></div>
      <div class="main_img main_img_5" style=""></div>
      <div class="main_img main_img_6" style=""></div>
    </div>
    <div class="title_text_dev">
      <p class="main_text title_text">East Tibet<br>Yaqing</p>
      <p class="main_text title_text">Namibia<br>Rupara combined school</p>
      <p class="main_text title_text">Phillipine<br>Bacolod</p>
      <p class="main_text title_text">Nepal<br>Machhapuchhre</p>
      <p class="main_text title_text">Tanzania<br>Kilimanjaro</p>
      <p class="main_text title_text">Lebanon<br>Baalbek</p>
    </div>
-->
    <div class="content_div">
      <p class="top_title">このブログについて</p>
      <p>Nuxt × netlifyで作っています。旅の写真やitの勉強内容を残していきます。このサイトもフロントエンドの勉強がてら作りました。</p>
    </div>
    <div class="nav_space">
      <globalnav v-bind="{'list_contents': list_contents}"/>
    </div>
  </section>
</template>

<script>
import globalnav from '~/components/globalnav.vue'
//import axios from 'axios'
export default{
  //props:['app'],
  components:{
    globalnav
  },
  data(){
    return{
        res: '',
        contents: [],
        genre: [],
        //app: '',
        list_contents: ''

    }
  },
  created: function() {
    this.$store.commit('setTopFlg',true)
    this.$store.commit('setTopPicFlg',true)
    console.log("indexxxx")
    console.log(this.$store.state.blog_contents.length)
  },
  /*
  fetch: async ({ app, route,store }) => {
    console.log(store.state.blog_contents.length)
    console.log("index")
    if(store.state.blog_contents.length == 0){
      var contents = await app.$content("").get("/")
      store.dispatch('fetchContents',contents);
      store.commit('setBlogContents',contents)
    }
    return{
      list_contents: store.state.blog_contents
    };

  },*/
  asyncData: async ({ app, route,store }) => {
    console.log("anc")
    if(store.state.blog_contents.length == 0){
      var contents = await app.$content("").get("/")
      console.log(contents)
      store.dispatch('fetchContents',contents);
      store.commit('setBlogContents',contents)
    }
    return{
      list_contents: store.state.blog_contents
    };

  },
}
</script>
<style>


</style>