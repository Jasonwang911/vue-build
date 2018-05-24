# web1000

> A Vue.js project


> 项目目录结构

|-- src                              // 源码目录
|   |-- components                   // 功能组件
|       |-- common                   // 公共组件
|       |-- footer                   	// 分模块--底部公共组件
|       |-- header                      // 分模块--头部公共组件
|
|   |-- config                       // 基本配置
|       |-- env.js                   // 环境切换配置
|       |-- rem.js                   // px转换rem
|
|   |-- common                       // 公共资源
|       |-- font                   	 // 字体
|       |-- images  				 // 图片（按照模块分置）
|       |-- lib                   	 // 工具型方法
|       |-- scss  					 // 图片（按照模块分置）
|      		|-- index.scss           // 合并对外暴露全局scss
|       	|-- reset.scss  		 // 清除默认样式
|       	|-- variable.scss        // 全局配色型样式
|       	|-- mixin  			     // 兼容性scss和通用型scss
|
|   |-- views                        // 视图页面（与路由一一对应）
|       |-- index                 	 // 首页相关
|      		|-- Index.vue            // 首页
|       	|-- News.scss  			 // 新闻详情
|       |-- login                    // 登录相关
|      		|-- Login.vue            // 登录页面
|       	|-- Regist.scss  	     // 注册页面
|
|   |-- components                   // 功能性组件
|      		|-- cm-xxxx.vue            // 登录页面
|
|   |-- sections                     // 业务性组件
|      		|-- st=xxxx.vue            // 登录页面
|
|   |-- router                       // 路由配置
|      		|-- index.js           	 // 路由、路由守卫
|
|   |-- axios                      // 数据交互统一调配
|      		|-- api.js           	 // api输出、请求、响应拦截器、Loding动画
|
|   |-- store                        // vuex的状态管理
|       |-- modules                  // 加载各种store模块
|       	|-- common.js            // 公用状态
|       	|-- user.js              // 用户状态
|       	|-- ......               // 更多状态模块
|       |-- index.js                 // 对外暴露输出
|       |-- types.js                 // 常量
|
|   |-- App.vue                      // 页面入口文件
|
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|
|static							    // 无需打包的资源，如swiper.min.js等



## 目录结构约定和命名规范
vue文件分为三种： 容器、业务组件（一次性组件）、功能组件

	容器: 由业务组件和功能组件拼接而成的页面，是路由跳转的根本单位，要求命名规范和路由命名一致。
	业务组件: 由功能组件拼接而成的为实现相关业务功能的元素，可以携带交互过程，要求命名规范和业务相关。组件命名以st-（section）开头
	功能组件: 具有一定功能，相对独立的组件，要求可复用、高内聚、低耦合。要求命名规范只突出具体功能并且与业务解耦: eg：ListItem.vue Cell.vue Item.vue等，另外要求组件命名以cm-（component）开头

## 命名规范
``` bash
# class ： 
全部小写，使用 - 连接  eg： nav-list
# 业务组件名： 
st-开头，全部小写， 使用 - 连接，放入components/sections下 eg: st-nav-list.vue
# 功能祖件名： 
cm-开头，全部小写， 使用 - 连接，放入components下 eg: cm-input.vue
# 页面名： 
驼峰命名，首字母大写，和路由path、name一致    eg： Index.vue
# 变量名： 
驼峰命名，首字母小写     
# 文件中： 
根元素class和class命名规范一致，组件name为根元素name的驼峰命名
# scss： 
命名同class命名规范
# 函数和方法 
添加多行的注释： /******/  作用、参数、默认值
# mixin： 
命名根据功能命名

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

