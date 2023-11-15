import {ref, onMounted} from "vue";
import {useEventListener} from "@/components/combinedFunction/event.js";

export function useMouse() {
    const x = ref(0)
    const y = ref(0)
    const event = (e) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    const removeEvent = useEventListener(window, 'mousemove', event)
    return {x, y,removeEvent}
}
