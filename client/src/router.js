import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signIn',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signUp',
      name: 'signup',
      component: SignUp
    }
  ]
})
