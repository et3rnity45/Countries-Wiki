import { createWebHistory, createRouter } from "vue-router";

//Components
import Home from '@/views/Home.vue';
import Country from '@/views/Country.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/country/:name',
        name: 'Country',
        component: Country,
        props: true,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;