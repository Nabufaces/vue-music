<template>
	<div class="g-moreModal" v-if="showFlag" @click.self="closeModal">
	<!-- 
	.self -只当事件是从侦听器绑定的元素本身触发时才触发回调 
	-->
		<div class="m-ct">
			<div class="cell">
				<div class="cell-icon">
					<i class="iconfont">&#xe602;</i>
				</div>
				<div class="cell-tt">
					<span>新建歌单</span>
				</div>
			</div>
			<div class="cell">
				<div class="cell-icon">
					<i class="iconfont">&#xe62a;</i>
				</div>
				<div class="cell-tt">
					<span>管理歌单</span>
				</div>
			</div>
			<div class="cell">
				<div class="cell-icon">
					<i class="iconfont">&#xe645;</i>
				</div>
				<div class="cell-tt">
					<span>我的歌单云盘</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'moreModal',
		data() {
			return {
				showFlag: true
			}
		},
		methods: {
			closeModal() {
				this.$data.showFlag = false;
				this.$store.commit('closeMoreModal');
			}
		}
	}
</script>

<style scoped>
	@import './moreModal.css';
	@import '../../../icon/iconfont.css';
</style>