import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import BasicLayout from "@/layout/basic/BasicLayout.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Exam from "@/views/exam/index.vue";
import Training from "@/views/training/index.vue";
import System from "@/views/system/index.vue";
import NotFound from "@/views/404.vue";

import SettingLayout from "@/layout/setting/SettingLayout.vue";
import UserInfoView from "@/views/setting/UserInfo.vue";
import PasswordView from "@/views/setting/Password.vue";

export const constantRoutes: Array<RouteRecordRaw> = [
  // 登录页
  {
    path: "/login",
    component: Login,
  },
  // 项目核心部分
  {
    path: "/dashboard",
    component: BasicLayout,
    name: "dashboard",
    children: [
      {
        path: "home",
        name: "主页",
        component: Home,
        meta: { icon: "el-icon-s-home" },
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
    ],
  },
  // 设置模块
  {
    path: "/setting",
    component: SettingLayout,
    name: "设置",
    children: [
      {
        path: "user-info",
        name: "用户信息",
        component: UserInfoView,
        meta: { icon: "el-icon-user" },
      },
      {
        path: "password",
        name: "修改密码",
        component: PasswordView,
        meta: { icon: "el-icon-lock" },
      },
    ],
  },
  {
    path: "/",
    redirect: "/dashboard/home",
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/404",
    component: NotFound,
  },
];

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: "system",
    name: "系统中心",
    component: System,
    meta: { icon: "el-icon-setting" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes,
});

export default router;
