<template>
	<div class="g-menu">
		<div class="m-hd" @click="showMenu">
			<i v-if="showFlag" class="iconfont">
				&#xe6a7;
			</i>
			<i v-else class="iconfont">
				&#xe86f;
			</i>
			<span> {{listName}} </span>
			<span v-if="listCount !== undefined"> ({{listCount}})</span>
		</div>
		<div v-if="showFlag" class="m-bd" v-for="item in list">
			<cellSong :list="item"></cellSong>
		</div>
	</div>
</template>

<script>
	import cellSong from '../cell/cellSong/cellSong'

	export default {
		name: 'menuList',
		components:{
			cellSong
		},
		props: {
			listName: {
				type: String,
				required: true
			},
			listCount: String,
			list: Array
		},
		data() {
			return {
				showFlag: true,
			}
		},
		methods: {
			showMenu: function() {
				this.$data.showFlag = !this.$data.showFlag;
			}
		}
	}
</script>

<style src="./menuList.css" scoped></style>