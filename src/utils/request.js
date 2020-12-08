import axios from "axios";
//cookies的时候再验证
import { auth } from "@/utils/cookies";
//导入element ui消息组件提示错误信息
//message 被加入到vue的原型上，因此可以直接在Vue里面使用
import { Message } from "element-ui";
export function request(config) {
  //创建axios实例
  const instance = axios.create({
    //全局变量的设置（额外添加
    // .env.development 模式用于serve，开发环境，就是开始环境的时候会引用这个文件里面的配置
    // .env.production模式用于build，线上环境。
    // .env.test 测试环境）
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
  });

  //axios拦截器
  //添加请求拦截器
  instance.interceptors.request.use(
    function(config) {
      //发送请求之前需要进行的操作
      //添加token验证需要的头信息
      config["X-token"] = auth.getCookies(config.url);
      return config;
    },
    function(error) {
      //请求错误后进行的操作
      Message({
        message: "请求发送失败",
        type: "error",
        duration: 5000
      });
      console.log(error);
      //返回带有拒绝原因的promise对象
      return Promise.reject(error);
    }
  );
  //拦截响应
  instance.interceptors.response.use(
    function(res) {
      //对响应数据进行的操作
      if (res.data === "example") {
        //随便写的，这里需要后期补充
        return res.data;
      } else {
        Message({
          message: "请求失败",
          type: "error",
          duration: 5000
        });
      }
      return res;
    },
    function(error) {
      console.log(error);
    }
  );

  //发送真正的网路请求
  return instance(config);
}
