import Vue from 'vue';
import VueRouter from 'vue-router';
import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: AllProduct
    },
    {
        path: "/create",
        name: "create",
        component: CreateProduct
    },
    {
        path: "/edit:id",
        name: "edit",
        component: EditProduct
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;