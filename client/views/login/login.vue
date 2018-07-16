<template>
  <div>
  <form class="Login-form" @submit="doSubmit">
  <h1>
  <span>Login</span>
  <span  class="error-msg"  v-show="errorMsg">{{errorMsg}}</span>
  </h1>
  <input type="text" placeholder="User" class="loginInput" v-model="username"/>
  <input type="password" placeholder="Password" autocomplete="new-password" class="loginInput" v-model="password"/>
  <button type="submit" class="login-button">提交</button>  
  </form>  
  </div>
</template>
<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      errorMsg:''
    }
  },
  methods:{
    doSubmit(e){
      e.preventDefault()
      if(this.validate()){
        //调用接口
      }
    },
    validate(){
      if(!this.username.trim()){
        this.errorMsg='用户名不能为空'
        return false
      }
      if(!this.password.trim()){
        this.errorMsg='密码不能为空'
        return false
      }
      this.errorMsg=''
      return true
    }
  }
   /*data(){
    return{
      name:'jerry',//用于被beforeRouteEnter中next设置的回调函数调用，以说明回调函数的参数vm就是生成的新组件的引用
    }
  },
  beforeCreate(){
    console.log('before creat')
  },
  created(){
    console.log('created')
  },
  beforeMount(){
    console.log('beforemount')

  },
  beforeRouteEnter:(to,from,next)=>{
    console.log('before route enter')
    next((vm)=>{
      console.log(vm.name)
      })//next中的函数是一个回调函数，在afterEach之后被调用，因此在此函数内可以使用this，
      //但是，在函数之外却不能使用，因为此时新组件还未生成
  },

  beforeRouteUpdate:(to,from,next)=>{
    console.log('before route update')
    next()
  },
  //此处可使用this
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //这样处理可以节省资源，但是，这也意味着组件的生命周期钩子不会再次被调用

  beforeRouteLeave:(to,from,next)=>{
    console.log('before route leave')
    next()
  }//此处可使用this
  // 导航离开该组件的对应路由时调用
  //切换路由时最先被调用
   */
} 
</script>

<style lang="stylus" scoped>
.Login-form
  display flex
  flex-direction column
  align-items flex-start
  padding 1em 2.5em
  height 20em
  width 30em
  border 1px solid blue
  margin 0 auto
  background white
  box-shadow 1px 2px 3px
.loginInput
  margin auto auto
  padding 0 1em 
  height 3em
  width 22.8em
  
.login-button
  appearance none
  width 25em
  line-height 3em
  text-align center
  background-color #0d60c7
  color #eaeaea
  cursor pointer
  border-color #0d60c7
  transition all .3s
  margin auto auto
  &:hover
    color #fff
    background-color darken(#0d60c7, 10)
.error-msg
  font-size 12px
  color red
</style>
