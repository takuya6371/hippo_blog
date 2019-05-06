<template>
  <div class="main_footer">
    <div class="profile_dev">
      <table>
      <tbody>
        <tr>
          <td>
            <p>Profile</p>
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            <img class="profile_img" src="./profile.jpg">
          </td>
          <td class="profile_comment">
            <p>エンジニア、バックパッカー、野生児</p>
            <p>数年周期で海外滞在もしくは旅行、日本で仕事を繰り返している。アフリカのカバのいる村で２年暮らしていたのでカバ大好き。</p>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>
<style>
.main_footer{
  margin-top: 30px;
  height:100px;
}
.profile_img{
  height:90px;
  width:150px;
}
.profile_dev{
  #border: 1px solid rgba(0, 0, 0, 0.125);
  width:600px
}
.profile_comment{
  vertical-align: top;
}
</style>