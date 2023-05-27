<template>

  <div>Hello {{ name }}!</div>

</template>

<script>
export default {
  name: "MyComponent",
  props:{
    name: String,
  }
}
</script>

<style scoped>

</style>