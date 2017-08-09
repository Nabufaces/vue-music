<template>
  <div id="app">
    <topBar></topBar>
    <router-view></router-view>
    <bottomBar></bottomBar>
    <moreModal v-if="showMoreModalFlag"></moreModal>
  </div>
</template>

<script>
import topBar from './components/topBar/topBar'
import bottomBar from './components/bottomBar/bottomBar'
import moreModal from './components/modal/moreModal/moreModal'

export default {
    name: 'app',
    components: {
        topBar,
        bottomBar,
        moreModal
    },
    computed: {
        showMoreModalFlag() {
            return this.$store.state.showMoreModalFlag
        }
    }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
