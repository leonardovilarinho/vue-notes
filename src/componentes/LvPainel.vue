<template>
    <div>
        <span>Painel logado com {{ $store.state.usuario.nome }}</span>
        <button @click="sair">Sair</button>
        <hr>
        <lv-nova-nota></lv-nova-nota>
        <lv-lista-notas></lv-lista-notas>
	</div>
</template>

<script>
import LvNovaNota from './LvNovaNota.vue'
import LvListaNotas from './LvListaNotas.vue'
export default{
	name: 'lv-painel',
	components: {
		LvNovaNota,
		LvListaNotas
	},
	methods: {
		sair() {
			this.$store.dispatch('logarUsuario', { id: 0, nome: '', email: '' })
			this.$router.replace('/')
		}
	}
}
</script>