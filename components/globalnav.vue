<template>
  <div class="main_nav">
    <div class="latest_nav">
      <p>最新記事</p><br>
      <div v-for="genre in genres">
        <p class="genre_title">{{genre.genre}}</p>
        <ul>
          <li v-for="post in genre.body" :key="post.title">
            <nuxt-link @click.native="setCategry(genre.genre)" class="" :to="post.permalink">
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
    axios.get(this.$store.state.blog_url).then((res1) => {
      var data = res1
      console.log(data.data['content-endpoints'])
      var genres_tmp = data.data['content-endpoints']
      genres_tmp.forEach(res => {
        var data_tmp = []
        var data_genre_tmp = []
        if(res != '/pages'){
          data_tmp.genre = res.slice(1)
          axios.get(this.$store.state.blog_url+res.slice(1)).then((res2) => {
            console.log(res2.data)
            res2.data.forEach(function(res,num) {
              if(num < 3){
                data_genre_tmp.push(res)
              }
            })
            data_tmp.body = data_genre_tmp
            this.genres.push(data_tmp)
          })
          //this.genres.push(res.slice(1))
        }
      });
      console.log(this.genres)
      //this.genres = data.data['content-endpoints'].slice(1)

    })
  },
  methods: {
  categoryClear(){
    this.$store.commit('categoryClear')
  },
  setCategry(category){
    this.$store.commit('setBlogCategory1',category)
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