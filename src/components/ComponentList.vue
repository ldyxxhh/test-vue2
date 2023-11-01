<!--
 * @Autor: lvdy
 * @Date: 2023-10-31 11:10:12
 * @LastEditors: lvdy
 * @LastEditTime: 2023-10-31 11:42:25
 * @Description: 
-->
<template>
<div class="component-list" @dragstart="handleDrag" >
    <div v-for="(item,index) in componentList" class="list" :key="index" draggable :data-index="index">

        <span >{{ item.label }}</span>

    </div>

</div>
</template>
<script>
import componentList from "@/custom-component/component-list.js"
export default{
    data(){
        return{
            componentList
        }
    },
    methods:{
        handleDrag(e){
            console.log('e.target.dataset.index',e.target.dataset.index);
            e.dataTransfer.setData('index',e.target.dataset.index)

        }
    }
}
</script>
<style lang='scss' scoped>
.component-list{
    padding: 10px;
    .list{
        width: 80px;
        height: 40px;
        border: 1px solid #ddd;
        text-align: center;
        color: #333;
        padding: 2px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>