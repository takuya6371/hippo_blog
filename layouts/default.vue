<template>
  <div>
    <globalheader/>
    <div>
      <nuxt/>
    </div>
    <globalfooter/>
  </div>
</template>
<script>
import globalheader from '~/components/globalheader.vue'
import globalfooter from '~/components/globalfooter.vue'
import axios from 'axios'
export default {
  components:{
    globalheader,globalfooter
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
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.content_div{
  width:70%;
  margin-left: 15px;
  height:300px;
  float: left;
}
</style>
