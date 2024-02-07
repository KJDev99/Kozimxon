import { createApp } from "vue";
import App from "./App.vue";
import VueCollapsiblePanel from "@dafcoe/vue-collapsible-panel";
import "./assets/styles/index.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);
app.use(ElementPlus);
app.use(VueCollapsiblePanel).mount("#app");
