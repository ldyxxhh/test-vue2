<!--
 * @Autor: lvdy
 * @Date: 2023-10-26 09:03:47
 * @LastEditors: lvdy
 * @LastEditTime: 2023-10-26 09:42:51
 * @Description: 
-->
<template>
<div >
    <button class="v-button">{{ propValue }}</button>
</div>
</template>
<script>
export default{
    props:{
        propValue:{
            type:String,
            default:''
        }
    }
}
</script>
<style lang='scss' scoped>
.v-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    width: 50%;
    height: 100%;
    font-size: 14px;

    &:active {
        color: #3a8ee6;
        border-color: #3a8ee6;
        outline: 0;
    }

    &:hover {
        background-color: #ecf5ff;
        color: #3a8ee6;
    }
}
</style>