import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import BasicLayout from "@/layout/BasicLayout.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import UserInfo from "@/views/userInfo/index.vue";
import System from "@/views/system/index.vue";
import Exam from "@/views/exam/index.vue";
import Training from "@/views/training/index.vue";
import NotFound from "@/views/404.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboard/home",
  },
  {
    path: "/404",
    component: NotFound,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: BasicLayout,
    children: [
      {
        path: "",
        redirect: "home",
        meta: { hidden: true },
      },
      {
        path: "home",
        name: "主页",
        component: Home,
        meta: { icon: "el-icon-s-home" },
      },
      {
        path: "userinfo",
        name: "用户中心",
        component: UserInfo,
        meta: { icon: "el-icon-user-solid" },
      },
      {
        path: "training",
        name: "培训中心",
        component: Training,
        meta: { icon: "el-icon-notebook-2" },
      },
      {
        path: "exam",
        name: "考试中心",
        component: Exam,
        meta: { icon: "el-icon-edit-outline" },
      },
      {
        path: "system",
        name: "系统设置",
        component: System,
        meta: { icon: "el-icon-setting" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
