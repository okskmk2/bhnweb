import Vue from "vue";
import App from "../view/App.vue";
import router from "./router";
import axios from "axios";

Vue.prototype.axios = axios;

const vm = new Vue({
    el: '#app',
    router,
    render: h=> h(App)
});