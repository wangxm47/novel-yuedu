import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Novel from '../views/Novel.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/novel',
        name: 'novel',
        component: Novel,
        props: (route) => {
            console.log(route);
            return {
                book: route.params.book
            };
        }
    },
    {
        path: '*',
        redirect: '/',
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
