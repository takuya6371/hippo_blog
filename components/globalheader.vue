<template>
  <div class="main-header">
    <table class="header_table">
    <tbody>
    <tr>
    <td class="header_title">
    </td>
    <td class="header_list">
    <ul>
      <li><nuxt-link @click.native="categoryClear()" class="header_list" to="/">Home</nuxt-link></li>
      <li><nuxt-link @click.native="setCategry('travel')" class="header_list" :to="{'path':'/id/list', 'query':{'id':'travel'}}">Travel</nuxt-link></li>
      <li><nuxt-link @click.native="setCategry('outdoor')" class="header_list" :to="{'path':'/id/list', 'query':{'id':'outdoor'}}">Outdoor</nuxt-link></li>
      <li><nuxt-link @click.native="setCategry('it')" class="header_list" :to="{'path':'/id/list', 'query':{'id':'it'}}">IT</nuxt-link></li>
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
<style scoped>
a.header_list{
  color:#ffffff !important;
}
.title{
  font-size:20px;
  color:white;
  text-align:center;
  width:100%;
}
.header_table{
  width:100%;
  height: 80px;
  position: fixed;
  background-color: rgba(0,0,0,0.4);
  z-index: 1000;
}
.header_title{
  width:30%;
}
td.header_list{
  width:1%;
  border-bottom: 1px dotted #575a5d;
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