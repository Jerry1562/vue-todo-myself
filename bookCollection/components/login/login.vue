<template>
    <div>
        <form class="login-form" v-on:submit="doSubmit">
            <h1>
            <span>Login</span>
            <span class="error-msg" v-show="errorMsg">{{errorMsg}}</span>
            </h1>
            <input type="text" class="login-input" placeholder="Username" v-model="username"/>
            <input type="password" class="login-input" placeholder="Password" v-model="password"/>
            <button type="submit" class="login-button">登录</button>
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
                this.errorMsg="请输入用户名"
                return false
            }
            if(!this.password.trim()){
                this.errorMsg="请输入密码"
                return false
            }
            this.errorMsg=""
            return true
        }
    }
    
}
</script>

<style lang="stylus" scoped>
.login-form
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
.login-input
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
