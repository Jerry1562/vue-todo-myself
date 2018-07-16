import login from '../components/login/login.vue'
import homepage from '../components/homepage/home.vue'
import header from '../components/decoration/header.vue'
import footer from '../components/decoration/footer.vue'
export default [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        components:{
            default:login,
            header:header,
            footer:footer
        }
    },
    {
        path:'/mainpage',
        components:{
            default:homepage,
            header:header
        }
    }
]