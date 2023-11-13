import {createRouter, createWebHashHistory} from 'vue-router';
import routes from "./routes.js";

console.info("routes:", routes)
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router
