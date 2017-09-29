import test from 'ava'
import { mount } from 'avoriaz'
import Input from './../src/componentes/LvInput.vue'

let componente = mount(Input, {
  propsData: {
  	titulo: 'Nome'
  }
})

test('componente sendo inicializado com titulo Nome', t => {
	const titulo = componente.find('legend')[0]
	t.is( titulo.text(), 'Nome' )
})