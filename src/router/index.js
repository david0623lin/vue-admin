import { createRouter, createWebHistory } from "vue-router";
import LayoutBase from '../components/LayoutBase.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/LoginPage.vue")
  },
  {
    path: '/',
    component: LayoutBase,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import("@/views/Dashboard.vue")
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
