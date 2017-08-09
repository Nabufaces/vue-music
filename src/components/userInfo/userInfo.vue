<template>
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
		<menuList listName="我创建的歌单" listCount="1" :list="listSong">
		</menuList>
	</div>
</template>

<script>
	import cellContent from '../cellContent/cellContent'
	import menuList from '../menuList/menuList'
	import background from '../../assets/background.jpg'
	
	export default {
		name: 'userInfo',
		components: {
			cellContent,
			menuList
		},
		data() {
			return {
				listSong: [
					{
						img: background,
						name: '我喜欢的音乐',
						count: 74
				}]
			}
		}
	}
</script>

<style scoped>
	@import './userInfo.css';
	@import '../../icon/iconfont.css';
</style>