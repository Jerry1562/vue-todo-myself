<template>
    <div class="item">
        <div v-for="item in books" :key=item>
        <input type="checkbox" v-model="needBooks" :value="item" @change="change"/>
        <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        books:{
            type:Array,
            required:true
        }
    },
    data(){
        return{
            needBooks:[]
        }
    },
    methods:{
        change(){
            this.$emit("commit",this.needBooks)
        }
    }
}
</script>

<style lang="stylus" scoped>
.item
    width 60%
    height 20%
    border 1px solid black 
    background white
    margin auto auto
    padding 1em
</style>


