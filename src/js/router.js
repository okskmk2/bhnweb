import Router from "vue-router";
import Vue from 'vue';
import Home from '../view/Home.vue';
import Kanban from '../view/Kanban.vue';
import Wiki from '../view/Wiki.vue';
import Habit from '../view/Habit.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home},
        { path: '/kanban', component: Kanban},
        { path: '/habit', component: Habit},
    ]
})