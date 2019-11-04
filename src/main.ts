import Vue from 'vue';
import Router from 'vue-router';
import 'normalize.css/normalize.css';
import {
  Menu,
  Submenu,
  MenuItem,
  Row,
  Col,
  Container,
  Aside,
  Main,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './less/index.less';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);


const routerPush = Router.prototype.push;
Router.prototype.push = function push(location : string): any {
  return routerPush.call(this, location);
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
