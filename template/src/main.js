// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "./assets/index.scss";//所有块级组件的样式文件

// 国际化
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import LangEn from './lib/locale/lang/en'
import LangCN from './lib/locale/lang/zh-CN'
const i18n = new VueI18n({
    locale: 'chn', //默认中文
    messages: {
        'en': LangEn,
        'chn': LangCN
    }
});

Vue.config.productionTip = false;

process.env.NODE_ENV == 'mock' && require('./apiMock/index'); //mock环境引入mockjs拦截ajax请求

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
