<template>
    <div>
        <p><label>{{ titulo }}</label></p>
        <input v-if="tipo == 'senha'" type="password" v-model="valor">
        <input v-if="tipo == null" type="text" v-model="valor">
    </div>
</template>

<script>
export default{
	name: 'lv-input',
	data() { return { valor: '' } },
	props: ['titulo', 'tipo'],
}
</script>