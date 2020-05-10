import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loading: false,
        rootDir: null,
        maxLevel: 1,
        dirProperties: null
    },
    actions: {
        // use this function instead of _selectNewDir directly to keep dirProperties in sync
        selectNewDir ({ commit, dispatch }, payload) {
            commit('_selectNewDir', payload);
            dispatch('_updateProperties');
        },
        async _updateProperties ({ commit, state }) {
            commit('_load');
            try {
                const response = await axios.get(
                    `${process.env.VUE_APP_API_BASE_URL}stat`,
                    { params: {
                        rootdir: state.rootDir,
                        maxlevel: state.maxLevel
                    }}
                );
                commit('_setProperties', { dirProperties: response.data });
            } catch (error) {
                console.error(error.toJSON());
                commit('_setProperties', { dirProperties: null });
                // TODO define global error handler to display them with snackbar or something
            }
        }
    },
    mutations: {
        _load (state) {
            state.loading = true;
        },
        _selectNewDir (state, { rootDir, maxLevel }) {
            state.rootDir = rootDir;
            state.maxLevel = maxLevel;
        },
        _setProperties (state, { dirProperties }) {
            state.dirProperties = dirProperties;
            state.loading = false;
        }
    }
})

export default store
