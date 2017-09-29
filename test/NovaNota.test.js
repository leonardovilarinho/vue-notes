import test from 'ava'
import Comp from './../src/componentes/LvNovaNota.vue'
import mockvuex from './mockvuex'

let componente = mockvuex.vuex(Comp)

test('formulário de criação com mock em ação', t => {
	componente.setData({
		conteudo: 'Ir ao mercado'
	})
	componente.vm.criar = function() {
		componente.setData({
			estado: 'Carregando...'
		})
	}
	componente.update()
	const botao = componente.find('input[type=submit]')[0]
	botao.trigger('click')
	t.is(botao.hasAttribute('disabled', 'disabled')		, true)
})