// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "./assets/index.scss";//所有块级组件的样式文件

Vue.config.productionTip = false;

process.env.NODE_ENV == 'mock' && require('./apiMock/index'); //mock环境引入mockjs拦截ajax请求

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
