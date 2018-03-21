<template>
  <div>
      <h1>About</h1>
      <p><input type="text" v-model="name"/> 이름</p>
      <p><input type="text" v-model="email"/> 이메일</p>
      <p><input type="text" v-model="address"/> 주소</p>
      <div @click="submit()">입력</div>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      name: '',
      email: '',
      address: ''
    }
  },
  methods: {
    submit: function () {
      var val = { params: {name: this.name, email: this.email, address: this.address} }
      this.$axios.get(`/api/submit/`, val)
        .then((result) => {
          alert('등록됨')
          this.$router.push({name: 'List'})
        })
    }
  }
}
</script>
