<template>
  <div class="main_nav">
    <!--<div v-bind:class="{ 'nav_top': isTop, 'nav_not_top': isNotTop }"></div>-->
    <div class="latest_nav">
      <p>最新記事</p><br>
 <!--     <div v-for="genre in genres">
        <p class="genre_title">{{genre.genre}}</p>
-->
        <ul　class="cp_list">
          <li v-for="post in genres" :key="post.title" class="nav_li">
            <nuxt-link @click.native="toPost(post.meta.section,post.permalink)" class="latest_link" :to="'#'">
              {{post.title}}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:['list_contents'],
  data(){
    return{
        res: '',
        travel: [],
        outdoor: [],
        it: [],
        genres: [],
        //genre: [],
        isTop: false,
        isNotTop: true,

    }
  },
  asyncData: async ({ app, route, payload,store }) => {
    console.log("aaaa")
    if(this.$store.state.blog_contents.length == 0){
      //var contents = app.$content("").get("/")
      store.dispatch('fetchContents',contents);
      store.commit('setBlogContents',contents)
    }
  },
  created: function() {
    console.log(this.list_contents)
//    var temp_list = this.$store.state.blog_contents
    var temp_list = this.list_contents
    if(temp_list.length == 0){
    }else{
      this.setContents(temp_list)
    }

    if(this.$store.state.is_top_page){
      this.isNotTop = false
      this.isTop = true
    }else{
      this.isNotTop = true
      this.isTop = false
    }
  },
  computed: {
/*    contents() {
      console.log("nav_contents")
      return this.$store.state.blog_contents
    },*/
    top_flg() {
      console.log("topflg")
      return this.$store.state.is_top_page
    },
  },
  watch: {
/*    contents(val) {
      console.log("nav_contents_changed")
      //var contents = this.$store.state.blog_contents
      //this.setContents(contents)
    },*/
    top_flg(val) {
      console.log("topflg change")
        if(this.$store.state.is_top_page){
          this.isNotTop = false
          this.isTop = true
        }else{
          this.isNotTop = true
          this.isTop = false
        }
        return this.$store.state.is_top_page
    },

  },

  methods: {
  categoryClear(){
    this.$store.commit('categoryClear')
  },
  toPost(category,link){
    console.log("fgbghg"+category)
    this.$store.commit('setBlogCategory1',category)
    this.$store.commit('setPageContentFlg',true)
    this.$router.push(link);
  },
  setContents(contents){
    console.log("1")
    console.log(contents)
    var temp_list = []
    if(contents.length > 0){
      var genres_tmp = contents
      console.log("4")
/*      genres_tmp.sort(function(a,b){
        console.log("5")
        if(a.date > b.date) return -1;
        if(a.date < b.date) return 1;
      return 0;
      });*/
          console.log("3")

      //console.log(genres_tmp)
      for(var i = 0; i < genres_tmp.length; i++){
        console.log("aa")
        temp_list.push(genres_tmp[i])
      }
    }
        console.log("2")

    for(var i = 0; i < 5; i++){
      this.genres.push(temp_list[i])
    }
  },
},

}
</script>
<style>
.nav_top{
  height: 0px;
}
.nav_not_top{
  height: 108px;
}
.nav_li{
  z-index:1500;
}
.main_nav{
  height: 100%;
  float: right;
  width: 100%;
}
.latest_nav{
  ＃border: 1px solid #3b8070;
  width:100%;
  FLOAT: right;
  overflow: hidden;
}
.genre_title{
  font-weight: 600;
}
ul{
  list-style: none;
  padding-left: 0px;
}
li{
  #padding-left: 0px;
},
ul.cp_list {
  padding-left: 0px;
	padding: 0.5em;
	list-style-type: none;
}
ul.cp_list li {
  padding-left: 0px;
	position: relative;
	padding: 0.5em 1em 0.5em 2.3em;
	margin-bottom:5px;
	border-bottom: 1px solid #8c96a0;
}
ul.cp_list li:after,
ul.cp_list li:before{
	content:'';
	position: absolute;
	border-radius: 50%;
}
ul.cp_list li:before {
	#top: 50%;
	#left: 0.2em;
	#width: 17px;
	#height: 17px;
	#background: rgba(25,118,210, 1);
	#transform: translateY(-50%);
}
ul.cp_list li:after {
	#top: 1.1em;
	#left: 0.7em;
	#width: 14px;
	#height: 14px;
	#background: rgba(25,118,210, 0.5);
}
.latest_link{
  color: black;
  text-decoration: none;
}
</style>