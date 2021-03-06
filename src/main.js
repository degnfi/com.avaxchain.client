import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import Notifications from "vue-notification";
import VueClipboard from "vue-clipboard2";
import Vuelocalstorage from "vue-localstorage";
import store from "./store"
import router from './router'
const avalanche = require("avalanche");

Vue.config.productionTip = false
VueClipboard.config.autoSetContainer = true

Vue.use(VueAxios, axios);
Vue.use(Notifications);
Vue.use(VueClipboard);
Vue.use(Vuelocalstorage);
Vue.use(avalanche)

axios.defaults.baseURL = "https://testapi.avax.network/";
// axios.defaults.baseURL = "http://localhost:5050/";


let myNetworkID = 3; //default is 3, we want to override that for our local network
let myBlockchainID = "X"; // The XChain blockchainID on this network
let ava = new avalanche.Avalanche(
  "testapi.avax.network",
  443,
  "https",
  myNetworkID,
  myBlockchainID
);
Vue.prototype.$ava = ava.AVM();

new Vue({
  router,
  Notifications,
  Vuelocalstorage,
  store,
  render: h => h(App)
}).$mount('#app')
