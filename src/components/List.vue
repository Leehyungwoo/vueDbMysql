<template>
  <div class="hello">
   <ul>
     <li v-for="(c,index) in List" :key="index">
       {{c}}
       <button @click="fnc_delect(c.pk)">삭제</button>
       <button @click="edit(c.pk)">수정</button>
     </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  created () {
    this.list()
  },
  data () {
    return {
      List: []
    }
  },
  methods: {
    fnc_delect: function (pk) {
      this.$axios.post(`/api/delete/`, {pk: pk})
        .then((result) => {
          alert('삭제됨')
          this.list()
        })
    },
    list () {
      this.$axios.get(`/api/main/`, {}, {responseType: 'json'})
        .then((result) => {
          this.List = result.data
        })
    },
    edit (pk) {
      this.$router.push({name: 'edit', params: {pk: pk}})
    }
  }
}
</script>

<style>
</style>
