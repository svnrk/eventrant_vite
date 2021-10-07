import { createRouter, createWebHistory } from 'vue-router'
import AllEvents from '/src/components/AllEvents.vue'
const routes = [
    {
        path: '/',
        name: 'AllEvents',
        component: AllEvents,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router