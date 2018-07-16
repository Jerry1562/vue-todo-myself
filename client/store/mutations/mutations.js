export default {
    updateChange(state,num){//state对象，荷载对象，因此在commit中最好传入一个对象
        state.count=num.acount
    },
    updateChange2(state,num){
        state.count2=num.acount
    }
}