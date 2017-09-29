import test from 'ava'
import Comp from './../src/componentes/LvListaNotas.vue'
import mockvuex from './mockvuex'

let componente = mockvuex.vuex(Comp)

test('lista com 0 elementos', t => {
	const lista = componente.find('ul')[0]
	t.is(lista.find('li').length, 0)
})

test('lista com 2 elementos', t => {
	componente.setData({
		notas: [
			{conteudo: 'nota 1', id: 1},
			{conteudo: 'nota 2', id: 2},
		]
	})
	const lista = componente.find('ul')[0]
	t.is(lista.find('li').length, 2)
})