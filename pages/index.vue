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
    <!--
    <div class="nav_space">
      <globalnav v-bind="{'genre': genre}"/>
    </div>
    -->
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
    }
  },
  created: function() {
    this.$store.commit('setTopFlg',true)
    this.$store.commit('setTopPicFlg',true)
    //console.log(this.app)
    //console.log(this.contents)
    //this.genre = this.app.$content("").get("/")
  },
  fetch: async ({ app, route,store }) => {
    console.log(store.state.blog_contents.length)
    if(store.state.blog_contents.length == 0){
      var contents = await app.$content("").get("/")
      //store.dispatch('fetchContents',contents);
      store.commit('setBlogContents',contents)
    }


    /*
    var genres = []
    console.log(app)
    console.log(route)
    app.$content("").get("/").then(function(res1) {

      var data = res1
      //console.log(data)
      //console.log(data.data)
      var genres_tmp = data
      genres_tmp.sort(function(a,b){
        if(a.date > b.date) return -1;
        if(a.date < b.date) return 1;
      return 0;
      });
      //console.log(genres_tmp)
      for(var i = 0; i < 5; i++){
        genres.push(genres_tmp[i])
      }

      console.log(genres)
      this.genres = genres
      return{
        genre: genres
      };
      */
    /*
    }.bind(this)).catch(function(err) {
      console.log(err);
    }.bind(this));
    */


  },
}
</script>
<style>
.nav_space{
  float: right;
  width: 250px;
  #background-color: #f3f3f3;
  height: 630px;
},
.top_title{
  text-align:center;
  font-size:23px;
}
.container{
  width: 100% !important;
  margin-left: 10px;
}
.title_text_dev{
  top: 50%;
  height: 50%;
  width: 100%;
  position: absolute;
  text-align: center;
  overflow: hidden;
}

.title_text {
    color: white;
    font-size: 45px;
    font-weight: 600;
}

</style>