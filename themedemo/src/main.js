/*
 * @Description: file content
 * @Author: 
 * @Date: 2020-04-13 16:23:35
 * @LastEditors: wujing
 * @LastEditTime: 2020-05-08 20:10:34
 */
import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/index.scss'
Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  render: h => h(App),
}).$mount('#app')
