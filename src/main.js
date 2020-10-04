import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iVew from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(iVew);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
