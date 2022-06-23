/*
 * @Description: 
 * @Date: 2022-06-23 11:50:56
 * @LastEditTime: 2022-06-23 11:51:10
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'

import Home from '@/views/home/index.vue'
import About from '@/views/about/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
