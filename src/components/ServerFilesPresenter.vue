<template>
    <div>
        <template v-if="loading">
            <p>Loading...</p>
        </template>
        <template v-else>
            <!--    TODO use proper vue form validation instead -->
            <div>
                <div>
                    <label>
                        Directory path:
                        <input type="text" v-model="newRootDir">
                    </label>
                </div>
                <div>
                    <label>
                        Max recursivity level:
                        <input v-model.number="newMaxLevel" type="number" min="0" oninput="validity.valid || (value='');">
                    </label>
                </div>
                <div>
                    <button @click="selectNewDir">Explore this directory</button>
                </div>
            </div>
            <template v-if="dirProperties != null">
                <p><strong>Properties for directory "{{ dirProperties.name }}" at max level {{ maxLevel }}</strong></p>

                <DirectoryPresenter :dirProperties="dirProperties.content"/>
            </template>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DirectoryPresenter from "@/components/DirectoryPresenter";

export default {
  name: 'ServerFilesPresenter',
  components: {
    DirectoryPresenter
  },
  data() {
    return {
      // use store to set initial values
      newRootDir: this.$store.state.rootDir,
      newMaxLevel: this.$store.state.maxLevel
    }
  },
  computed: {
    ...mapState(['loading', 'maxLevel', 'dirProperties'])
  },
  methods: {
    selectNewDir() {
      this.$store.dispatch({
        type: 'selectNewDir',
        rootDir: this.newRootDir,
        maxLevel: this.newMaxLevel
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    margin-bottom: 10px;
}
</style>
