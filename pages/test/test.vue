<template>
	<view>
		<view>
			<text>
				跳转成功,这是测试的页面
			</text>
		</view>
		<view>
			<text @click="back">
				点击返回上一个页面(无参数)
			</text>
		</view>
		<view>
			<text @click="gotoThirdPage">
				点击到第三个页面
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad: function(option) {
			console.log(option.user),
				console.log(option.age)
		},
		data() {
			return {
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				})
			},
			gotoThirdPage(){
				uni.navigateTo({
					url:"../third/third?user=awei&age=18"
				})
			}
		},
	}
</script>

<style>

</style>
