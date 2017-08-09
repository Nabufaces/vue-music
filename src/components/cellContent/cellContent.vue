<template>
	<div class="m-cellContent">
		<i class="m-icon iconfont">
			<slot name="icon">
			</slot>
		</i>
		<div class="m-ct">
			<span> {{listName}} </span>
			<span v-if="listCount !== undefined"> ({{listCount}})</span>
			<i class="iconfont">&#xe86f;</i>
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
	@import './cellContent.css';
	@import '../../icon/iconfont.css';
</style>
