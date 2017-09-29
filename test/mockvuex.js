import Vue from 'vue'
import Vuex from 'vuex'
import { mount } from 'avoriaz'

export default {
	vuex: function (comp) {
		Vue.prototype.$bus = new Vue()
		Vue.use(Vuex)
		const store = new Vuex.Store({
		  state: {
		  	usuario: {
		  		nome: 'Leonardo',
		  		id: 1
		  	}
		  }
		})

		return  mount(comp, { store })
	}
}