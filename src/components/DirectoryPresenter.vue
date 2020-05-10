<template>
    <ul class="no-bullet">
        <SingleElementPresenter v-for="dir in dirProperties" v-bind:key="dir.name" :dir="dir"/>
    </ul>
</template>

<script>
export default {
    name: 'DirectoryPresenter',
    props: {
        dirProperties: Array
    },
    beforeCreate() {
        this.$options.components.SingleElementPresenter = require("./SingleElementPresenter.vue").default;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-bullet{
    list-style: none
}
</style>
