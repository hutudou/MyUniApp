import Vue from 'vue'
import App from './App'
import xflSelect from '../../components/xfl-select/xfl-select.vue';
Vue.config.productionTip = false
Vue.component('xflSelect', xflSelect);

App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
