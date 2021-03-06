// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
	state: {
		showMoreModalFlag: false
	},
	mutations: {
		showMoreModal: state => {
			state.showMoreModalFlag = true;
		},
		closeMoreModal: state => {
			state.showMoreModalFlag = false;
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
