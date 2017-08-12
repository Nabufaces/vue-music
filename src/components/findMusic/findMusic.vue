<template>
	<div>
		<topBar>
			<div slot="left">
				<i class="iconfont">&#xe869;</i>
			</div>
			<div slot="center">
				<input class="input" placeholder="搜索音乐、歌词、电台" />
			</div>
			<div slot="right">
				<i class="iconfont">&#xe6c2;</i>
			</div>
		</topBar>
	</div>
</template>

<script>
	import topBar from '../topBar/topBar'
	export default {
		name: 'findMusic',
		components: {
			topBar
		}
	}
</script>

<style scoped>
	@import './findMusic.css';
	@import '../../icon/iconfont.css';
</style>