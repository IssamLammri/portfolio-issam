<template>

  <div>Hello {{ name }}!</div>

</template>

<script>
export default {
  name: "Home",
  props:{
    name: String,
  }
}
</script>

<style scoped>

</style>