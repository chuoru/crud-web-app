import Vue from 'vue';
import Router from 'vue-router';
import MainScreen from '../screens/MainScreen/MainScreen.vue';
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: MainScreen }
	],
});