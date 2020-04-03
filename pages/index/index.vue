<template>
	<view class="root_view">
		<scroll-view scroll-y="true" style="height: 100%;">
			<view class="view_list" v-for="(item,index) in demos" v-bind:key=index @click="goDetail(index)">
				<text>
					{{item}}
				</text>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	var temp;
	export default {
		data() {
			return {
				lists: ['A', 'B', 'C', 'D', 'E'],
				show: [{
						name: 'awei',
						age: '18'
					},
					{
						name: 'xiaoming',
						age: '20'
					},
					{
						name: '小花',
						age: '28'
					},
					{
						name: '龙少',
						age: 45
					}
				],
				demos: [
					'1、页面跳转功能',
					'2、各种button',
					'3、input的使用',
					'4、网络请求以及列表实现',
					'5、下拉框的使用'
				]
			}
		},

		onLoad: function(e) {
			setTimeout(function() {
				//显示小红点
				uni.showTabBarRedDot({
					index: 0,
					success: function() {
						uni.showToast({
							title: "Hello World!!!",
							duration: 3000
						})
					}
				});
			}, 3000);
			console.log(e.user),
				console.log(e.age)
			var temp;
		},
		methods: {
			showMessage() {
				uni.showToast({
					title: "这是测试的文字",
					duration: 1000
				})
			},
			goDetail(index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '../test/test?user=awei&age=18'
						})
						break;
					case 1:
						uni.navigateTo({
							url: '../button/button'
						})
						break;
					case 2:
						uni.navigateTo({
							url: '../input/input'
						})
						break;
					case 3:
						uni.navigateTo({
							url: '../network/network'
						})
						break;
					case 4:
					uni.navigateTo({
						url:'../selecter/selecter'
					})
					break
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.mylist {
		width: 100%;
	}

	.temp {
		width: 100%;
		height: auto;
	}
	.view_list {
		text-align: center;
		background-color: #FFFFFF;
		margin-top:25rpx;
		margin-bottom: 25rpx;
		margin-left: 36rpx;
		margin-right: 36rpx;
		
		padding-top: 18rpx;
		padding-bottom: 18rpx;
		padding-left: 36rpx;
		padding-right: 36rpx;
	}
</style>
