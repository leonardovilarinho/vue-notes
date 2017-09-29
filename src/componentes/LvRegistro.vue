<template>
    <div>
        <h2>Registre-se no sistema</h2>
        <hr>

        <lv-input titulo="Nome">
        	<input type="text" v-model="usuario.nome">
        </lv-input>

        <lv-input titulo="Email">
        	<input type="email" v-model="usuario.email">
        </lv-input>

        <lv-input titulo="Senha">
        	<input type="password" v-model="usuario.senha">
        </lv-input>

        <br>
        <input @click='registrar' type="submit" :value="estado" :disabled="estado != 'Registrar'">
    </div>
</template>

<script>
import Usuario from './../servicos/usuario'
export default{
	name: 'lv-registro',
	data() { return { estado: 'Registrar', usuario : {nome: '', email: '', senha: ''} } },
	methods: {
		registrar() {
			this.estado = 'Carregando...'
			Usuario.registrar( this.usuario ).then(resposta => {
				if(resposta.data.sucesso) {
					alert('Registrado com sucesso')
					this.$router.replace('/')
				}
				else
					this.estado = 'Registrar'
			}).catch( e => console.log(e) )
		},
	}
}
</script>