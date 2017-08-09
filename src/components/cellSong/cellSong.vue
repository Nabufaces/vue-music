<template>
	<div class="m-cellSong">
		<div class="m-img">
			<img :src="imgSrc">
		</div>
		<div class="m-ct">
			<div class="m-tt">
				<p>{{listName}}</p>
				<i class="iconfont">&#xe603;</i><span>{{listCount}}首</span>
			</div>
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
