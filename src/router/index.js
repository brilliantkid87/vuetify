import { createRouter, createWebHistory } from 'vue-router'
import Nomer1 from '../components/Nomer1.vue'
import Nomer2 from '../components/Nomer2.vue'
import Nomer3 from '@/components/Nomer3.vue'

const routes = [
  { path: '/nomer1', component: Nomer1 },
  { path: '/nomer2', component: Nomer2 },
  { path: '/nomer3', component: Nomer3 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
