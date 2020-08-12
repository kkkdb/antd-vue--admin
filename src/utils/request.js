import axios from "axios";
import Vue from "vue";
import { message } from "ant-design-vue";
import router from "../router";
import { baseURL } from "../config/config";

const service = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
});
// service.interceptors.request.use(
//   config => {
//     const token = getToken();
//     // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//     if (token) {
//       config.headers["Authorization"] = token;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );
service.interceptors.response.use(
  response => response.data,
  error => {
    if (error.code) {
      message.error("网络超时....");
    }
    if (error.response && error.response.data) {
      message.error(JSON.stringify(error.response.data));
      if (error.response.status === 401) {
        router.push("/login");
      }
    }
    return Promise.reject(error);
  }
);

Vue.prototype.$axios = params => {
  params.method = params.method || "post";
  return service(params);
};
