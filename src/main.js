/*
 * @Autor: lvdy
 * @Date: 2023-09-26 09:15:15
 * @LastEditors: lvdy
 * @LastEditTime: 2023-10-31 16:56:52
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI,{ size: 'small' })

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
