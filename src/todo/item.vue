<template>
  <div :class="['todo-item',todo.completed ? 'completed' : '']">
      <input 
      type="checkbox"
      class="toggle"
      v-model="todo.completed"  
      >         <!--双向数据绑定，即V层对M层实现了绑定,M层对V层实现的绑定为单向绑定-->
                <!--在此处input的值绑定了completed,为布尔值-->    
      <label>{{todo.content}}</label>
      <button class="destory" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  props:{             //从父组件传数据到子组件，子组件中要使用props声明接受数据，为单向传送
      todo:{          //在此处数据来自todo.vue，type属性表示接收的数据类型要为Object，required属性为true表示一定要传值
          type:Object,//记得大写，不大写会出现白屏bug
          required:true          
      }
  },
  methods:{
      deleteTodo () {
          this.$emit('del',this.todo.id)//通过del事件触发父组件中的deleteTodo事件，传出本Vue对象的todo.id
      }
  }
}
</script>

<style lang="stylus" scoped>
.todo-item{
  position relative
  background-color #fff
  font-size 24px
  border-bottom 1px solid rgba(0,0,0,0.06)
  &:hover{
    .destory:after{
      content: '×'
    }
  }
  label{
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }
  &.completed{
    label{
      color: #d9d9d9;
      text-decoration line-through
    }
  }
}
.toggle{
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  outline none
  &:after{
    content url('../assets/images/round.svg')
  }
  &:checked:after{
    content url('../assets/images/done.svg')
  }
}
.destory{
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background-color transparent
  appearance none
  border-width 0
  cursor pointer
  outline none
}
</style>
