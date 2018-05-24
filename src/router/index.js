import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '@/config/env'

Vue.use(Router)

//vue异步组件和webpack的【代码分块点】功能结合，实现了按需加载
const IndexRoute = () => import('@/containers/IndexRoute');
const Index = () => import('@/containers/Index');

export default new Router({
  mode: routerMode || routerMode == '' ? routerMode : 'history',
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    // {
    //   path : '/login',
    //   component : LoginView,
    //   children: [
    //     {
    //       path: '',
    //       name: 'Login',
    //       component: Login
    //     },
    //     {
    //       path: 'register',
    //       name: 'Register',
    //       component: Register
    //     }
    //   ]
    // },
    {
      path: '/Index',
      component: IndexRoute,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index
        }
      ]
    },
  ]
})



// 路由守卫
router.beforeEach((to, from, next) => {
  // doingthing
  next()
})