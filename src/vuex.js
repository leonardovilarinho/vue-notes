import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		usuario: { id: 0, nome: '', email: '' }
	},

	mutations: {
		LOGAR: (estado, { id, nome, email }) => {
			estado.usuario = { id, nome, email }
		},
	},

	actions: {
		logarUsuario(contexto, { id, nome, email }) {
			contexto.commit('LOGAR', { id, nome, email })
		},
	}
})