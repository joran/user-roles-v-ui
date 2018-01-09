import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Users from '@/components/user/ListUsers'
import AddUser from '@/components/user/AddUser'
import EditUser from '@/components/user/EditUser'
import About from '@/components/About'
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home},
    { path: '/user', component: Users},
    { path: '/user/add', component: AddUser},
    { path: '/user/edit/:userId', component: EditUser},
    { path: '/about', component: About},
    { path: '*', redirect: '/'}
  ]
})
