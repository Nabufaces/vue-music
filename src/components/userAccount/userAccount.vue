<template>
	<div>
		<topBar>
			<div slot="center">账号</div>
			<div slot="right">
				<i class="iconfont">&#xe6c2;</i>
			</div>
		</topBar>
		<div class="g-bd">
			<div class="m-userInfo">
				<div class="m-user">
					<div class="m-lf">
						<img :src="user">
						<div class="m-name">
							<span>{{userName}}</span><br>
							<span class="label">Lv.{{level}}</span>
						</div>
					</div>
					<div class="m-rt">
						<button class="btn">
							<i class="iconfont">&#xe643;</i><span>签到</span>
						</button>
					</div>
				</div>

				<div class="m-info">
					<div class="cell">
						<p>动态</p>
						<span>0</span>
					</div>
					<hr class="line" />
					<div class="cell">
						<p>关注</p>
						<span>3</span>
					</div>
					<hr class="line" />
					<div class="cell">
						<p>粉丝</p>
						<span>10</span>
					</div>
					<hr class="line" />
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
	</div>
	
</template>

<script>
	import topBar from '../topBar/topBar'
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
			topBar,
			cellPlate
		}
	}
</script>

<style scoped>
	@import './userAccount.css';
	@import '../../icon/iconfont.css';
</style>