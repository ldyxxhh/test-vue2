
<!--
 * @Autor: lvdy
 * @Date: 2023-10-25 15:52:30
 * @LastEditors: lvdy
 * @LastEditTime: 2023-10-31 17:20:41
 * @Description: 
-->
<template>
    <div class="home">
        <div class="toolbar"><Toolbar></Toolbar></div>
        <main>
            <section class="left">
                <ComponentList></ComponentList>
            </section>
            <section id="editor" class="center" @drop="handleDrop" @dragover="handleDragOver">
            </section>
            <section class="right"></section>
        </main>
    </div>
</template>
<script>
import Toolbar from '@/components/Toolbar.vue'
import VButton from '@/custom-component/VButton/Component'
import ComponentList from '@/components/ComponentList'
import componentList from '@/custom-component/component-list.js'
import {deepCopy} from '@/utils/utils'
import {mapState} from 'vuex'
export default{
    components:{Toolbar,VButton,ComponentList},
    computed:{
        ...mapState(['componentData'])
    },
    methods:{
        handleDrop(e) {
        e.preventDefault()
        e.stopPropagation()

        const index=e.dataTransfer.getData('index')
        const rectInfo=document.querySelector('#editor').getBoundingClientRect()

        console.log('rectInfo',rectInfo);

        if(index){
            const component = deepCopy(componentList[index])
            component.style.top = e.clientY - rectInfo.y
            component.style.left = e.clientX - rectInfo.x

            console.log('component',component);

            this.$store.commit('addComponent',{component})

            console.log('componentData',this.componentData);
        }
        },
        handleDragOver(e) {
            e.preventDefault()
            e.dataTransfer.dropEffect = 'copy'
        },
    }
}
</script>
<style lang="scss" scoped>
.home{
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .toolbar{
        border: 1px solid red;
    }
    main{
        flex: 1;
        // height: calc(100% - 64px);
        display: flex;
        .left{
            height: 100%;
            width: 25%;
            border: 1px solid red;
        }
        .center{
            height: 100%;
            width: 50%;
            border: 1px solid red;
        }
        .right{
            height: 100%;
            width: 25%;
            border: 1px solid red;
        }
    }
}
</style>