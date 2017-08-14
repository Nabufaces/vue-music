<template>
  <div id="app">
    <router-view></router-view>
    <bottomBar></bottomBar>
    <moreModal v-if="showMoreModalFlag"></moreModal>
  </div>
</template>

<script>
import bottomBar from './components/bottomBar/bottomBar'
import moreModal from './components/modal/moreModal/moreModal'

export default {
    name: 'app',
    components: {
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
  @import './icon/iconfont.css';
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  a {
    text-decoration: none;
  }
</style>
