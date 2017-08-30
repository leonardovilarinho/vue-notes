<template>
	<li>
		<button @click="apagar()">Apagar</button>
		{{ nota.content }}
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
					.then(r => {})
				.catch( e => {} )
		}
	}
}
</script>