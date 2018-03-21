<template>
  <div>
      <h1>gallary</h1>
      <router-view></router-view>
      <ul :class="{detailOpen:detail_open}" class="detailList">
          <li v-for="s in imgSrc" :key="s">
              <router-link v-bind:to="{ name:'gallay_detail', params:{ file_name:s.split('/')[1].split('.')[0] } }"><img :src="'/src/'+s" alt="" border="0"></router-link>
          </li>
      </ul>
  </div>
</template>
<script>
import inGallay from '../imgSrc';

export default {
  name : "gallary",
  data : function() {
        return {
            imgSrc : inGallay,
            detail_open:false
        }
    },
  created : function() {
      //this.text = this.$route.params.text;
  }
}
</script>

<style>
    .detailList {overflow:hidden; padding:0 30px}
    .detailList li {float:left; height:80px; margin-right:15px}
    .detailList li img {height:100%}
</style>