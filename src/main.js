import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

window.gun = Gun("ws://192.168.2.50:8000/gun")

Vue.use(Vuetify)

Vue.config.productionTip = false

// Vue.use(PrismicVue, {
//   endpoint: window.prismic.endpoint,
//   linkResolver,
//   htmlSerializer
// })


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
