import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../layout/index.vue";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import NotFound from "../views/404.vue";
import UserInfo from "../views/userInfo/index.vue";
import System from "../views/system/index.vue";
import Exam from "../views/exam/index.vue";
import Training from "../views/training/index.vue";
import page404 from "../views/404.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }

  {
    path: "/login",
    component: Login,
    meta: {
      hidden: true,
    },
  },
  {
    path: "/404",
    component: NotFound,
    meta: {
      hidden: true,
    },
  },
  {
    path: "/",
    name: "主页",
    redirect: "/home",

    component: Layout,
    children: [
      {
        path: "home",
        component: Home,
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
        component: UserInfo,
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
        component: Training,
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
        component: Exam,
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
        component: System,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "page404",
    component: page404,
    meta: {
      hidden: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
