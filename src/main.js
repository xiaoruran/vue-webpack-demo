
import 'bootstrap/dist/css/bootstrap.css'

// import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue'
import App from './vue/App.vue'

import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

var vm=new Vue({
    el:"#app",
    render:c=>c(App)

})