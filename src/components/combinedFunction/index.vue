<script setup>
import {useMouse} from "@/components/combinedFunction/mouse.js";
const {x,y,removeEvent}=useMouse();
</script>

<template>
  <div>x:{{x}}</div>
  <div>y:{{y}}</div>
  <button @click="removeEvent">remove event</button>
</template>
<style scoped>

</style>
