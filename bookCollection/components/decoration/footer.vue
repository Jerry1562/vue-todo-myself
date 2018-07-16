<template>
    <div class="footer">
        <span>{{msg}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            author:'jerry'
        }
    },
    computed:{
        msg(){
            return `written by ${this.author}`
        }
    }
}
</script>

<style lang="stylus" scoped>
.footer
  margin 40px
  text-align: center
  color: #eee
  font-size 15px
  text-shadow 0 3px 0 2px #eee
</style>

