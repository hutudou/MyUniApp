<template>
	<view>
		<view v-for="(item,index) in lists" v-bind:key=index>
			<text>{{item}}</text>
		</view>

		<view v-for="(item,i) in show" v-bind:key=i>
			<text>
				{{item.name}}--{{item.age}}
			</text>
		</view>

		<text @click="showMessage">
			测试点击
		</text>
		<view>
			<text @click="goToOtherPage">
				点击跳转
			</text>
		</view>
		<view>
			<text @click="goToNetwork">
				基本网络请求
			</text>
		</view>
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
			goToOtherPage() {
				uni.navigateTo({
					url: '../test/test?user=awei&age=18'
				})
			},
			goToNetwork(){
				uni.navigateTo({
					url:'../network/network'
				})
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
</style>
