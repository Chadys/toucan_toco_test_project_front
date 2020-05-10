<template>
    <li>
        <strong :class="{ 'folder': isDir, 'empty-folder': isEmptyDir, 'caret': !isEmptyDir, 'caret-down': !isEmptyDir && expanded }"
                @click="toggleExpand">{{dir.name}}</strong>
        <template v-if="expanded">
            <template v-if="isDir">
                <DirectoryPresenter :dirProperties="dir.content"/>
            </template>
            <template v-else>
                <ul>
                    <li v-for="(dir_prop, prop_name) in dir.props" v-bind:key="prop_name">
                        <em>{{prop_name}} :</em> {{dir_prop}}
                    </li>
                </ul>
            </template>
        </template>
    </li>
</template>

<script>
import DirectoryPresenter from "@/components/DirectoryPresenter";

export default {
    name: 'SingleElementPresenter',
    data: function () {
        return {
            expanded: false,
        };
    },
    props: {
        dir: Object
    },
    computed: {
        isDir: function () {
            return this.dir?.type === 'DIR'
        },
        isEmptyDir: function () {
            return this.isDir && !this.dir?.content?.length
        }
    },
    components: {
        DirectoryPresenter
    },
    methods: {
        toggleExpand() {
            if (!this.empty){
                this.expanded = !this.expanded;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.caret::before {
    content: "\25B6";
    color: black;
    display: inline-block;
    margin-right: 6px;
}

/* Rotate the caret/arrow icon when clicked on (using JavaScript) */
.caret-down::before {
    transform: rotate(90deg);
}

.folder {
    color: #2471a3;
}

.folder.caret::before {
    color: #2471a3;
}

.empty-folder {
    padding-left: 20px;
}
</style>
