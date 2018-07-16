import Vuex from 'vuex'
import Vue from 'vue'
import defaultState from './state/state.js'
import mutations from './mutations/mutations.js'
import getters from './getters/getters.js'
import action from './action/action.js'

const isDev = process.env.NODE_ENV !== 'production'

export default ()=>{
    return new Vuex.Store({
    strict:isDev,//在开发模式中使用严格模式strict，强制使用commit修改state，否则报错。
                 //在发布模式中要关闭，避免性能的损耗
    state:defaultState,
    mutations:mutations,
    getters:getters,
    actions:action
})
}
//使用vuex，可以方便集中管理组件的数据，这也实现了兄弟组件之间进行值的传递
//state是储存数据的地方，与vue的data类似，应该在一开始就初始化好所需要的属性，如果要插入新属性，要使用Vue.set
//getters跟computed属性类似，只有其中相关的值发生变化时，才进行新的计算，这一点跟computed也相似，相当于全局computed