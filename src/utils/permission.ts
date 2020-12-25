import router from "@/router";
import store from "@/store";
import auth from "@/utils/auth";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css";
import { ActTypes } from "@/store/modules/user";
import System from "@/views/system/index.vue";

NProgress.configure({ showSpinner: false });

// 白名单
const whiteList = ["/login"];

const addSys = () => {
  // beforeEach中使用addRoutes是无法添加的,因为这是访问路由之前的钩子,你需要自己做判断,addRoutes过后重定向到访问的页面,再次访问就可以了,因为已经执行过addRoutes了
  router.addRoute("dashboard", {
    path: "system",
    name: "系统中心",
    component: System,
    meta: { icon: "el-icon-setting" },
  });
};
// addSys();
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
      console.log(store.getters);
      console.log(store.getters.role);
      if (hasGetRole) {
        next();
      } else {
        // next();
        try {
          store
            .dispatch("user/GetUserAsync")
            .then(({ role }) => {
              return store.dispatch("permission/generateRoutes", role);
            })
            .then((accessRoute) => {
              // router.addRoute(accessRoute);
              // next({ ...to, replace: true });
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
