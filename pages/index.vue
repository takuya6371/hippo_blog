<template>
  <section class="main">
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
    <div class="content_div">
      <p class="top_title">このブログについて</p>
      <p>Nuxt × netlifyで作っています。旅の写真やitの勉強内容を残していきます。このサイトもフロントエンドの勉強がてら作りました。</p>
    </div>
    <div>
      <globalnav v-bind="{'genre': genre}"/>
    </div>
  </section>
</template>

<script>
import globalnav from '~/components/globalnav.vue'
import axios from 'axios'
export default{
  components:{
    globalnav
  },
  data(){
    return{
        res: '',
        contents: [],
        genre: 'default',
    }
  },
  created: function() {
    this.$store.commit('setTopFlg',true)
    console.log(this.$route)
    console.log(this.contents)
  },
  asyncData: async ({ app, route }) => {

    return{
      genre: (await app.$content("").get("/"))
    };
    /*var genres = []
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
      };*/
    /*}.bind(this)).catch(function(err) {
      console.log(err);
    }.bind(this));*/
  },
}
</script>
<style>
.top_title{
  text-align:center;
  font-size:23px;
}
.container{
  width: 75% !important;
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

.main_imgBox {
    height: 680px;
    overflow: hidden;
    position: relative; 
}
.main_imgBox::before {
  z-index:991;
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: ' ';
}
 .main_img {
    z-index:10;
    opacity: 0;
    width: 100%;
    height: 680px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: anime 36s 0s infinite;
    animation: anime 36s 0s infinite; 
}

 .main_text {
    z-index:11;
    opacity: 0;
    width: 100%;
    height: 680px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: anime_text 36s 0s infinite;
    animation: anime_text 36s 0s infinite; 
}
.main_img_1 {
    background-image: url('./title_tibet.jpg');

}
.main_img_2 {
    background-image: url('./title_namibia.jpg');

}
 .main_img_3 {
    background-image: url('./title_philippines.jpg');

}
.main_img_4 {
    background-image: url('./title_nepal.jpg');

}
.main_img_5 {
    background-image: url('./title_kilimanjaro.jpg');

}
.main_img_6 {
    background-image: url('./title_lebanon.jpg');

}

.main_text:nth-of-type(2), .main_img:nth-of-type(2) {
    -webkit-animation-delay: 6s;
    animation-delay: 6s; 
}
.main_text:nth-of-type(3), .main_img:nth-of-type(3) {
    -webkit-animation-delay: 12s;
    animation-delay: 12s; 
}
.main_text:nth-of-type(4), .main_img:nth-of-type(4) {
  -webkit-animation-delay: 18s;
  animation-delay: 18s; 
}
.main_text:nth-of-type(5), .main_img:nth-of-type(5) {
  -webkit-animation-delay: 24s;
  animation-delay: 24s; 
}
.main_text:nth-of-type(6), .main_img:nth-of-type(6) {
  -webkit-animation-delay: 30s;
  animation-delay: 30s; 
}
@keyframes anime {
  0% {
        opacity: 0;
    }
    8% {
        opacity: 1;
    }
    17% {
        opacity: 1;
    }
    25% {
        opacity: 0;
        transform: scale(1.2) ;
         z-index:9;
    }
    100% { opacity: 0 }
}
@keyframes anime_text { /*「fadeIn」と名前をそろえる*/
    0% {opacity: 0;transform: translate3d(0,20px,0);}
    10% {opacity: 1;transform: translate3d(0,0,0);}
    100% {opacity: 1;z-index:1;transform: translate3d(0,0,0);}
}

/*旧 Safari 用のベンダー処理*/
@-webkit-keyframes anime_text {
    0% {opacity: 0}
    10% {opacity: 1}
    100% {opacity: 1}
}
.header_table{
  width:100%;
  height: 80px;
  position: fixed;
  background-color: rgba(0,0,0,0.6);
  z-index: 1000;
}
.header_title{
  width:30%;
}
.header_img{
height: 500px;
width: 100%;
z-index: 990;
transition-duration: 5s; /*変化の時間*/
}
.header_img_div{
  position: relative;
  z-index: 991;
}
.header_img_div::before{
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: ' ';
}

</style>