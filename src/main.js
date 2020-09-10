import Vue from 'vue';
import App from './App.vue';
import router from './router';
import EasySlider from "vue-easy-slider";

Vue.use(EasySlider);

Vue.config.productionTip = false
new Vue({
	router,
	data:{
		panier: "[{slug: String, qty: Number}]"
	},
	render: h => h(App)
}).$mount('#app')
