<template>
	<div>
		<topBar>
			<div slot="left">更多</div>
			<div slot="center">我的音乐</div>
			<div slot="right">
				<i class="iconfont">&#xe6c2;</i>
			</div>
		</topBar>
		<div class="g-bd">
			<cellContent listName="我的音乐" listCount="28">
				<div slot="icon">&#xe620;</div>
			</cellContent>
			<cellContent listName="最近播放" listCount="18">
				<div slot="icon">&#xe612;</div>
			</cellContent>
			<cellContent listName="我的电台" listCount="2">
				<div slot="icon">&#xe67d;</div>
			</cellContent>
			<cellContent listName="我的收藏" listCount="71">
				<div slot="icon">&#xe60b;</div>
			</cellContent>
			<menuList listName="我创建的歌单" :listCount="list.listSong.length" :list="list.listSong">
			</menuList>
			<menuList listName="我收藏的歌单" :listCount="list.collectSong.length" :list="list.collectSong">
			</menuList>
		</div>
	</div>
	
</template>

<script>
	import topBar from '../topBar/topBar'
	import cellContent from '../cell/cellContent/cellContent'
	import menuList from '../menuList/menuList'
	
	export default {
		name: 'myMusic',
		components: {
			topBar,
			cellContent,
			menuList
		},
		created() {
			this.$http.get('./static/mock/async/myMusic/result.json').then((response) => {
				this.$data.list = response.data;
			}).catch((response) => {
				console.log(response)
			})
		},
		data() {
			return {
				list: {}
			}	
		}
	}
</script>

<style src="./myMusic.css" scoped></style>