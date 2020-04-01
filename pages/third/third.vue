<template>
	<view>
		<view>
			<text>
				三级页面展示
			</text>
		</view>
		<view>
			<text @click="backByNothing">
				点击返回上一页面(不带参数)
			</text>
		</view>
		<view>
			<text @click="backByParam">
				点击返回上一页面(带参数)
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad:function(param){
			console.log(param.user),
			console.log(param.age)
		},
		data() {
			return {
				
			}
		},
		methods: {
			backByNothing(){
				uni.navigateBack({
					
				})
			},
			backByParam(){
				uni.navigateTo({
					url:"../test/test?user=dawei&age=24"
				})
			}
		}
	}
</script>

<style>

</style>
