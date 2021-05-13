import Vue from 'vue'
import VueMq from 'vue-mq'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'

require('/src/assets/css/noscript.css');
require('/src/assets/css/main.css');

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 1250,
    desktop: Infinity,
  }
})

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})