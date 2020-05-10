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
}
</style>
