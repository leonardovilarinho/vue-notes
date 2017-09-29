import test from 'ava'
import Vue from 'vue'
import { mount } from 'avoriaz'
import Comp from './../src/componentes/LvItemNota.vue'

Vue.prototype.$bus = new Vue()

let componente = mount(Comp)

test('iniciando item da lista', t => {
	componente.setProps({
		nota: {conteudo: 'academia', id: 4}
	})
	const titulo = componente.find('span')[0]
	t.is(titulo.text(), 'academia')
})

test('apagando o item da lista', t => {
	let apagado = false
	componente.vm.apagar = function() {
		apagado = true
	}
	componente.find('button')[0].trigger('click')
	t.is(apagado, true)
})