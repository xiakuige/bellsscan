import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/layout/windows/index.vue'

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'index',
                component: () => import('@/views/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})

export default router
