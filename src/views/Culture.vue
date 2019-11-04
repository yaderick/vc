<template>
  <div class="culture">
    <img src="../assets/15.png" alt="" style="width:100%"/>
    <div>
       <el-row :gutter="0">
         <el-col :span="4">

         </el-col>
         <el-col :span="16" class="brand-story">
            <img src="../assets/16.png" alt="" :style="{height:img_height + 'px'}" class="brand-story-item" >
            <img src="../assets/17.png" alt="" :style="{height:img_height + 'px'}" class="brand-story-item">
             <div class="culture-btn">

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
            <img src="../assets/18.png" alt="" style="width:100%">
           
         </el-col>
         <el-col :span="4">
           
         </el-col>
        </el-row >
    </div>
     <div>
       <el-row :gutter="0">
         <el-col :span="4">

         </el-col>
         <el-col :span="16" class="brand-concept">
             <el-row :gutter="20">
             <el-col :span="14">
                 <img src="../assets/19.png" alt="" :style="{height:img_height + 'px'}" class="brand-concept-item" >
             </el-col>
             <el-col :span="10">
                  <img src="../assets/20.png" alt="" :style="{height:img_height + 'px'}" class="brand-concept-item">
             </el-col>
             </el-row >
         </el-col>
         <el-col :span="4">
           
         </el-col>
        </el-row >
    </div>
    <div>
       <el-row :gutter="0">
         <el-col :span="4">

         </el-col>
         <el-col :span="16" class="brand-vision">
              <img src="../assets/21.png" alt="" :style="{height:img_height + 'px'}" style="width:100%">
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
       const img_div = document.getElementsByClassName('brand-story-item')[0]
       const height = (<HTMLIFrameElement> img_div).width
       this.img_height = Number(height) * .83
      this.resizeImg()
    })
  }
  resizeImg(){
    window.addEventListener("resize",() => this.img_height = Number((<HTMLIFrameElement>document.getElementsByClassName('brand-story-item')[0]).width) * .7);
  }
}


</script>

<style lang="less" scoped>
.culture{
  .brand-story{
    margin-top: 143px;
    margin-bottom: 177px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    .brand-story-item{
      width: 45%;
    }
    .culture-btn{
    position: absolute;
    background: red;
    width:100px;
    height: 100px;
  }
  }
  .brand-concept{
    margin-top: 204px;
    margin-bottom: 143px;
    .brand-concept-item{
      width: 100%;
    }
  }
  .brand-vision{
    margin-bottom: 260px;
  }
  
}
</style>
