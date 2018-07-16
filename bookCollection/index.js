import Vue from 'vue'
import app from './app.vue'
import './styles/global.styl'
import Router from './route_config/router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = Router()

new Vue({
    router,
    render:(h)=>h(app)
}).$mount('#root');