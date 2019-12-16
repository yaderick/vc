`<template>
  <div class="single-product">
    <div v-for=" item in products" :key="item.id" style="width:30%">
      <p >
        <img :src="item.img_path" alt="" class="p-img" :style="{height: img_height + 'px'}">
      </p>
      <p class="p-title">{{item.title}}</p>
      <p class="p-explain">  {{item.explain}}</p>
      <p class="p-price">¥ {{item.price}}</p>
      <span class="buy"> 购买</span>
    </div>
  </div>
</template>

<script lang='ts'>

import { Component, Prop, Vue } from 'vue-property-decorator';
interface IProducts {
  id?: number,
  img_path: string,
  title: string,
  explain: string,
  price: number,
}

@Component
export default class Header extends Vue{
   @Prop() private products!: Array<IProducts>;
    img_height : number = 320; 
     mounted(){
     this.$nextTick(function () {
       const img_div =document.getElementsByClassName('p-img')[0]
       this.img_height =Number((<HTMLIFrameElement> img_div).width);
      this.resizeImg()
    })
  }
  resizeImg(){
    window.addEventListener("resize",() => this.img_height = Number((<HTMLIFrameElement>document.getElementsByClassName('p-img')[0]).width) );
  }

}
</script>

<style lang="less" scoped>
  .single-product{
    display: flex;
    flex-direction:row;
    justify-content:  space-between; 

    .p-img{
      width:100%;

    }
    .p-title{
      font-size:20px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(0,0,0,1);
      margin-top: 30px;
      margin-bottom: 15px;
    }
    .p-explain{
     font-size:18px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(145,145,145,1);
    }
    .p-price{
     font-size:20px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
        margin-top: 20px;
    margin-bottom: 26px;
    }
    .buy{
      display: inline-block;
      width:136px;
      height:40px;
      line-height: 40px;
      background:rgba(0,0,0,1);
      font-size:18px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(230,230,230,1);
    }
  }
</style>
