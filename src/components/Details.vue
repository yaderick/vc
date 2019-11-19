<template>
  <div class="details">
    <el-row :gutter="0">
      <el-col :span="4">

      </el-col>
      <el-col :span="16" >
        <div class="details-header">
           <div class="swiper-container ">
          <div class="gallery-side" v-if="product.imgs">
            <ul v-for="(img, index) in product.imgs" :key="index" >
              <li @click='getIndex(img.url)'>
                  <img :src="img.url" style="width: 100px; height: 100px; cursor: pointer;" >
              </li>
            </ul>
          </div>
          <div class="gallery-thumbs">
            <img :src="imgUrl" style="width: 100%;height: 100%">
          </div>
        </div>
        <div class="product-info">
          <p class="en-title">{{product.en_title}}</p>
          <p class="title">{{product.title}}</p>
          <p class="star">{{product.star}}</p>
          <p class="info">{{product.info}}</p>
          <p class="price-wrpper">
            <span class="price">
              {{product.price}}
            </span>
             <span>
              / 净含量: {{product.weight}}
            </span>
          </p>
          <span class="buy">立即购买</span>
        </div>
        </div>
        <div class="details-content">
          <img :src="product.bag_img" alt="">
        </div>
      </el-col>
      <el-col :span="4">

      </el-col>
    </el-row>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { filterDetails} from '@/untils'



@Component
export default class Index extends Vue {

  name = 'details'
  
  product = {}

  imgUrl = ''
  mounted(){
    this.product = this.$route.params
    this.imgUrl = this.product.imgs[0].url
    console.log(this.product)
  }
  getIndex(url: string){
    this.imgUrl = url
  }

 
  
}
</script>

<style lang="less" scoped>
  .details{
    .details-header{
      display: flex;
      flex-direction: row;
      padding-top: 165px;
      padding-bottom: 200px;
      border-bottom: 1px solid rgba(202,201,201,1);
      .swiper-container{
        display: flex;
        flex-direction: row;
        .gallery-side{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-right: 65px;
        }
      }
      .product-info{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-self: left;
          padding-left: 100px;
          text-align: left;
        .en-title{
          font-size:16px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(0,0,0,1);
        }
        .title{
          font-size:24px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(0,0,0,1);
        }
        .star{
          font-size: 30px;
        }
        .info{
          font-size:18px;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(185,185,185,1);
        }
        .price-wrpper{
          font-size:16px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(2,2,2,1);
           .price{
            font-size:24px;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(2,2,2,1);
            margin-right: 20px;
            }
        }
       
        .buy{
          width:315px;
          height:61px;
          line-height: 61px;
          text-align: center;
          background:rgba(0,0,0,1);
          color: #fff;
          font-size:18px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(255,255,255,1);
        }
      }
    }
    .details-content{
      margin-top: 100px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>