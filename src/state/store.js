import Vue from 'vue'
import Vuex from 'vuex'

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
            // TODO replace mock with async call to webservice to get new dirProperties
            await new Promise(resolve => setTimeout(resolve, state.maxLevel*1000));
            commit('_setProperties', { dirProperties: null });
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
