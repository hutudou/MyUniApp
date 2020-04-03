<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	/*
	设置全屏颜色为灰色#F3F3F3 请在第二级view中加入该class
	*/
	.root_view {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #F3F3F3;
		z-index: -1;
	}
</style>
