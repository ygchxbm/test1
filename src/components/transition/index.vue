<script setup>
import {useMouse} from "@/components/combinedFunction/mouse.js";
import {ref} from "vue";
const {x,y,removeEvent}=useMouse();
const show=ref(true)
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition name="slide-fade">
    <p v-if="show">hello</p>
  </Transition>
</template>
<style scoped>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
