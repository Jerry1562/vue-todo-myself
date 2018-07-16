<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
       <!--  <p>{{counted}}</p> -->
       <!--  <p>{{fullName}}</p> -->
        <!-- <p>{{counted2}}</p> -->
        <!-- <router-link to="/app">app</router-link> --><!-- router-link本质上就是一个a标签 ,为a标签添加事件修改默认的动作-->
        <!-- <router-link to="/login">login</router-link> --><!-- router-link的设置项在router对象中进行配置 -->
        <!-- <router-link to="/login/first">login first</router-link> --><!--此标签为了说明linkActiveClass跟linkExactActiveClass-->
        <!-- <router-link to="/login?a=123">login update</router-link> --><!--此标签为了说明导航守卫beforeRouteUpdate-->
        <!-- <todo></todo> -->
        <transition name="fade"><!-- transition标签包裹router-view为组件的切换增加动画效果 -->
        <router-view/><!-- 其实router-view的主要作用是占位，当我们切换不同路由的时候，路由加载的组件就会挂载到router-view上 -->
        </transition>
        <Footer></Footer>
        <!-- <router-view name="a"/> --><!--命名视图渲染位置-->
    </div>
</template>


<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import todo from './views/todo/todo.vue'
/* import {
        mapState,
        mapGetters,
        mapActions,
        mapMutations
        } from 'vuex' */

export default {
  components:{
      Header,
      Footer,
      todo
  },
  methods:{

  },
 /*  beforeCreate(){
      console.log('beforecreat')
  },
  created(){
      console.log('created')
  }, */
  /* mounted(){
      console.log(this.$store)

      //this.$store.dispatch('updateChangeAsync',{acount:5})//使用方法跟commit差不多，前面是类型字符串，后面是荷载对象，也可以使用对象写法
      this.$store.dispatch({
          type:'updateChangeAsync',
          acount:5
      })

      let i=0
      setInterval(
        ()=>{
          //this.$store.commit('updateChange',{acount:i++})//commit方法用于向store实例中state的某个属性提交更改，通过触发一个type为updateChange的mutation，进而调用它的回调函数,第一个参数为类型名称字符串，第二个参数为荷载，通常是一个对象
          this.$store.commit({                             //store实例存在于根节点之前，所有的子节点都可以通过this.$store访问
              type:'updateChange',
              acount:i++
              })//对象写法
        },                                    
        1000)

      
  }, */
  /* computed:{//下面使用了...语法糖，要添加babel-preset-stage-1插件处理此语法
            //两者在使用前，应该要先引入store对象中，其实，本质上是this.$store.getters和this.$store.state
      ...mapGetters({
          fullName:'fullName'//getters类似全局的computed属性，作用于state中的值,用于对state中的值进行运算，而且state中的值发生变化，结果自动同步更新
      }),                    //与state的区别在于，state是直取
      ...mapState({
          counted:'count',   //详细写法见备注
          counted2:(state)=>state.count2
      }) 
  } */
  /* mapState({           //不使用...语法糖的mapState
      counted:state=>state.count,//此处state参数就是vuex中的state对象，写法1
      //counted:'count'//写法2
      counted(state){//写法3
          return state.count+this.localData//在获取本地的值的时候，要使用函数写法，以便使用this
      } 
  }) */
  /* {                     //原始的写法
      fullName(){
          return this.$store.getters.fullName
      },
      counted(){
          return this.$store.state.count//取出store对象state属性中的值count，由此可以看出vuex其实充当了一个数据传递的中间人
          //数据的变化传给他，数据取出也是从他那里取，这就是数据的集中管理，解决了vue兄弟组件之间传递数据的问题
          //复习一下，父传子用props，子组件用事件通知父组件$emit
      }
  } */
}
</script>


<style lang="stylus" scoped>
    #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

    #cover {
        position absolute 
        left 0
        right 0
        top 0
        bottom 0
        background-color #555
        opacity 0.5   //透明度
        z-index -1    //默认为零，数值越大离用户越近
    }
</style>
