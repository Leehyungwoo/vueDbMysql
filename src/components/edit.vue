<template>
  <div>
      <h1>About</h1>
      <p><input type="text" v-model="data.name"/> 이름</p>
      <p><input type="text" v-model="data.email"/> 이메일</p>
      <p><input type="text" v-model="data.address"/> 주소</p>
      <div @click="submit()">수정</div>
  </div>
</template>
<script>
export default {
  name: 'about',
  props: ['pk'],
  created () {
    this.$axios.post(`/api/detail/`, {pk: this.pk})
      .then((result) => {
        alert('받아옴')
        this.data = result.data[0]
      })
  },
  data () {
    return {
      data: {}
    }
  },
  methods: {
    submit: function () {
      this.$axios.post(`/api/edit/`, {pk: this.data.pk, name: this.data.name, email: this.data.email, address: this.data.address})
        .then((result) => {
          alert('수정됨')
          this.$router.push({name: 'List'})
        })
    }}
}
</script>
