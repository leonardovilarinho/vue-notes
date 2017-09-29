import test from 'ava'
import Vue from 'vue'
import { mount } from 'avoriaz'
import Registro from './../src/componentes/LvLogin.vue'
import LvInput from './../src/componentes/LvInput.vue'

Vue.component('lv-input', 	 LvInput)
Vue.component('router-link', {render: () => '<a></a>'})

let componente = mount(Registro)

test('formulário de login com mock de ação', t => {
	componente.setData({
		usuario: {
			email: 'leonardo-i@outlook.com',
			senha: '12345678'
		},

	})
	componente.vm.logar = function() {
		componente.setData({
			estado: 'Carregando...'
		})
	}
	componente.update()
	const botao = componente.find('input[type=submit]')[0]
	botao.trigger('click')
	t.is(botao.hasAttribute('disabled', 'disabled'), true)
})
