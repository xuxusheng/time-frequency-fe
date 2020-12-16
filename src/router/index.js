import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "@/layout";


const routes = [
  {
    path: "/login",
    component: () => import("@/views/login"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  {
    path: "/",
    name: "主页",
    redirect: "/home",

    component: Layout,
    children: [
      {
        path: "home",
        component: () => import("@/views/Home"),
      },
    ],
  },
  {
    path: "/userinfo",
    name: "用户中心",
    redirect: "/userinfo/index",

    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/userInfo/index"),
      },
    ],
  },
  {
    path: "/training",
    name: "培训中心",
    redirect: "/training/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/training/index"),
      },
    ],
  },
  {
    path: "/exam",
    name: "考试中心",
    redirect: "/exam/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/exam/index"),
      },
    ],
  },
  {
    path: "/system",
    name: "系统中心",
    redirect: "/system/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/system/index"),
      },
    ],
  },
  // { path: "/*", redirect: "/404", hidden: true },
];

const router = createRouter({
  history:createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router;
