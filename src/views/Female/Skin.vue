<template>
  <div class="commodity-wrapper">
     <Commodity v-for = "item in commodity" :commodity= "item" :key="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Commodity from '@/components/commodity.vue';

@Component({
  components: {
    Commodity,
  },
})


export default class Skin extends Vue {
 commodity=[
      {
        img_path: require('../../assets/3.png'),
        title: '维纳 . 周 美妆蛋',
        explain: '好蛋不吃粉',
        price: '188',
      },
      
    ]
}

</script>

<style lang="less" scoped>
  .commodity-wrapper{
      display: flex;
      flex-direction:row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
</style>
