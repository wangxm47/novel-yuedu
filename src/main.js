import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './directive/clickoutside.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Datastore from 'lowdb'
import LodashId from 'lodash-id'
import FileSync from 'lowdb/adapters/FileSync'
import iconv from 'iconv-lite'

const adapter = new FileSync("./src/db/data.json"); // 初始化lowdb读写的json文件名以及存储路径
const db = Datastore(adapter);// lowdb接管该文件
db._.mixin(LodashId)

Vue.prototype.$db = db;
Vue.prototype.$iconv = iconv;
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
