<template>
    <div>
    	<lv-input ref="conteudo" titulo=""></lv-input>
        <input @click='criar' type="submit" :value="estado" :disabled="estado != 'Criar'">
	</div>
</template>

<script>
import Nota from './../servicos/nota'
export default{
	name: 'lv-nova-nota',
	data() { return { estado: 'Criar', content: '' } },
	methods: {
		criar() {
			if(this.$refs['conteudo'].valor != '') {
				this.estado = 'Carregando...'

				Nota.criar( this.campos ).then(resposta => {
					if(resposta.data.success)
						this.$refs['conteudo'].valor = ''
					this.estado = 'Criar'
				}).catch( e => this.estado = 'Criar' )
			}
		}
	},
	computed: {
		campos() {
			return {
				content: this.$refs['conteudo'].valor,
				user_id: this.$store.state.usuario.id
			}
		},
	}
}
</script>