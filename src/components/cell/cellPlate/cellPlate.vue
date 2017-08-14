<template>
	<div class="m-cellPlate">
		<div class="m-hd"></div>
		<div class="m-bd" v-for="item in list">
			<div class="lf">
				<i class="iconfont" v-html="item.icon_left"></i>
			</div>
			<div class="ct">
				<span>{{item.title}}</span>
				<i class="iconfont">&#xe86f;</i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cellPlate',
		props: {
			list: Array
		},
		created: function() {
			let list = this.$props.list;
			for(let item of list) {
				item.icon_left = this.$data.iconClass[item.icon_left]
			}
		},
		data() {
			return {
				iconClass: {
					email: "&#xe60f;",
					member: "&#xe68b;",
					mall: "&#xe604;",
					settings: "&#xe6c8;",
					scan: "&#xe769;",
					skin: "&#xe970;",
					light: "&#xe6c5;",
					time: "&#xe641;"
				}
			}
		}
	}
</script>

<style src="./cellPlate.css" scoped></style>