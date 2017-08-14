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
		<div class="m-nav">
			<router-link to="/findMusic/personalRecommend">
				<span>个性推荐</span>
			</router-link>
			<router-link to="/findMusic/songMenu">
				<span>歌单</span>
			</router-link>
			<router-link to="/findMusic/hostStation">
				<span>主播电台</span>
			</router-link>
			<router-link to="/findMusic/rankList">
				<span>排行榜</span>
			</router-link>
		</div>
		<router-view></router-view>
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

<style src="./findMusic.css" scoped></style>