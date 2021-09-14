import Barcode from "./barcode.vue";
import { App } from "vue";

// export { Barcode };

export default {
  install(app: App) {
    app.component("yak-barcode", Barcode);
  },
};
