<template>
  <div class="main_nav">
    <div class="latest_nav">
      <p>最新記事</p><br>
 <!--     <div v-for="genre in genres">
        <p class="genre_title">{{genre.genre}}</p>
-->
        <ul　class="cp_list">
          <li v-for="post in genres" :key="post.title">
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
  //props:['genre'],
  data(){
    return{
        res: '',
        travel: [],
        outdoor: [],
        it: [],
        genres: [],
        //genre: [],
    }
  },
  created: async function() {
    var temp_list = this.$store.state.blog_contents
    if(temp_list.length == 0){
        //contents = await app.$content("").get("/")
        //store.commit('setBlogContents',contents)
    }else{
      this.setContents(temp_list)
    }
  },
  computed: {
    contents() {
      console.log("nav_contents")
      return this.$store.state.blog_contents
    },
  },
  watch: {
    contents(val) {
      console.log("nav_contents_changed")
      var contents = this.$store.state.blog_contents
      this.setContents(contents)
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
    for(var i = 0; i < 5; i++){
      this.genres.push(contents[i])
    }
  },
},

}
</script>
<style>
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