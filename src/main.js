// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Work from './components/Work.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', name: "HomeComponentName", component: Home},
		{ path: '/home', name: "HomeComponentName", component: Home},
		{ path: '/contact', name: "ContactComponentName", component: Contact},
		{ path: '/work', name: "WorkComponentName", component: Work},
		{ path: '*', redirect: '/home'}
	],
	mode: 'history' 
})

const PAGE_TITLE = {
    "HomeComponentName": "Your Dashboard",
    "ContactComponentName": "About Us Page",
    "WorkComponentName": "Our work"
}

router.afterEach((toRoute, fromRoute) => {
    window.document.title = PAGE_TITLE[toRoute.name]
    console.log(toRoute)  // this lets you check what else is available to you here
})


var bus = new Vue({});

/* eslint-disable no-new */
const app = new Vue({
	router,
	data: {
		bus: bus
	},
	render: h => h(App)
}).$mount('#app')