<template>
  <div>
      <router-link v-bind:to="{ name: 'home' }">Sign in</router-link>
  </div>
</template>
<script>
export default {
  name: 'about',
  data: function () {
    return {gnbOpen: false}
  }
}
</script>
