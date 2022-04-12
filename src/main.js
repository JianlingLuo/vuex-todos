import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import store from './store'

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
