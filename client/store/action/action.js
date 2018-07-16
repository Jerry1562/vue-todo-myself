export default {
    updateChangeAsync(context,num){  //传入的参数跟mutactions差不多，第一个参数是与state对象类似的对象，第二个参数是荷载对象
        setTimeout(()=>{
            context.commit('updateChange2',num)
        },5000)
    }
}
//action用于异步处理事件，而mutation则用于必须同步处理事件
//与mutation不同的是，action中不直接写入事件处理，而是提交mutations中的事件进行处理
//适用于一些请求时数据的处理