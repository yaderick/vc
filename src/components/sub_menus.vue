<template>
  <div class="sub-menu">
    <div>
      <p class="choice">您的选择</p>
      <span class="path">{{choice}}</span>
      <b class="line"></b>
    </div>
    <ul>
      <li class="classification">详细分类</li>
      <li class="gap">全部</li>
      <li class="gap">护肤品</li>
      <li class="gap">底妆</li>
      <li class="gap">香氛</li>
    </ul>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


interface ISbuMenus {
  id?: number,
  img_path: string,
  title: string,
  explain: string,
  price: number,
}


@Component
export default class SubMenus extends Vue {
  @Prop() private subMenus!: Array<ISbuMenus>;

  @Prop() private choice!: string;
}

</script>

<style lang="less" scoped>
  .sub-menu{
    font-size:14px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,1);
    text-align: left;

    .choice{
      font-size:18px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(155,155,155,1);
    }
    .path{
      display: block;
      margin: 25px 0 40px 0
    }
    .line{
      display: block;
      width:113px;
      height:1px;
      background:rgba(202,202,202,1);
    }
    .classification{
      margin-top: 38px;
      font-size:18px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(155,155,155,1);
    }
    .gap{
      margin-top: 20px;
      cursor: pointer;
    }
  }
</style>
