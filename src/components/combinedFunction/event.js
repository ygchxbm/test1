import {onMounted,onUnmounted} from 'vue'
export function useEventListener(target,eventType,callback){
    onMounted(()=>target.addEventListener(eventType,callback))
    onUnmounted(()=>target.removeEventListener(eventType,callback))
    return ()=>target.removeEventListener(eventType,callback)
}
