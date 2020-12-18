import { Resp } from "@/model";
import { ElMessage } from "element-plus";
import { c2s, getToken, s2c } from "@/utils";
import axios, { AxiosResponse } from "axios";

export * from "./auth";

// 初始化 axios

const request = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    ["Authorization"]: getToken(),
  },
  // 在这里 transform 的话，会导致变成 [object object]，估计是 data 类型有问题，但是 axios 库的 ts 类型又写的 any，坑
  // transformRequest: [
  //   (data) => {
  //     const d = c2s(data);
  //     return d;
  //   },
  // ],
  // 加了这个后，会导致返回的拦截器中代码执行两次，但是这个 transform 函数却没实行，奇怪
  // transformResponse: [
  //   (data) => {
  //     const d = s2c(data);
  //     return d;
  //   },
  // ],
  // 不管返回的状态码是多少，都统一不报错，在拦截器中处理
  validateStatus: () => true,
});

request.interceptors.request.use((config) => {
  // 加入 token，todo 不存在的话，跳登录页
  const token = getToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  // 参数驼峰转蛇形
  config.data = c2s(config.data);
  config.params = c2s(config.params);
  return config;
});

request.interceptors.response.use((resp: AxiosResponse<Resp>) => {
  resp.data = s2c(resp.data);
  // 蛇形转驼峰

  if (resp.status == 200 && resp.data.meta.errCode === 0) {
    // 请求正常
    return resp;
  }

  if (resp?.data?.meta?.errCode === 0) {
    // 数据结构不对，或者状态码 200，而 errCode 却是0，不符合规范
    ElMessage.error(resp.statusText);
    return Promise.reject(resp);
  }

  // todo token 相关错误，跳转向登录页面

  ElMessage.error(resp.data.meta.errMsg);

  // return resp;
  return Promise.reject(resp);
});

export default request;
