<template>
  <div class="history">
    <div class="bank-culture">
       <el-row :gutter="0">
         <el-col :span="4">

         </el-col>
         <el-col :span="16" >
            <div @click="handleReturn()">
              <span><i><</i>返回</span>
            </div>
         </el-col>
         <el-col :span="4">
           
         </el-col>
        </el-row >
       
    </div>
    <div>
       <el-row :gutter="0">
         <el-col :span="4">

         </el-col>
         <el-col :span="16">
              <img src="../../assets/23.png" alt="" style="width:100%"/>
           
         </el-col>
         <el-col :span="4">
           
         </el-col>
        </el-row >
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/components/Footer.vue'
@Component({
  components: {
    Footer
  },
})


export default class History extends Vue {
  handleReturn(){
    this.$router.push('/culture')
  }
}


</script>

<style lang="less" scoped>
.history{
  text-align: left;
  .bank-culture{
    .el-col-4{
      min-height: 1px;
    }
    margin: 67px 0px 20px 0px;
    span{
      cursor: pointer;
      width:100px;
      height:40px;
      border:1px solid rgba(7,0,2,1);
      font-size:16px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(0,0,0,1);
      display: inline-block;
      line-height: 40px;
      text-align: center;
      i{
        margin-right: 8px;
      }
    }
  }
}
</style>
