// 인증이 필요한 곳에 import

import Axios from "axios";

Axios.interceptors.request.use(
  function(config) {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
