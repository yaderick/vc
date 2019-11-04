<template>
  <div class="female">
    <el-row :gutter="0">
      <el-col :span="4">

      </el-col>
      <el-col :span="16">
         <el-container>
            <el-aside width="200px">
              <SubMenus :choice ="choice"/>
            </el-aside>
        <el-main>
          <div class="commodity-wrapper">
            <Commodity v-for = "item in commodity" :commodity= "item" :key="item"/>
          </div>
        </el-main>
        </el-container>
      </el-col>
      <el-col :span="4">

      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SubMenus from '@/components/sub_menus.vue';
import Commodity from '@/components/commodity.vue';

@Component({
  components: {
    SubMenus,
    Commodity
  },
})


export default class Female extends Vue {
  name = 'female'
  choice = '服装'
  commodity=[
    {
      img_path: require('../assets/3.png'),
      title: '维纳 . 周 美妆蛋',
      explain: '好蛋不吃粉',
      price: '188',
    },
      {
      img_path: require('../assets/3.png'),
      title: '维纳 . 周 美妆蛋',
      explain: '好蛋不吃粉',
      price: '188',
    },
      {
      img_path: require('../assets/3.png'),
      title: '维纳 . 周 美妆蛋',
      explain: '好蛋不吃粉',
      price: '188',
    },
    {
      img_path: require('../assets/3.png'),
      title: '维纳 . 周 美妆蛋',
      explain: '好蛋不吃粉',
      price: '188',
    },
    {
      img_path: require('../assets/3.png'),
      title: '维纳 . 周 美妆蛋',
      explain: '好蛋不吃粉',
      price: '188',
    },
  ]
  
}

</script>

<style lang="less" scoped>
  .female{
    position: relative;
    width: 100%;
    text-align: left;
    padding-top: 56px;
   
    .commodity-wrapper{
      display: flex;
      flex-direction:row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>
