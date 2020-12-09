import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Input,
  Button,
  Col,
  Row,
  Card
} from 'element-ui'


import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false


Vue.use(Input)
Vue.use(Button)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')