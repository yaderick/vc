<template>
  <div id="app">
     <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
import Header from '@/components/Header.vue';


@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
