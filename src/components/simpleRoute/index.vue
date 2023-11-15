<script setup>
import {computed, ref} from "vue"
import Home from "@/components/simpleRoute/Home.vue";
import About from "@/components/simpleRoute/About.vue";

const routes={
  '/simpleRoute/Home':Home,
  '/simpleRoute/About':About,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1)]
})
</script>

<template>
  <h1>得在没有vue-router情况下运行</h1>
  <a href="#/simpleRoute/Home">Home</a>
  <br>
  <a href="#/simpleRoute/About">About</a>
  <div>
      <component :is="currentView"></component>
  </div>
</template>

<style scoped>

</style>
