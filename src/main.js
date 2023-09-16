import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

export const EventBus = new Vue();

Vue.use(Vuelidate);

new Vue({
  store: store,
  router,
  render: (h) => h(App),
}).$mount("#app");
