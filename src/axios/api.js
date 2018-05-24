/*
*   axios基本配置、请求拦截器、相应拦截器
*
*/
// axios 引入
import axios from 'axios'
// vuex 仓库引入
import store from '@/store/index'
// baseUrl引入： 
import { baseUrl } from '@/config/env'
// 工具函数引入
import Lib from '@/common/lib/lib'

console.log(baseUrl)

axios.defaults.headers.post['Content-Type'] = 'Content-Type: application/json'
// baseURL配置
axios.defaults.baseURL = baseUrl




// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    return Promise.reject(error);
})
// 响应拦截器
axios.interceptors.response.use(function(response) {
    // 在相应中拦截 sessionId 
    // store.dispatch('SESSION_ID', response.data.head.SESSION_ID)
    return response
}, function(error) {
    return Promise.reject(error)
})


/*
*   axios的get请求
*   @params  url
*   @params  params
*   @returns {Promise}
*/
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    // get 请求
    
    // url = `${url}${Lib.json2url(params)}`
    axios.get(url, {
      params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error);
    })
  })
}
  
/*
*   axios的post请求
*   @params  url
*   @params  params
*   @returns {Promise}
*/
export function post(url, params = {}) {
  let request = JSON.stringify(params);
  console.log(typeof request)
  return new Promise((resolve, reject) => {
    // post请求
    axios.post(url, request)
      .then(response => {
        console.log(response)
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
  
  
// 处理params的函数
// function handleParams(params) {
//     let json = {
//       "head": {
//         "SESSION_ID": "",
//         "TOKEN": "",
//         "DEVICE_ID": "",
//         "SYSTEM_TYPE": "h5",
//         "VERSION": ""
//       },
//       "param": {}
//     }
//     json.head.TYPE = params.head.TYPE;
//     for (let name in params.param) {
//       json.param[name] = params.param[name];
//     }
//     return 'param_key=' + JSON.stringify(json);
// }