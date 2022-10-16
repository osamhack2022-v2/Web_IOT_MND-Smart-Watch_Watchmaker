/* 메인 JS */
import { createApp, VueElement } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from "axios";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";


VueElement.prototype.$http = axios;

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");