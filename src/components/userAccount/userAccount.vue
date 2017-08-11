<template>
	<div class="g-bd">
		<div class="m-userInfo">
			<div class="m-user">
				<img :src="user">
				<div class="m-userName">
					<span>{{userName}}</span><br>
					<span class="label">Lv.{{level}}</span>
				</div>
				<button class="btn"><i class="iconfont">&#xe643;签到</i></button>
			</div>
			<div class="m-info">
				<div class="cell">
					<p>动态</p>
					<span>0</span>
				</div>
				<div class="cell">
					<p>关注</p>
					<span>3</span>
				</div>
				<div class="cell">
					<p>粉丝</p>
					<span>10</span>
				</div>
				<div class="cell">
					<i class="iconfont">&#xe678;</i>
					<p>我的资料</p>
				</div>
			</div>
		</div>
		<cellPlate :list="list_1"></cellPlate>
		<cellPlate :list="list_2"></cellPlate>
		<cellPlate :list="list_3"></cellPlate>
	</div>
</template>

<script>
	import cellPlate from '../cell/cellPlate/cellPlate'
	import user from '../../assets/user.jpg'
	export default {
		name: 'userAccount',
		data() {
			return {
				userName: 'Nabufaces',
				user: user,
				level: 5,
				list_1: [{
					icon_left: "email",
					title: "我的消息"
				}],
				list_2: [{
					icon_left: "member",
					title: "会员中心"
				},{
					icon_left: "mall",
					title: "商城"
				}],
				list_3: [{
					icon_left: "settings",
					title: "设置"
				},{
					icon_left: "scan",
					title: "扫一扫"
				},{
					icon_left: "skin",
					title: "个性换肤"
				},{
					icon_left: "light",
					title: "夜间模式"
				},{
					icon_left: "time",
					title: "定时关闭"
				}]
			}
		},
		components: {
			cellPlate
		}
	}
</script>

<style scoped>
	@import './userAccount.css';
	@import '../../icon/iconfont.css';
</style>