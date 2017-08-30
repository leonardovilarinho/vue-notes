<template>
    <ul style="text-align: left">
    	<lv-item-nota v-for="nota in notas" :nota="nota">
    	</lv-item-nota>
	</ul>
</template>

<script>
import Nota from './../servicos/nota'
import LvItemNota from './LvItemNota.vue'
export default{
	name: 'lv-lista-nota',
	components: {LvItemNota},
	data() { return { notas: {} } },
	mounted() { this.atualizar() },
	updated() { this.atualizar() },
	methods: {
		atualizar() {
			Nota.listar( this.campos ).then(resposta => {
				if(resposta.data.success)
					this.notas = resposta.data.notes
			}).catch( e => {} )
		}
	},
	computed: {
		campos() {
			return this.$store.state.usuario.id
		},
	}
}
</script>