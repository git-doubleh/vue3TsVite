<!--
 * @Description: 
 * @Date: 2022-06-23 11:49:22
 * @LastEditTime: 2022-08-05 11:12:31
-->
<template>
    <div>这是home, {{ userStores.name }}</div>
    <button @click="pageTo">
        跳转
    </button>
    <button @click="getSon">
        获取子元素
    </button>
    <hr>
    <h3>子组件：</h3>
    <HelloWorld ref="HelloWorldRef" :msg="propsParam.msg" @send-msg="sendMsg" />
</template>
<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { userStore } from '@/store/modules/user'

const router = useRouter()
const HelloWorldRef = ref()

const userStores = userStore()
userStores.consoleMsg()

const propsParam = reactive({
    msg: 'welcome'
})

const pageTo = () => {
    router.push({
        path: "/about"
    })
}

/**
 * @description: 子组件emit 方法
 * @param {*} val
 */
const sendMsg = (val: string) => {
    propsParam.msg = val
}

/**
 * @description: 通过ref获取子组件数据
 */
const getSon = () => {
    console.log(HelloWorldRef.value.num)
}
</script>