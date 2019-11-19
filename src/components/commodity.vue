<template>
  <div class="commodity" @click="detailPro(commodity)">
      <p>
        <img :src="commodity.img_path" alt="" class="p-img" :style="{height: img_height + 'px'}">
      </p>
      <p class="p-title">{{commodity.title}}</p>
      <p class="p-explain">  {{commodity.explain}}</p>
      <p class="p-price">★★★★★ {{commodity.price}}</p>
      <span class="buy"> 购买</span>
  </div>
</template>


<script lang="ts">
import { Component,Prop, Vue } from 'vue-property-decorator';

interface ICommodity {
  id?: number,
  img_path: string,
  title: string,
  explain: string,
  price: number,
}

@Component  // 必须先修饰fuck
export default class Commodity extends Vue {
  @Prop() private commodity!: ICommodity;
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
  
  detailPro(commodity:any){
    this.$router.push(
      {
         name: 'Details', params: commodity
      }
    )
  }
  
}

</script>

<style lang="less" scoped>
  .commodity{
    flex: 0 0 31%;
    margin-right: 10px;
    display: flex;
    flex-direction:column;
    justify-content:  center; 
    align-items: center;
    margin-bottom: 40px;
    cursor: pointer;
    .p-img{
      width:100%;
      height: 320px;

    }
    .p-title{
      font-size:20px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(0,0,0,1);
      margin: 24px 0px 17px 0;
    }
    .p-explain{
     font-size:14px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(179,179,179,1);
    }
    .p-price{
     font-size:24px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(2,2,2,1);
      margin: 30px 0 40px 0;
    }
    .buy{
      display: inline-block;
      width:153px;
      height:40px;
      line-height: 40px;
      background:rgba(0,0,0,1);
      font-size:18px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(230,230,230,1);
     text-align: center;
    }
  }
</style>