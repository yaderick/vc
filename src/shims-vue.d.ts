import VueRouter from 'vue-router'
import {Route} from 'vue-router'
import Vue from 'vue';

declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}


// 扩充
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter,
    $route: Route
  }
}