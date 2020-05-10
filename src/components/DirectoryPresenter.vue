<template>
    <div>
        <ul v-for="dir in dirProperties" v-bind:key="dir.name">
            <li><strong>{{dir.name}}:</strong>
                <template v-if="dir.type === 'DIR'">
                    <DirectoryPresenter :dirProperties="dir.content"/>
                </template>
                <template v-else>
                    <ul v-for="(dir_prop, prop_name) in dir.props" v-bind:key="prop_name">
                        <li>{{prop_name}} : {{dir_prop}}</li>
                    </ul>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'DirectoryPresenter',
    props: {
        dirProperties: Array
    },

    mounted: function () {
        // `this` points to the vm instance
        console.log(this.dirProperties)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
