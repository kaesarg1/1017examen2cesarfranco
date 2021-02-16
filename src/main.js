import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { MixinTranslate } from "@/mixins/MixinTranslate.js"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false

new Vue({
  router, 
  mixins: [MixinTranslate],
  render: h => h(App),
}).$mount('#app')
