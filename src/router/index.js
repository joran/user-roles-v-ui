import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Users from '@/components/Users'
import AddUser from '@/components/AddUser'
import EditUser from '@/components/EditUser'
import About from '@/components/About'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Users},
    { path: '/user', component: Users},
    { path: '/user/add', component: AddUser},
    { path: '/user/edit/:userId', component: EditUser},
    { path: '/about', component: About}
  ]
})
