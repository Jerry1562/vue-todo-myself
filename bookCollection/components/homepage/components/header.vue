<template>
    <div class="header">
        <h1>{{username}}</h1>
        <span>ID : {{userid}}</span>
    </div>
</template>

<script>
export default {
    props:{
        username:{
            type:String,
            required:true
        },
        userid:{
            type:[String,Number],
            required:true
        }
    }
}
</script>

<style lang="stylus" scoped>
.header
    width 60%
    height 15%
    border 1px solid black 
    background white
    margin auto auto
    padding 1em
</style>
