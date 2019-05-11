<template>
  <div class="main_nav">
    <div class="latest_nav">
      <p>最新記事</p><br>
 <!--     <div v-for="genre in genres">
        <p class="genre_title">{{genre.genre}}</p>
-->
        <ul>
          <li v-for="post in genres" :key="post.title">
            <nuxt-link @click.native="toPost(post.meta.section,post.permalink)" class="" :to="'#'">
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
  props:['genre'],
  data(){
    return{
        res: '',
        travel: [],
        outdoor: [],
        it: [],
        genres: [],
    }
  },
  created: function() {
    console.log(this.genre)
    if(this.genre.length > 0){
      var genres_tmp = this.genre
      genres_tmp.sort(function(a,b){
        if(a.date > b.date) return -1;
        if(a.date < b.date) return 1;
      return 0;
      });
      //console.log(genres_tmp)
      for(var i = 0; i < 5; i++){
        this.genres.push(genres_tmp[i])
      }
    }
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
},

}
</script>
<style>
.main_nav{
  float: right;
  width: 25%;
}
.latest_nav{
  border: 1px solid #3b8070;
  width:70%;
  FLOAT: right;
  overflow: hidden;
}
.genre_title{
  font-weight: 600;
}
ul{
  padding-left: 23px;
}
</style>