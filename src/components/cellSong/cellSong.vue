<template>
	<div class="m-bd">
		<div class="m-img">
			<img src="">
		</div>
		<div class="m-ct">
			<p>{{listName}}</p>
			<p>{{listCount}}首</p>
			<i class="iconfont">
				<slot name="left-icon"></slot>
			</i>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cellContent',
		props: {
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
