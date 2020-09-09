/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import CartView from '../components/CartView'
import ProductView from '../components/ProductView'
import Catalogue from '../components/Catalogue'


Vue.use(VueRouter)
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/produit/:slug',
		name: 'ProductView',
		component: ProductView
	},
	{
		path: '/panier',
		name: 'Panier',
		component: CartView
	},
	{
		path: '/catalogue',
		name: 'Catalogue',
		component: Catalogue,
	}
]

const router = new VueRouter({
	routes
})

export default router

