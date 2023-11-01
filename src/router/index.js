/*
 * @Autor: lvdy
 * @Date: 2023-10-25 16:13:29
 * @LastEditors: lvdy
 * @LastEditTime: 2023-10-25 17:15:55
 * @Description: 
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes=[
    {
        path:'/',
        name:'Home',
        component: ()=>import('@/views/Home.vue')
    }
]

export default new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})