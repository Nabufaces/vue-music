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
			<menuList listName="我创建的歌单" listCount="1" :list="listSong">
			</menuList>
			<menuList listName="我收藏的歌单" listCount="3" :list="collectSong">
			</menuList>
		</div>
	</div>
	
</template>

<script>
	import topBar from '../topBar/topBar'
	import cellContent from '../cell/cellContent/cellContent'
	import menuList from '../menuList/menuList'
	import download_1 from '../../assets/download_1.jpg'
	import collect_1 from '../../assets/collect_1.png'
	import collect_2 from '../../assets/collect_2.png'
	
	export default {
		name: 'myMusic',
		components: {
			topBar,
			cellContent,
			menuList
		},
		data() {
			return {
				listSong: [
					{
						img: download_1,
						name: '我喜欢的音乐',
						count: 74
				}],
				collectSong: [{
						img: collect_1,
						name: '高效率专注音乐',
						count: 50,
						authorName: 'uncleman'
				},{
						img: collect_2,
						name: 'Youtube神级翻唱',
						count: 100,
						authorName: 'Nabufaces'
				}]
			}
		}
	}
</script>

<style src="./myMusic.css" scoped></style>