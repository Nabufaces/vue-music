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
						<img :src="list.user">
						<div class="m-name">
							<span>{{list.userName}}</span><br>
							<span class="label">Lv.{{list.level}}</span>
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
						<span>{{list.dynamic}}</span>
					</div>
					<hr class="line" />
					<div class="cell">
						<p>关注</p>
						<span>{{list.follow}}</span>
					</div>
					<hr class="line" />
					<div class="cell">
						<p>粉丝</p>
						<span>{{list.fans}}</span>
					</div>
					<hr class="line" />
					<div class="cell">
						<i class="iconfont">&#xe678;</i>
						<p>我的资料</p>
					</div>
				</div>
			</div>
			<div v-for="item in list.cellList">
				<cellPlate :list="item"></cellPlate>
			</div>
		</div>
	</div>
	
</template>

<script>
	import topBar from '../topBar/topBar'
	import cellPlate from '../cell/cellPlate/cellPlate'
	export default {
		name: 'userAccount',
		created() {
			this.$http.get('./static/mock/async/userAccount/result.json').then((response) => {
				this.$data.list = response.data;
			}).catch((response) => {
				console.log(response)
			})
		},
		data() {
			return {
				list: {}
			}
		},
		components: {
			topBar,
			cellPlate
		}
	}
</script>

<style src="./userAccount.css" scoped></style>