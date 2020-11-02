<template>
  <div id="app">
    <Theme/>
  </div>
</template>

<script>
import Theme from '@/views/theme'

export default {
  name: 'App',
  components: {
    Theme
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
