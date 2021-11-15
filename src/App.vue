<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
export default {
  name: 'App',
  components: {Todos},
  mounted() {
    console.log(this.$store.state.Todos.sayHello)
  }
}
</script>

<style>

</style>
