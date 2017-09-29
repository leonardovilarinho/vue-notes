<template>
    <ul style="text-align: left">
    	<lv-item-nota v-for="(nota, ch) in notas" :key="ch" :nota="nota">
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
	mounted() {
		this.$bus.$on('atualizacao', this.atualizar)
		this.atualizar()
	},
	methods: {
		atualizar() {
			Nota.listar( this.campos ).then(resposta => {
				if(resposta.data.sucesso)
					this.notas = resposta.data.notas
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