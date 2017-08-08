<template>
	<div class="m-bd">
		<i class="m-icon iconfont">
			<slot name="icon">
			</slot>
		</i>
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
			listCount: String
		},
		data() {
			return {
				name: '',
				count: 0
			}
		},
		created() {
			this.name = this.listName;
			this.count = this.listCount;
		}
	}
</script>

<style scoped>
	@import './cellContent.css';
	@import '../../icon/iconfont.css';
</style>
