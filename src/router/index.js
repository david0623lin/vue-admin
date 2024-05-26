import { createRouter, createWebHistory } from "vue-router";
import LayoutBase from '../components/LayoutBase.vue'

const routes = [
  {
    path: '/login',
    name: '登入',
    hidden: true,
    component: () => import("@/views/LoginPage.vue")
  },
  {
    path: '/404',
    hidden: true,
    component: () => import("@/views/404.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    hidden: true
  },
  {
    path: '/dashboard',
    name: '首頁',
    hidden: true,
    component: LayoutBase,
    children: [
      {
        path: '/dashboard',
        name: '首頁',
        component: () => import("@/views/Dashboard.vue")
      },
    ],
  },
  {
    path: '/example',
    name: '範例',
    component: LayoutBase,
    children: [
      {
        path: '/form',
        name: '表單',
        redirect: '/form',
        component: () => import("@/views/Dashboard.vue")
      },
      {
        path: '/table',
        name: '表格',
        redirect: '/table',
        component: () => import("@/views/Dashboard.vue")
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
});

export default router;
