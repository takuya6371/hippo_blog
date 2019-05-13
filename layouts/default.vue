<template>
  <div>
    <globalheader/>
    <div v-if="top_pic_flg">
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
      </div>
    <div>
      <nuxt/>
    </div>
    <div class="nav_space">
      <globalnav/>
    </div>
    <div style="height:200px;"></div>
    <globalfooter/>
  </div>
</template>
<script>
import globalheader from '~/components/globalheader.vue'
import globalfooter from '~/components/globalfooter.vue'
import globalnav from '~/components/globalnav.vue'
export default {
  components:{
    globalheader,globalfooter,globalnav
  },
  data(){
    return{
      top_pic_flg: false,
    }
  },
  created: function() {
    console.log("ssss")
    this.$store.commit('setTopFlg',false)
    //console.log(this.contents)
  },

  computed: {
      pic_flg() {
        this.top_pic_flg = this.$store.state.is_top_pic_flg
        console.log("wwww"+this.$store.state.is_top_pic_flg)
        return this.$store.state.is_top_pic_flg
      },
  },
  watch: {
      pic_flg(val) {
          if(this.$store.state.is_top_pic_flg){
            this.top_pic_flg = true
          }else{
            this.top_pic_flg = false
          }
        console.log("44444")
        return this.$store.state.is_top_pic_flg
      },
  },

}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.content_title{
  text-align: center;
  font-size: 35px;
  font-weight: 600;
}
.nav_dev{
  #border: 1px solid rgba(0, 0, 0, 0.125);
  float: right;
  height:300px;
  margin-top:110px;
}
.latest_nav{
  ＃border: 1px solid rgba(0, 0, 0, 0.125);
}
.content_div{
  width:70%;
  margin-left: 15px;
  #height:300px;
  float: left;
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
