<template>
  <div class="commodity-wrapper">
     <Commodity v-for = "item in commodity" :commodity= "item" :key="item" />
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


export default class Female extends Vue {
 commodity = Data['products']['female']['all'] 
}

</script>

<style lang="less" scoped>
  .commodity-wrapper{
      display: flex;
      flex-direction:row;
      flex-wrap: wrap;
    }
</style>
