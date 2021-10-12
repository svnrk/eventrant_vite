import { createRouter, createWebHistory } from 'vue-router'
import AllEvents from '../components/AllEvents.vue'
import Events from '../components/Events.vue'

const routes = [
  {
    path: '/',
    name: 'AllEvents',
    component: AllEvents
  },
  {
    path: '/Events',
    name: 'Events',
    component: Events
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
