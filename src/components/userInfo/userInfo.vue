<template>
	<div class="g-bd">
		<cellContent listName="我的音乐" listCount="28">
			<div slot="icon">&#xe620;</div>
		</cellContent>
		<cellContent listName="最近播放" listCount="18">
			<div slot="icon">&#xe739;</div>
		</cellContent>
		<cellContent listName="我的电台" listCount="2">
			<div slot="icon">&#xe739;</div>
		</cellContent>
		<cellContent listName="我的收藏" listCount="71">
			<div slot="icon">&#xe739;</div>
		</cellContent>
	</div>
</template>

<script>
	import cellContent from '../cellContent/cellContent'
	
	export default {
		name: 'userInfo',
		components: {
			cellContent
		}
	}
</script>

<style scoped>
	@import './userInfo.css';
	@import '../../icon/iconfont.css';
</style>