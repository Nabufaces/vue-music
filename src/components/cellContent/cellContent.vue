<template>
	<div class="m-bd">
		<i class="m-icon" :class="iconInfo"></i>
		<div class="m-ct">
			<span> {{listName}} </span>
			<span v-if="listCount !== undefined"> ({{listCount}})</span>
			<i class="iconfont">&#xe6a5;</i>
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
			listCount: {
				type: Number
			},
			iconInfo:{
				type: String
			}
		},
		data() {
			return {
				listName: '',
				listCount: 0,
				iconInfo: ''
			}
		},
		created() {
			this.listName = this.listName;
			this.listCount = this.listCount;
			this.iconInfo = this.iconInfo;
		}
	}
</script>

<style scoped>
	@import './cellContent.css';
	@import '../../icon/iconfont.css';
</style>
