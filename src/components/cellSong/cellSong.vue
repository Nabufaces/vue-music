<template>
	<div class="m-bd">
		<div class="m-img">
			<img :src="imgSrc">
		</div>
		<div class="m-ct">
			<span>{{listName}}</span>
			<span>{{listCount}}首</span>
			<i class="iconfont">&#xe872;</i>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cellContent',
		props: {
			imgSrc: {
				type: String,
				required: true
			},
			listName: {
				type: String,
				required: true
			},
			listCount: String
		}
	}
</script>

<style scoped>
	@import './cellSong.css';
	@import '../../icon/iconfont.css';
</style>
