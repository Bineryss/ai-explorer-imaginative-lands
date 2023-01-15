import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../page/Home.vue'
import About from '../page/About.vue'
import { Routes } from './types'
import Destination from '../page/Destination.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: Routes.HOME,
        component: Home,
    },
    {
        path: '/about',
        name: Routes.ABOUT,
        component: About,
    },
    {
        path: '/destination/:name',
        name: Routes.DESTINATION,
        component: Destination,
        props: true,
    },
    {
        path: '/damasiis',
        name: Routes.DAMASAIIS,
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
