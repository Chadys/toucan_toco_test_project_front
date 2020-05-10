<template>
    <div>
        <template v-if="loading">
            <p>Loading...</p>
        </template>
        <template v-else-if="dirProperties == null">
            <!--    TODO use proper vue form validation instead -->
            <div>
                <label>
                    Directory path:
                    <input type="text" v-model="rootDir">
                </label>
                <label>
                    Max recursivity level:
                    <input v-model.number="maxLevel" type="number" min="0" oninput="validity.valid || (value='');">
                </label>
                <button @click="selectNewDir">Explore this directory</button>
            </div>
        </template>
        <template v-else>
            {{ dirProperties }}
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ServerFilesPresenter',
  data() {
    return {
      // use store to set initial values
      rootDir: this.$store.state.rootDir,
      maxLevel: this.$store.state.maxLevel
    }
  },
  computed: {
    ...mapState(['loading', 'dirProperties'])
  },
  methods: {
    selectNewDir() {
      this.$store.dispatch({
        type: 'selectNewDir',
        rootDir: this.rootDir,
        maxLevel: this.maxLevel
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h3 {*/
/*  margin: 40px 0 0;*/
/*}*/
/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/
/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
/*a {*/
/*  color: #42b983;*/
/*}*/
</style>
