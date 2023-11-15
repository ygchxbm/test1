<script setup>
import {ref} from "vue";

const msg = ref("")
</script>

<template>
  <input v-model="msg">
  <span>{{ msg }}</span>
</template>

<style scoped>

</style>
