import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/emotion',
			component: () => import('../views/Emotion.vue')
		},

    {
			path: '/weather',
			component: () => import('../views/Emotion.vue')
		},
	],
})

export default router;