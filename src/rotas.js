import Vue from 'vue'
import VueRouter from 'vue-router'
import LvRegistro from './componentes/LvRegistro.vue'
import LvPainel from './componentes/LvPainel.vue'
import LvLogin from './componentes/LvLogin.vue'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{path: '/', 	component: LvLogin},
		{path: '/registrar', 	component: LvRegistro},
		{path: '/notas', 	component: LvPainel},
	],
})