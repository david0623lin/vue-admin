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
    redirect: '/example',
    children: [
      {
        path: 'form',
        name: '表單',
        component: () => import("@/views/FromPage.vue")
      },
      {
        path: 'table',
        name: '表格',
        component: () => import("@/views/Dashboard.vue")
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    hidden: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
});

export default router;
