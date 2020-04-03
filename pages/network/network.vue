<template>
	<view class="root_view">
		<scroll-view scroll-y="true" style="height: 100%;">
			<view>
				<button type="primary" plain="true" size="mini" @click="request">
					发起请求
				</button>
			</view>

			<text style="color:#DD524D;">
				{{status}}
			</text>
			<view class="content" v-for="(item,i) in listContent" v-bind:key=i>
				<text>{{item.content}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'hahah',
				content: '',
				listContent: []
			}
		},
		methods: {
			request() {
				uni.showLoading({
						title: '请求数据中...',
					}),
					console.log("按钮已点击"),
					uni.request({
						url: 'http://v.juhe.cn/joke/content/list.php?sort=asc&page=&pagesize=3&time=1418816972&key=60fbc4de5e9c94872a10268487583390',
						//成功回调
						success: res => {
							uni.hideLoading();
							this.status = '请求数据成功!!';
							console.log(res);
							let list = this.setTime(res.data.result.data);
							this.content = res.data.result.data[0].content;
							this.listContent = this.listContent.concat(list);
							console.log("请求成功...")
						},
						fail: function(res) {
							uni.hideLoading();
							console.log("请求失败...")
						}
					})
			},
			setTime: function(items) {
				var newItems = [];
				items.forEach(e => {
					newItems.push({
						content: e.content,
						hashId: e.hashId,
						unixtime: e.unixtime,
						updatetime: e.updatetime,
					});
				});
				return newItems;
			}
		}
	}
</script>

<style>
	.content {
		background-color: #FFFFFF;
		justify-content: space-around;
		margin-top: 36rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		padding: 36rpx;
	}
</style>
