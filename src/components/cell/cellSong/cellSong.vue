<template>
	<router-link :to="{path: '/myMusic/musicList',query: {id: list.id}}" class="m-cellSong" tag="div">
		<div class="m-img">
			<img :src="list.img">
		</div>
		<div class="m-ct">
			<div class="m-tt">
				<p>{{list.name}}</p>
				<i class="iconfont">&#xe603;</i>
				<span>{{list.count}}首  
					<span v-show="list.authorName !== undefined"> by {{list.authorName}}
					</span>
				</span>
			</div>
			<i class="iconfont">&#xe872;</i>
		</div>
	</router-link>
</template>

<script>
	export default {
		name: 'cellContent',
		props: {
			list: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style src="./cellSong.css" scoped></style>

