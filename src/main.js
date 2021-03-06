import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import PrismicVue from '@prismicio/vue'
import linkResolver from './link-resolver' // Update this path if necessary

Vue.config.productionTip = false;

const accessToken = '' // Leave empty if your repo is public
const endpoint = 'https://aboutthecompany.cdn.prismic.io/api/v2' // Use your repo name

// Register plugin
Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { accessToken },
  linkResolver
})

// Create a Vue instance
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
