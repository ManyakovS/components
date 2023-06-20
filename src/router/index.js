import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/CinemaHall')
  },
  {
    path: '/films',
    name: 'films',
    component: () => import ('../views/FilmsPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
