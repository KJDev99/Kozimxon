import { createApp } from "vue";
import App from "./App.vue";
import VueCollapsiblePanel from "@dafcoe/vue-collapsible-panel";
import Vue3Marquee from "vue3-marquee";
import "./assets/styles/index.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);

app.use(Vue3Marquee);
app.use(ElementPlus);
app.use(VueCollapsiblePanel).mount("#app");
