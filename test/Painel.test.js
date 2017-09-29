import test from 'ava'
import Comp from './../src/componentes/LvPainel.vue'
import mockvuex from './mockvuex'

let componente = mockvuex.vuex(Comp)

test('verificando nome no painel', t => {
	const span = componente.find('span')[0]
	t.is(span.text(), 'Painel logado com Leonardo')
})

test('saindo do sistema com mock, verificando se botao está lá', t => {
	let acao = ''
	componente.vm.sair = function() {
		acao = 'saiu'
	}
	componente.update()
	componente.find('button')[0].trigger('click')
	t.is(acao, 'saiu')
})

