import { createApp } from "vue";
import topbar from "./topbar.vue";
import sidebar from "./sidebar.vue";

createApp(topbar).mount("#topbar");
createApp(sidebar).mount("#sidebar");
