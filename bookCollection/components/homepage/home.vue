<template>
    <div class="home">
        <Header :username="user.name" :userid="user.id"></Header>
        <Select></select>
        <Items @commit="commit" :books="books"></Items>
    </div>
</template>

<script>
import items from './components/items.vue'
import header from './components/header.vue'
import select from './components/select.vue'
export default {
    data(){
        return{
            books:['数学','engliash'],
            needbook:[],
            user:{
                name:'jerry',
                id:'3115002267'
            }
        }
    },
    methods:{
        commit(needbook){
            this.needbook=needbook;
        }

    },
    components:{
        Items:items,
        Header:header,
        Select:select
    }
}
</script>

<style lang="stylus" scoped>

</style>
