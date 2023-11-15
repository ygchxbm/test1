<script lang="ts" setup>
import {reactive} from 'vue'
const childValue=100
interface Props{
  count:string|number
}

const defineProps = <T>() => {

};
defineProps<Props>()

const emit = defineEmits<{
  myClick:[value:number]
}>()

interface Book {
  title: string
  year?: number
}

const book: Book = reactive({ title: 'Vue 3 指引' })
function CClick(){
  console.info("12:", 12)
  emit('myClick',childValue)
}
</script>

<template>
<div>
  <div>{{count}}</div>
  <div>{{book}}</div>
  <button @click="CClick">child click</button>
</div>
</template>

<style scoped>

</style>
