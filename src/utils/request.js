import axios from "axios";

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: "",
    timeout: 5000
  });

  //axios拦截器
  //添加请求拦截器
   instance.interceptors.request.use(function (config){
       //发送请求之前需要进行的操作
       return config;
   },function (error){
       //请求错误后进行的操作
       console.log(error);
       //返回带有拒绝原因的promise对象
       return Promise.reject(error);
   })
  //拦截响应
  instance.interceptors.response.use(function (res){
      //对响应数据进行的操作
      if(res.data==="example"){

      }
      return res;
  },function (error){
      console.log(error)
  })

  //发送真正的网路请求
  return instance(config);
}
