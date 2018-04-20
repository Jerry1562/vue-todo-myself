<template>
  <section class="real-app">
    <input 
  type="text"
  class="add-input"
  placeholder="接下来想要做什么呢？"
  autofocus="autofocus"
  @keyup.enter="addTodo"
  >
  <item 
  v-for="todo in filtedTodo"
  :key=todo
  :todo="todo"
  @del="deleteTodo"
  ></item><!--子组件通过事件del通知父组件，触发父组件中的deleteTodo事件-->
  <tabs 
  :filter="filter" 
  :todos="todos"
  @toggle="toggleFilter"
  @clearCompleted="clearCompleted"></tabs>
  </section>
</template>

<script>
import item from './item.vue'
import tabs from './tabs.vue'
let id=0;

export default {
  components:{
    item,
    tabs
  },
  computed:{
    filtedTodo(){
      if(this.filter === 'all'){
        return this.todos;
      }
      const completed = this.filter === 'completed';
      return this.todos.filter(todo => todo.completed === completed);
    }
  },
  methods:{
      addTodo(e){
        this.todos.unshift({//在数组的前端插入新的值
          id:id++,
          completed:false,    //我很难理解，通过v-model的双向绑定，可以在子组件V层中修改父组件M层中的值
          content:e.target.value//e.target指向的是触发该事件的节点
        })
        e.target.value=''
      },
      deleteTodo(ids){
        this.todos.splice(this.todos.findIndex(todo => todo.id === ids),1)//ES5/6写法
      },//findIndex函数返回的是满足括号内匿名函数条件的第一项的位置,splice删除从确定位置开始的一定数量的项
      toggleFilter(state){
        this.filter=state;
      },
      clearCompleted(){
        this.todos = this.todos.filter(todo => !todo.completed === true)
      }
  },
  data(){
    return{
      todos:[],
      filter:"all"
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input{
  position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        outline: none;    //边框外围绕的线的样式
        color: inherit;
        box-sizing: border-box; //设定边框盒，边框盒的大小为设定的大小，固定不变，元素的内边距，边框都在边框盒内
                                //设定内边距和边框可以改变内容的大小 
        padding: 16px 16px 16px 36px;//内边距的使用达到了居中的效果
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);//盒子阴影的表现形式
}
</style>

