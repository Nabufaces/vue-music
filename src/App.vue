<template>
  <div id="app">
    <topBar></topBar>
    <router-view></router-view>
  </div>
</template>

<script>
import topBar from './components/topBar/topBar'

export default {
  name: 'app',
  components: {
    topBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
