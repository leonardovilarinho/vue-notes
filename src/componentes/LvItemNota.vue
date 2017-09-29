<template>
	<li>
		<button @click="apagar()">Apagar</button>
		<span>{{ nota.conteudo }}</span>
	</li>
</template>

<script>
import Nota from './../servicos/nota'
export default{
	name: 'lv-item-nota',
	props: ['nota'],
	methods: {
		apagar() {
			if(confirm('Deseja realmente apagar a anotação?'))
				Nota.apagar( this.nota.id )
					.then(r => { this.$bus.$emit('atualizacao') })
				.catch(e => { alert('Erro ao apagar') })
		}
	}
}
</script>