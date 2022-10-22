import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import { Routes } from './types'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: Routes.HOME,
        component: Home,
    },
    {
        path: '/about',
        name: Routes.ABOUT,
        component: Home,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
