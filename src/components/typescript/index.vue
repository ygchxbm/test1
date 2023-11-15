<script lang="ts" setup>
import {ref,computed} from "vue"
import type {Ref} from "vue"
import Child from "@/components/typescript/Child.vue"

const  x =ref<string | number>(1.21321312)
const  y:Ref<string | number>=ref('2000')


const xx=computed<number>(()=>{
return parseFloat((x.value as number).toFixed(3))
})
function click() {
  x.value++
  y.value=2000
}

function myClick(val){
  console.info("val:", val)
  x.value=val
}
</script>

<template>
  <div>{{xx}}</div>
  <button @click="click">click me</button>
  <Child @myClick="myClick" :count="x"> </Child>
</template>

<style scoped>

</style>
