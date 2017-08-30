<template>
    <div>
        <h2>Entre no sistema</h2>
        <router-link to="/registrar">Registre-se</router-link>
        <hr>
        <lv-input ref="email" titulo="Email"></lv-input>
        <lv-input ref="senha" titulo="Senha" tipo="senha"></lv-input>
        <br>
        <input @click='logar' type="submit" :value="estado" :disabled="estado != 'Entrar'">
    </div>
</template>

<script>
import Usuario from './../servicos/usuario'
export default{
	name: 'lv-login',
	data() { return { estado: 'Entrar' } },
	methods: {
		logar() {
			this.estado = 'Carregando...'
			Usuario.logar( this.campos ).then(resposta => {
				if(resposta.data.success) {
					this.$store.dispatch('logarUsuario', resposta.data.user)
					this.$router.replace('/notas')
				}
				else
					this.estado = 'Entrar'
			}).catch( e => this.estado = 'Entrar' )
		},
	},
	computed: {
		campos() {
			return {
				email: this.$refs['email'].valor,
				password: this.$refs['senha'].valor
			}
		},
	}
}
</script>