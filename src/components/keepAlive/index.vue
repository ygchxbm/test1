<script setup>
import {shallowRef} from "vue"
import Add from '@/components/keepAlive/Add.vue'
import Ipt from "@/components/keepAlive/Ipt.vue"

const view = shallowRef(Add);

function change(val) {
  view.value = val
}
</script>

<template>
  <button @click="change(Add)">Add</button>
  <button @click="change(Ipt)">Ipt</button>
  <div>
    <keep-alive include="Add">
      <component :is="view"></component>
    </keep-alive>
  </div>
</template>

<style scoped>

</style>
