import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BaseLoading from "@/components/BaseLoading.vue";
import BaseError from "@/components/BaseError.vue";
import AlertNotification from "@/components/AlertNotification.vue";

Vue.config.productionTip = false;

Vue.component("BaseError", BaseError);
Vue.component("BaseLoading", BaseLoading);

Vue.component("AlertNotification", AlertNotification);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
