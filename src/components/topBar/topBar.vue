<template>
	<div class="g-hd">
		<div class="m-lf">
			<slot name="left"></slot>
		</div>
		<div class="m-mn">
			<slot name="center"></slot>
		</div>
		<div class="m-rt">
			<slot name="right"></slot>
		</div>
		<!-- <div class="m-lf">
			<i class="iconfont" @click="showMoreModal">&#xe699;</i>
		</div>
		<div class="m-mn">
			<i class="iconfont">&#xe620;</i>
			<i class="iconfont">&#xe662;</i>
			<i class="iconfont">&#xe61a;</i>
		</div>
		<div class="m-rt">
			<i class="iconfont">&#xe61d;</i>
		</div> -->
	</div>
</template>
<script>
	export default {
		name: 'topBar',
		methods: {
			showMoreModal() {
				this.$store.commit('showMoreModal');
			}
		}
	}
</script>

<style src="./topBar.css" scoped></style>