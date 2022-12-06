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

router.beforeResolve(async (to, from, next) => {
  const user = useUserStore();
  let valid = true;

  if (user?.member?.token) {
    api.get(`members/${user.member.id}/signedin?token=${user.member.token}`).then(r => {
      if (r.message) {
        user.disconnect();
        valid = false;
      }
    }).catch(e => {
      user.disconnect();
      valid = false;
    });
  }

  valid ? next() : next('login');
})

export default router
