<template>
  <div class="details">
    <el-row :gutter="0">
      <el-col :span="4">

      </el-col>
      <el-col :span="16" class="details-header">
        <div class="swiper-container gallery-side">
          <div class="swiper-wrapper">
            
          </div>
           <div class="swiper-container gallery-thumbs">
           
          </div>
        </div>
        <div class="product-info">

        </div>
      </el-col>
      <el-col :span="4">

      </el-col>
    </el-row>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


export default class Index extends Vue {

  @Prop() private products_details!: Object;
  name = 'details'
  mounted(){

  }

 
  
}
</script>

<style lang="less" scoped>
  .details{
  
  }
</style>