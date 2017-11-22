import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import store from './stores';
import ElementUI from 'element-ui';
Vue.use(VueRouter);
Vue.use(ElementUI);
new Vue({
    el:"#app",
    store,
    render: h => h(App)
})