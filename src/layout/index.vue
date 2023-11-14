<script setup>
import Aside from "@/layout/Aside.vue";
import Main from "@/layout/Main.vue";
</script>

<template>
  <div class="layout">
    <div class="layout-aside">
      <Aside></Aside>
    </div>
    <div class="layout-main">
      <Main></Main>
    </div>
  </div>
</template>

<style scoped>
.layout{
  width: 100%;
  height: 100%;
  display: flex;
  .layout-aside{
    width: 15%;
    height: 100%;
  }
  .layout-main{
    width: 85%;
    height: 100%;
  }
}
</style>
