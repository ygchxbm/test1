<script setup>
import routes from "../../router/routes.js";
import {computed} from "vue";
import {useRouter} from 'vue-router';
const router = useRouter();
const menuList=routes[0].children.filter(route=> {
  return route.meta
});

const menuNamesList=computed(()=>{
  return menuList.map(route=>{
    return route.meta.title
  })
});

function toNewRoute(route){
  router.push({name: route.name,})
}
</script>

<template>
  <div class="layout-aside-root">
    <ul class="name-list">
      <li @click="toNewRoute(route)" class="name-item" v-for="route in menuList">{{route.meta.title}}</li>
    </ul>
  </div>
</template>

<style scoped>
.layout-aside-root{
  width: 100%;
  background: #ffffff;
  .name-list{
    padding: 0;
    list-style: none;
    .name-item{
      padding-left: 40px;
      height: 40px;
      line-height: 40px;
      border: 1px solid lavender;
      border-radius: 5px;
      background: lightyellow;
    }
    .name-item:hover{
      background: lightcoral;
      color: #ffffff;
    }
  }
}
</style>
