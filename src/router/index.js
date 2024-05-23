import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from '../components/BaseLayout.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/LoginPage.vue")
  },
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import("@/views/Dashboard.vue")
      },
      {
        path: 'lang',
        name: 'Lang',
        component: () => import("@/views/Lang.vue")
      },
      {
        path: '404',
        name: '404',
        component: () => import("@/views/404.vue")
      },
      {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
        hidden: true
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
});

export default router;
