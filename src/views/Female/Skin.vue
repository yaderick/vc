<template>
  <div class="commodity-wrapper">
     <Commodity v-for = "item in commodity" :commodity= "item" :key="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Commodity from '@/components/commodity.vue';
import Data from '@/config/mock.js'

@Component({
  components: {
    Commodity,
  },
})


export default class Skin extends Vue {
   commodity = Data['products']['female']['skin'] 
}

</script>

<style lang="less" scoped>
  .commodity-wrapper{
      display: flex;
      flex-direction:row;
      flex-wrap: wrap;
    }
</style>
