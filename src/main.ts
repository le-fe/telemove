import { createApp, Component } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./assets/styles.scss";
import router from "./router";
import store from "./store";
import { globalComponents } from "./modules/core/";
import "./modules"

const app = createApp(App);
globalComponents.forEach((comp: Component) => {
    if (comp.name) app.component(comp.name, comp)
})
app.use(store).use(router).mount("#app");
