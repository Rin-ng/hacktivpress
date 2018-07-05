import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VeeValidate)
VeeValidate.Validator.extend('extraVerify', {
  getMessage: field => 'Password must include at least 1 number',
  validate: value => {
    let validate = /^.*(?=.*\d)(?=.*[a-zA-Z]).*$/
    return validate.test(value)
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
