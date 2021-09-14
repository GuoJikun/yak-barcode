import { createApp } from "vue";
import App from "./App.vue";
import Barcode from "./components/barcode/index";

createApp(App).use(Barcode).mount("#app");
