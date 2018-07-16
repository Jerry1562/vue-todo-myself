import VueRouter from 'vue-router'
import routes from './routess'

export default ()=>{
    return new VueRouter({
        routes:routes,
    })
}