import Vue from 'vue';
import Vuex from 'vuex';
import Articles from './modules/articles.js';
import Users from './modules/users.js';
import Notebooks from './modules/notebooks.js';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        
    },
    modules:{
        Articles,
        Users,
        Notebooks
    }
})