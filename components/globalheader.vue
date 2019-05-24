<template>
  <div class="main-header">
    <table v-bind:class="{ 'header_table_top': isTop, 'header_table_not_top': isNotTop }" class="header_table" v-scroll="handleScroll">
    <tbody>
    <tr>
    <td class="header_title">
    </td>
    <td class="header_list">
    <ul>
    <!--
      <li><nuxt-link @click.native="categoryClear()" class="header_list" :to="/">Home</nuxt-link></li>
      <li><nuxt-link @click.native="setCategry('travel')" class="header_list" :to="{'path':'/', 'query':{'id':'travel'}}">Travel</nuxt-link></li>
      <li><nuxt-link @click.native="setCategry('outdoor')" class="header_list" :to="{'path':'/list/outdoor', 'query':{'id':'outdoor'}}">Outdoor</nuxt-link></li>
      <li><nuxt-link @click.native="setCategry('it')" class="header_list" :to="{'path':'/list/it', 'query':{'id':'it'}}">IT</nuxt-link></li>
      -->
      <li><nuxt-link @click.native="categoryClear()" class="header_list" :to="'#'">Home</nuxt-link></li>
      <li><nuxt-link @click.native="" class="header_list" :to="{'path':'/travel'}">Travel</nuxt-link></li>
      <li><nuxt-link @click.native="" class="header_list" :to="{'path':'/outdoor'}">Outdoor</nuxt-link></li>
      <li><nuxt-link @click.native="" class="header_list" :to="{'path':'/it'}">IT</nuxt-link></li>
    </ul>
    </td>
    </tr>
    <tr style="height:70px;">
     <td colspan="2">
      <p class="title">バックバッカー × エンジニアが気軽に書残すブログ</p>
     </td>
    </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isTop: true,
      isNotTop: false,
      query_it: 'it',
    }
  },

  created: function() {
    console.log("header")
    this.$store.commit('setTopFlg',false)
    this.isTop = false
    this.isNotTop = true
  },

  computed: {
      top_flg() {
        console.log("topflg")
        return this.$store.state.is_top_page
      },
  },
  watch: {
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
      this.$forceUpdate();
      this.$router.push("/");
    },
    async setCategry(category){
      this.$store.commit('setBlogCategory1',category)
      this.$store.commit('setPageContentFlg',category)
      this.$store.commit('setPageContentFlg',false)
      this.$router.push({'path':'/list', 'query':{category}});
      //this.$router.push("list");
    },
    handleScroll: function(evt, el) {
      //console.log(window.scrollY);
      if(this.$store.state.is_top_page){
        if (window.scrollY  == 0) {
          this.isNotTop = false
          this.isTop = true
        }
        if (window.scrollY > 30) {
          this.isNotTop = true
          this.isTop = false
        }
      }
      //return window.scrollY > 100;
    },
  },
}
</script>
<style scoped>
a.header_list{
  color:#ffffff !important;
  text-decoration: none;
  font-family: Verdana;
}
.title{
  font-size:20px;
  color:white;
  text-align:center;
  width:100%;
  font-family: Verdana;
}
.header_table_{
  width:100%;
  height: 80px;
  position: fixed;
  #background-color: rgba(0,0,0,0.4);
  z-index: 1000;
}
.header_table_top{
  background-color: rgba(0,0,0,0.4);
}
.header_table_not_top{
  background-color: rgba(0,0,0,0.9);
}
.header_title{
  width:30%;
}
td.header_list{
  width:1%;
  #border-bottom: 1px dotted #575a5d;
}

.main-header {
  #position: absolute;
  width: 100%;
  
}
ul {
  #border:4px solid black;
  #list-style: none;
  #height: 100%;
  display: flex;
  #justify-content: flex-end;
  width: 100%;

}

li {
  width: 140px;
  #cursor: pointer;
  transition: all .3s;
  #height: 100%;
  display: inline-block;
  padding: 5px 3px;
  font-size: 19px;
  line-height: 100%;
  text-transform: uppercase;
  font-family: Apercu-Bold, Arial, Helvetica, sans-serif;
  font-weight: 800;
  color:white;
  text-align: center;
}

li:hover {
  -webkit-transform: translate3d(0, -3px, 0);
  transform: translate3d(0, -3px, 0)
}

.link {
  #height: 100%;
  #display: block;
  #display: flex;
  #align-items: center;
  #justify-content: center;
}

</style>