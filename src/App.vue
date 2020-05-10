<template>
  <div id="app">
    <ServerFilesPresenter/>
  </div>
</template>

<script>
import ServerFilesPresenter from './components/ServerFilesPresenter.vue'
import store from './state/store.js'

export default {
  name: 'App',
  components: {
    ServerFilesPresenter
  },
  store
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
