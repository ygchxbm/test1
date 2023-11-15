<script setup>
import {ref} from "vue";
const count=ref(0);
</script>

<template>
  <div>{{count}}</div>
  <button @click="count++">click me</button>
</template>

<style scoped>

</style>
