<template>
    <div class="detailInfoWrp">
        <div class="detailImg">
            <img :src="'/src/img/'+file_name+'.jpg'"></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name : 'gallary_detail',
    data : function() {
        return {
            file_name : '',
        }
    },
    created : function() {
        this.file_name = this.$route.params.file_name;
    },beforeRouteUpdate:function(to, from, next){
        next();
    },
    watch : {
        '$route' : function(to, from) {
            this.file_name = to.params.file_name;
        }
    }
}
</script>

<style>
    .detailInfoWrp {width:100%; background-color:#252525; position:relative; height:500px; text-align:center; margin-bottom:50px}
    .detailInfoWrp .detailImg {position:absolute; top:50%; left:50%; transform: translate(-50%,-50%); max-height:400px; height:80%}
    .detailInfoWrp .detailImg img {height:100%}
</style>
