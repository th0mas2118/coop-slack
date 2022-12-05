import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      beforeEnter: (to, from, next) => {
        const user = useUserStore()

        if (user.isConnected) {
          next('home')
        }
        next()
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      beforeEnter: (to, from, next) => {
        const user = useUserStore()

        if (user.isConnected) {
          next('home')
        }
        next()
      },
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('../views/MemberListView.vue'),
      beforeEnter: (to, from, next) => {
        const user = useUserStore()

        if (!user.isConnected) {
          next('login')
        }
        next()
      },
    },
    {
      path: '/members/:id',
      name: 'member',
      component: () => import('../views/MemberView.vue'),
    },
    {
      path: '/conversations',
      name: 'conversations',
      component: () => import('../views/ConversationListView.vue'),
      beforeEnter: (to, from, next) => {
        const user = useUserStore()

        if (!user.isConnected) {
          next('login')
        }
        next()
      },
    },
    {
      path: '/conversation/:id',
      name: 'conversation',
      component: () => import('../views/ConversationView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
