<template>
    <div>
        <h2>Registre-se no sistema</h2>
        <hr>
        <lv-input ref="nome" titulo="Nome"></lv-input>
        <lv-input ref="email" titulo="Email"></lv-input>
        <lv-input ref="senha" titulo="Senha" tipo="senha"></lv-input>
        <br>
        <input @click='registrar' type="submit" :value="estado" :disabled="estado != 'Registrar'">
    </div>
</template>

<script>
import Usuario from './../servicos/usuario'
export default{
	name: 'lv-registro',
	data() { return { estado: 'Registrar' } },
	methods: {
		registrar() {
			this.estado = 'Carregando...'
			Usuario.registrar( this.campos ).then(resposta => {
				if(resposta.data.success) {
					alert('Registrado com sucesso')
					this.$router.replace('/')
				}
				else
					this.estado = 'Registrar'
			}).catch( e => this.estado = 'Registrar' )
		},
	},
	computed: {
		campos() {
			return {
				name: this.$refs['nome'].valor,
				email: this.$refs['email'].valor,
				password: this.$refs['senha'].valor
			}
		},
	}
}
</script>