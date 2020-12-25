import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import * as echarts from "echarts";
import "@/utils/permission";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store).use(router).use(ElementPlus);
app.config.globalProperties.$echarts = echarts;
app.mount("#app");
