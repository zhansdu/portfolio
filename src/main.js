/* eslint-disable no-extend-native */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./locale";

String.prototype.toCapitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

Date.prototype.toDateInputValue = function () {
  const local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  const month = local.toLocaleString("default", { month: "long" });
  const day = local.getDate();
  const year = local.getFullYear();
  return `${day} ${month}, ${year}`;
};

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount("#app");
