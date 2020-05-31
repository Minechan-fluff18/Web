<template>
	<div id = "ListOfImg">
		<SingleImg 
			v-for = "image of images"
			v-bind:image = "image"
			v-on:fullscreen-image = "fullscreenImage"
			v-on:delete-image = "deleteImage"
		/>
	</div>
</template>

<script>
import SingleImg from "@/components/SingleImg"
export default {
	props: ['images'],
	components: {
		SingleImg
	},
	methods: {
		fullscreenImage(id) {
			this.$emit('fullscreen-image', id);
		},
		deleteImage(id) {
			this.$emit('delete-image', id);
		}
	}
}
</script>

<style>
#ListOfImg {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>