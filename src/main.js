// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/">Användare och roller</a>
          </div>
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="nav navbar-nav">
              <li><router-link to="/user">Användare</router-link></li>
              <li><router-link to="/about">Om</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><router-link to="/user/add">Ny Användare</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
      <notifications  position="top center"/>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
