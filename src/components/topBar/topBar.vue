<template>
	<div class="g-hd">
		<div class="m-lf">
			<i class="iconfont">&#xe699;</i>
		</div>
		<div class="m-mn">
			<i class="iconfont">&#xe620;</i>
			<i class="iconfont">&#xe662;</i>
			<router-link to="/">
				<i class="iconfont">&#xe61a;</i>
			</router-link>
		</div>
		<div class="m-rt">
			<i class="iconfont">&#xe61d;</i>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'topBar'
	}
</script>

<style scoped>
  @import './topBar.css';
  @import '../../icon/iconfont.css';
</style>
