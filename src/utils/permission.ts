import router, { asyncRoutes } from "@/router";
import store from "@/store";
import auth from "@/utils/auth";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css";
import { ActTypes } from "@/store/modules/user";
import System from "@/views/system/index.vue";

NProgress.configure({ showSpinner: false });

// 白名单
const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  // 除了去登录页以外，都需要先登录
  NProgress.start();

  // console.log(router.options.routes[1].children);
  const isLogin = auth.isLogin();

  if (isLogin) {
    // 已登录情况下，去登录页的话，重定向回首页
    if (to.path == "/login") {
      next("/dashboard/home");
      NProgress.done();
    } else {
      const hasGetRole = store.getters.role;
      console.log(hasGetRole);
      if (hasGetRole) {
        console.log(123);
        next();
      } else {
        try {
          store
            .dispatch("user/GetUserAsync")
            .then(({ role }) => {
              return store.dispatch("permission/generateRoutes", role);
            })
            .then((accessRoute) => {
              if (accessRoute.length) {
                router.addRoute("dashboard", accessRoute[0]);
                next({ ...to, replace: true });
              }
            });
        } catch (e) {
          console.log(e);
        }
        next();
      }
    }
    NProgress.done();
  } else {
    // 未登录时只可以访问白名单
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      // 不在白名单的直接跳转login
      next("/login");
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
