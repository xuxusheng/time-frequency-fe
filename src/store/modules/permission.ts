import { asyncRoutes, constantRoutes } from "@/router";
import store from "@/store";
import { RouteRecordRaw } from "vue-router";

// 由于路由表生成后更新无法检测，因此为左侧导航栏展示需要单独维护一个路由表
const module = {
  namespaced: true,
  state: () => ({
    routes: [],
    addRoutes: [],
  }),
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes);
    },
  },
  actions: {
    generateRoutes({ commit }, role) {
      return new Promise((resolve) => {
        let accessRoutes: RouteRecordRaw[] = [];
        if (role == "admin") {
          accessRoutes = asyncRoutes;
        }
        commit("SET_ROUTES", accessRoutes);
        resolve(accessRoutes);
      });
    },
  },
};

export default module;
