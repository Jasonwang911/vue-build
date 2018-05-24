// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui'
import App from './App'
// import 'element-ui/lib/theme-chalk/index.css';
// import '@/common/scss/element-variables.scss'
import router from './router'
// axios封装引入
import { fetch, post } from '@/axios/api'
// vuex 模块仓库
import store from './store/index'

Vue.config.productionTip = false

// Vue.use(ElementUI, { size: 'small' });

// scss入口
require ('@/common/scss/index.scss')

// post 请求使用 this.$post
Vue.prototype.$post = post;
// get 请求使用 this.$get
Vue.prototype.$get = fetch;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


/*
*   以下为过滤器
*/


/*
*   补位toDouble方法
*/
function add0(m){return m<10?'0'+m:m }  

/*
*   获取时间方法
*/
function formatDate(needTime , choose){  
  //needTime是整数，否则要parseInt转换  
  var time = new Date(needTime);  
  var y = time.getFullYear();  
  var m = time.getMonth()+1;  
  var d = time.getDate();  
  var h = time.getHours();  
  var mm = time.getMinutes();  
  var s = time.getSeconds(); 

  switch(choose){
    case 'allWord' :
      //返回完整时间拼接文字
      return y + '年' + add0(m) + '月' + add0(d) + '日 ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
    break;
    case 'allAnd' :
      //返回完整时间拼接'-'
      return y + '-' + add0(m) + '-' + add0(d) + '- ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
    break;
    case 'ymdWord' :
      //返回年月日时间拼接'-'
      return y + '-' + add0(m) + '-' + add0(d);
    break;
    case 'dayWord' :
      //返回日文字 eg ：12日
      return add0(d) + '';
    break;
    case 'ymWord' :
      //返回日文字 eg ：2018-12
      return y + '-' + add0(m) + '';
    break;
  }
    
}  

/* 发布评论日期 2018年1月12日 16:30 */
Vue.filter('getTimeMD', function(input) {
  
  let time;
  if (input === '') {
    return '';
  } else {
    time = formatDate(Number(input) , 'allWord');
  };
  return time;
})

/* 发布列表日期 => (日) => 12日 */
Vue.filter('getTimeDayWord', function(input) {
  let time;
  if (input === '') {
    return '';
  } else {
    time = formatDate(Number(input) , 'dayWord');
  };
  return time;
})

/* 发布列表日期 2018-1-16 */
Vue.filter('getTimeYMDWord', function(input) {
  let time;
  if (input === '') {
    return '';
  } else {
    time = formatDate(Number(input) , 'ymdWord');
  };
  return time;
})
/* 发布列表日期 2018-1 */
Vue.filter('getTimeYMWord', function(input) {
  let time;
  if (input === '') {
    return '';
  } else {
    time = formatDate(Number(input) , 'ymWord');
  };
  return time;
})
