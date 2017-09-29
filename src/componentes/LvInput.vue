<template>
    <fieldset style="width: 20%; margin-left: 40%">
    	<legend>{{ titulo }}</legend>
    	<slot />
    </fieldset>
</template>

<script>
export default{
	name: 'lv-input',
	props: ['titulo'],
}
</script>