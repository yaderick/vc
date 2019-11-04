<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="vc-banner">
      <img src="../assets/banner.png" alt="" class="banner-img">
    </div>
    <div  class="star-products">
      <el-row :gutter="0">
        <el-col :span="4">

        </el-col>
        <el-col :span="16" class="star-products-content">
          <div class="star-products-content-item">
            <p>明星产品</p>
            <p class="sub-title">店铺精选  上万好评爆品</p>
            <img src="../assets/1.png" alt="" class="star-left-img" :style="{height:img_height + 'px'}">
            <div style="margin-top: 30px;">
            <p class="sub-line-title">氨基酸净颜雪肌保湿洁面乳</p>
            <p class="sun-line-subtitle">极致洁净去除肌肤杂质  全天保湿  抗氧化</p>
            </div>
          </div>
          <div class="star-products-content-item" style="margin-top:65px">
            <p style="text-align: right">
              <img src="../assets/14.png" alt="" style="height:50px">
              <!-- <span class="sub-right-title">STAR PRODUCTS</span>
              <span class="sub-line"></span> -->
            </p>
            <div style="margin-top: 80px;">
              <p class="sub-line-title">驻颜雪肌柔肤水</p>
              <p class="sun-line-subtitle">极致洁净去除肌肤杂质  全天保湿  抗氧化</p>
            </div>
            <div>
              <img src="../assets/2.png" alt="" style="width:100%;margin-top:34px" :style="{height:img_height + 'px'}">
            </div>
          </div>
        </el-col>
        <el-col :span="4">

        </el-col>
      </el-row>
    </div>
    <div class="hot-sale">
      <el-row :gutter="0">
         <el-col :span="4">

        </el-col>
         <el-col :span="16" class="star-products-content">
           <div class="star-products-content-item">
              <p>当月热销</p>
              <p class="sub-title">店铺精选  上万好评爆品</p>
           </div>
           <div class="star-products-content-item" style="margin-top:65px">
            <p>
              <!-- <span class="sub-right-title">HOT SALE IN THE MONTH</span>
              <span class="sub-line"></span> -->
               <img src="../assets/13.png" alt="" style="height:50px">
            </p>
           </div>
        </el-col>
         <el-col :span="4">
           
        </el-col>
      </el-row>
    </div>
    <div class="products">
      <el-row :gutter="0">
         <el-col :span="4">

        </el-col>
         <el-col :span="16" class="star-products-content">
            <Singproduct :products= "products" />
        </el-col>
         <el-col :span="4">
           
        </el-col>
      </el-row>
    </div>
    
    <div>
      <el-row :gutter="0">
         <el-col :span="4">

        </el-col>
         <el-col :span="16" >
             <img src="../assets/6.png" alt="" style="width:100%;margin-top:210px">
        </el-col>
         <el-col :span="4">
           
        </el-col>
      </el-row>
    </div>
      <div >
        <el-row :gutter="0">
         <el-col :span="4">

        </el-col>
         <el-col :span="16" class="others">
            <img src="../assets/7.png" alt="" style="width:50%">
            <img src="../assets/8.png" alt="" style="width:50%">
        </el-col>
         <el-col :span="4">
           
        </el-col>
      </el-row>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';


import Footer from '@/components/Footer.vue'

import Singproduct from '@/components/single_product.vue'

@Component({
  components: {
    Footer,
    Singproduct,
  },
})
export default class Home extends Vue {
  name = 'home'
  products = [
    {
      img_path: require('../assets/3.png'),
      title: '维纳 . 周 美妆蛋',
      explain: '好蛋不吃粉',
      price: '188',
    },
     {
      img_path: require('../assets/4.png'),
      title: '维纳 . 周 美妆蛋',
      explain: '好蛋不吃粉',
      price: '188',
    },
     {
      img_path: require('../assets/5.png'),
      title: '维纳 . 周 美妆蛋',
      explain: '好蛋不吃粉',
      price: '188',
    },
  ]
   img_height : number = 320;
   mounted(){
     this.$nextTick(function () {
       const img_div = document.getElementsByClassName('star-products-content-item')[0]
       const height = (<HTMLIFrameElement> img_div).width
       this.img_height = Number(height) * .83
      this.resizeImg()
    })
  }
  resizeImg(){
    window.addEventListener("resize",() => this.img_height = Number((<HTMLIFrameElement>document.getElementsByClassName('p-img')[0]).width) * .83 );
  }
}
</script>

<style lang="less" scoped>
  .home{
    position: relative;
    .vc-banner{
      margin-top: 85px;
      .banner-img{
        height: 700px;
        width:100%;
      }
    }
    .star-products{
      width: 100%;
      margin-top: 170px;
      text-align: left;
      .star-products-content{
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        font-size:40px;
        font-family:PingFang SC;
        font-weight:bold;
        .star-products-content-item{
           width: 45%;
           display: flex;
          flex-direction:column;
          justify-content: space-between; 
           .sub-title{
            font-size:20px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(159,159,159,1);
            margin-top: 24px;
          }
        .star-left-img{
          width: 100%;
          margin-top: 120px;
        }
         .sub-line-title{
          font-size:18px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(0,0,0,1)
        }
        .sun-line-subtitle{
          font-size:16px;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(142,142,142,1);
          margin-top: 13px;
        }
        .sub-line{
          width:60px;
          height:4px;
          background:rgba(0,0,0,1);
          position: absolute;
          right: 0px;
          bottom: -20px;
        }
        }
        
      }
    }
    .hot-sale{
      text-align: left;
      .star-products-content{
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        font-size:40px;
        font-family:PingFang SC;
        font-weight:bold;
        margin-top: 270px;
        .star-products-content-item{
           width: 45%;
           display: flex;
          flex-direction:column;
          justify-content: center; 
           .sub-title{
            font-size:20px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(159,159,159,1);
            margin-top: 24px;
          }
        .star-left-img{
          width: 100%;
          margin-top: 120px;
        }
         .sub-line-title{
          font-size:18px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(0,0,0,1)
        }
        .sun-line-subtitle{
          font-size:16px;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(142,142,142,1);
          margin-top: 13px;
        }
        .sub-line{
          width:60px;
          height:4px;
          background:rgba(0,0,0,1);
          position: absolute;
          right: 0px;
          bottom: -20px;
        }
        }
        
      }
    }
    .products{
      margin-top: 85px;
    }
    .others{
     display: flex;
     flex-direction: row;
    }
    .footer{
     margin-top: 180px;
    }
  }
</style>
