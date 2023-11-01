/*
 * @Autor: lvdy
 * @Date: 2023-10-31 16:35:59
 * @LastEditors: lvdy
 * @LastEditTime: 2023-10-31 17:17:50
 * @Description: 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const data = {
    state:{
        componentData: [], // 画布组件数据
    },
    mutations: {
        addComponent(state,{component,index}){
            state.componentData.push(component)
            console.log('componentData',state.componentData);
    }
}
}

export default new Vuex.Store(data)