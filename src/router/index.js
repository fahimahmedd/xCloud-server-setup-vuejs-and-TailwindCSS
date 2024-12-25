import { createRouter, createWebHistory } from 'vue-router'
import ChooseProvider from '../views/ChooseProvider.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'choose-provider',
      component: ChooseProvider,
    },
  ],
})

export default router
