import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iVew from 'view-design';
import 'view-design/dist/styles/iview.css';
import i18n from "./local";

// 引入view的国际化
Vue.use(iVew,{
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
