import "ant-design-vue/dist/antd.less"; // antd css
import "@ant-design-vue/pro-layout/dist/style.css";

import { createApp } from "vue";
import Antd from "ant-design-vue";
import { ConfigProvider } from "ant-design-vue";
import ProLayout, { PageContainer } from "@ant-design-vue/pro-layout";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// createApp(App).use(store).use(router).mount("#app");

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(ConfigProvider)
  .use(ProLayout)
  .use(PageContainer)
  .mount("#app");
