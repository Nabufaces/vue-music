<template>
	<div class="g-btm">
		<div class="m-ct">
			<router-link to="/findMusic">
				<i class="iconfont">&#xe601;</i><br>
				<span>发现音乐</span>
			</router-link>
		</div>
		<div class="m-ct">
			<router-link to="/myMusic">
				<i class="iconfont">&#xe620;</i><br>
				<span>我的音乐</span>
			</router-link>
		</div>
		<div class="m-ct">
			<router-link to="/findFriends">
				<i class="iconfont">&#xe61a;</i><br>
				<span>朋友</span>
			</router-link>
		</div>
		<div class="m-ct">
			<router-link to="/userAccount">
				<i class="iconfont">&#xe688;</i><br>
				<span>账号</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bottomBar'
	}
</script>

<style src="./bottomBar.css" scoped></style>