import { createRouter, createWebHistory } from 'vue-router'
import AllEvents from '../components/AllEvents.vue'
import AddEvent from '../components/AddEvent.vue'
import Settings from '../components/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'AllEvents',
    component: AllEvents
  },
  {
    path: '/addevent',
    name: 'AddEvent',
    component: AddEvent
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
