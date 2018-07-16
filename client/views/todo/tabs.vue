<template>
  <div class="helper">
      <span class="left">{{unFinshedTodoLength}} items left</span>
      <span class="tabs">
          <span
          v-for="state in states"
          :key="state"         
          :class="[state,filter === state ? 'actived' : '']"
          @click="toggoFilter(state)"
          >{{state}}</span>      <!--v-for循环从states中取值创建按钮，key为每个按钮创建唯一的键-->
                                 <!--当再次进行循环的时候，检测到相同的键时，会复用这个相同的节点，不必新建节点，减少循环的性能消耗-->
      </span>
      <span class="clear" @click="clearAllCompleted">Clear Completed</span> 
  </div>
</template>


<script>
export default {
  props:{
          filter:{
              type:String,
              required:true
          },
          todos:{
              type:Array,
              required:true
          }
    },
  data(){
      return{
          states:['all','active','completed']
      }
  },
  computed:{
      unFinshedTodoLength(){
          return this.todos.filter(todo => !todo.completed).length//filer方法取得completed值为false的值的项，组成一个新的数组 
      }
  },
  methods:{
      toggoFilter(state){
          this.$emit('toggle',state)
      },
      clearAllCompleted(){
          this.$emit('clearCompleted','')
      }
  }
}
</script>

<style lang="stylus" scoped>
.helper {
        font-weight 100
        display flex
        justify-content space-between
        padding 5px 0
        line-height 30px
        background-color #ffffff
        font-size 14px
        font-smoothing: antialiased;
    }

    .left, .clear, .tabs {
        padding 0 10px
        box-sizing border-box
    }

    .left, .clear {
        width 150px
    }

    .left {
        text-align left
    }

    .clear {
        text-align: right
        cursor pointer
    }

    .tabs {
        width 200px
        display flex
        justify-content space-around
        * {
            display inline-block
            padding 0 10px
            cursor pointer
            border 1px solid rgba(175, 47, 47, 0)
            &.actived {
                border-color rgba(175, 47, 47, 0.4)
                border-radius 5px
            }
        }
    }
</style>
