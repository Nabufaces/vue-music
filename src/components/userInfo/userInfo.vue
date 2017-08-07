<template>
	<div class="g-bd">
		<cellContent listName="我的音乐" listCount="28"></cellContent>
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