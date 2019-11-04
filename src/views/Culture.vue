<template>
  <div class="culture">
    <img src="../assets/15.png" alt="" style="width:100%"/>
    <div>
       <el-row :gutter="0">
         <el-col :span="4">

         </el-col>
         <el-col :span="16" class="brand-story">
            <img src="../assets/16.png" alt="" :style="{height:img_height + 'px'}" class="brand-story-left" >
            <img src="../assets/17.png" alt="" :style="{height:img_height + 'px'}">
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


export default class Female extends Vue {

   img_height : number = 320;
   mounted(){
     this.$nextTick(function () {
       const img_div = document.getElementsByClassName('brand-story-left')[0]
       const height = (<HTMLIFrameElement> img_div).width
       this.img_height = Number(height) * .83
      this.resizeImg()
    })
  }
  resizeImg(){
    window.addEventListener("resize",() => this.img_height = Number((<HTMLIFrameElement>document.getElementsByClassName('brand-story-left')[0]).width));
  }
}


</script>

<style lang="less" scoped>
.culture{
  position: relative;
  .brand-story{
    margin-top: 143px;
    margin-bottom: 177px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .brand-story-left{
      width: 45%;
    }
  }
  .culture-btn{
    position: absolute;
    // top: 1096px;
    background: red;
    width:100px;
    height: 100px;
  }
}
</style>
