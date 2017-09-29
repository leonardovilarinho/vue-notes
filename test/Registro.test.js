import test from 'ava'
import Vue from 'vue'
import { mount } from 'avoriaz'
import Registro from './../src/componentes/LvRegistro.vue'
import LvInput from './../src/componentes/LvInput.vue'

Vue.component('lv-input', LvInput)

let componente = mount(Registro)

test('formulário de registro com mock de ação', t => {
	componente.setData({
		usuario: {
			nome: 'Leonardo',
			email: 'leonardo-i@outlook.com',
			senha: '12345678'
		},

	})
	componente.vm.registrar = function() {
		componente.setData({
			estado: 'Carregando...'
		})
	}
	componente.update()
	const botao = componente.find('input[type=submit]')[0]
	botao.trigger('click')
	t.is(botao.hasAttribute('disabled', 'disabled'), true)
})
