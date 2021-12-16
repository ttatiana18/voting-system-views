import Vue from 'vue';
import VueRouter from 'vue-router';
import AllUsers from './components/AllUsers.vue';
import CreateUser from './components/CreateUser.vue';
import EditUser from './components/EditUser.vue';


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: AllUsers
    },
    {
        path: "/create",
        name: "create",
        component: CreateUser
    },
    {
        path: "/edit:id",
        name: "edit",
        component: EditUser
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;