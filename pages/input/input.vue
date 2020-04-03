<template>
		<view class="uni-form-item uni-column">
			<view class="title"><text class="uni-form-item__title">可自动聚焦的 input</text></view>
			<view class="uni-input-wrapper">
				<input class="uni-input" placeholder="自动获得焦点"  focus/>
			</view>
			<view style="margin-top: 15rpx;width: 100%;	">
				<input id="customInput" class="uni-input" password  placeholder="自定义样式input"/>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

#customInput{
	padding: 15upx; 
	border-style: solid; 
	border-radius: 5%; 
	border-color: #007AFF;
	width: 50%;
}
</style>
