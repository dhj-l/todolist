import { createRouter, createWebHistory } from 'vue-router'
import { todolistRoutes } from './routes/todolist'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...todolistRoutes],
})

export default router
