<template>
	<view>
		<view style="width: 80%; margin: auto; margin-bottom: 20px;">
			<xfl-select :list="list" :clearable="false" :showItemNum="5" :listShow="false" :isCanInput="true" :style_Container="'height: 50px; font-size: 16px;'"
			 :placeholder="'placeholder'" :initValue="'苹果'" :selectHideType="'hideAll'" @change="temp">
			</xfl-select>
		</view>
		<view style="width: 80%; margin: auto; margin-bottom: 20px;">
			<xfl-select :list="list1" :clearable="false" :showItemNum="5" :listShow="false" :isCanInput="true" :style_Container="'height: 50px; font-size: 16px;'"
			 :placeholder="'placeholder'" :initValue="'苹果'" :selectHideType="'hideAll'" @change="temp">
			</xfl-select>
		</view>
		<view>
			<button size="mini" type="primary" @click="change">
				点击更改数据源
			</button>
		</view>
	</view>
</template>

<script>
	import xflSelect from '../../components/xfl-select/xfl-select.vue'; //导入
	export default {
		data() {
			return {
				list: [ //要展示的数据
					'苹果',
					{
						value: '香蕉',
						disabled: true
					},
					'葡萄',
					'芒果',
					'大白菜',
				],
				list1:[
					'A',
					'B',
					'C',
					'D',
					'E'
				]
			}
		},
		components: {
			xflSelect
		}, //注册为子组件
		methods: {
			change() {
				this.list = [
					'火龙果',
					'哈密瓜',
					'西瓜',
					'胡萝卜',
					'芒果'
				]
			},
			temp(s){
				console.log(s);
			}
		}
	}
</script>

<style>

</style>
