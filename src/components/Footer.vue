<template>
  <div class="vc-footer">
    <div>
      <p class="logo">V E R N A  <span style="display:inline-block; width:20px"></span>   C H O W</p>
      <div class="icons">
        <el-row :gutter="0">
         <el-col :span="4">

        </el-col>
         <el-col :span="16" class="footer-icons">
           <div v-for="item in icons" :key="item.img_path">
              <img :src="item.img_path" alt="">
              <p class="p-title">{{item.title}}</p>
              <p class="p-explain">  {{item.explain}}</p>
          </div>
        </el-col>
         <el-col :span="4">
        </el-col>
      </el-row>

      </div>
      <p class="line"></p>
      <div >
        <el-row :gutter="0">
         <el-col :span="4">

        </el-col>
         <el-col :span="16" class="contact-us" >
           <div>
           <p class="p-title">联系我们</p>
           <p class="p-explain">  客服热线：022-66230599</p>
           <p class="p-explain">  公司邮箱：bellaromverna@163.com</p>
        </div>
         <div>
           <p class="p-title">加盟商招募</p>
           <p class="p-explain">  招商电话：18202220802</p>
           <p class="p-explain">  公司地址：天津市滨海新区博润商务广场2号楼3层</p>
        </div>
         <div  class="qr-wrapper">
           <img src="../assets/qr.png" alt="" class="qr">
           <div style="margin-left:34px">
              <p class="p-title">关注我们</p>
              <p class="p-explain">  扫描并关注二维码</p>
              <p class="p-explain"> 获得维纳周最新优惠消息</p>
           </div>

        </div>
        </el-col>
         <el-col :span="4">
        </el-col>
      </el-row>


      </div>

    </div>
  </div>
</template>

<script lang='ts'>

import { Component, Mixins, Vue } from 'vue-property-decorator';


@Component
export default class Header extends Vue {
  icons = [
    {
      img_path: require('../assets/9.png'),
      title: '正品保障',
      explain: '维纳.周总部直供',
    },
    {
      img_path: require('../assets/10.png'),
      title: '正品保障',
      explain: '运输速度快',
    },
    {
      img_path: require('../assets/11.png'),
      title: '正品保障',
      explain: '为您解答护肤专业问题',
    },
    {
      img_path: require('../assets/12.png'),
      title: '正品保障',
      explain: '享受奢宠购物体验',
    },
  ]
}
</script>

<style lang="less" scoped>
  .vc-footer{
    text-align:center;
    p{
      margin: 0;
      padding: 0;
    }
   height:680px;
   background:#000;
    .logo{
      padding-top: 60px;
      font-size:34px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .icons{
      margin-top: 65px;
      margin-bottom: 83px;
      .footer-icons{
        display: flex;
      flex-direction:row;
      justify-content:  space-between;
      }

      .p-title{
        margin-top: 25px;
        font-size:18px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
      }
      .p-explain{
         margin-top: 14px;
        font-size:14px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(127,127,127,1);
      }
    }
    .line{
      height:1px;
      background:rgba(117,117,117,1);
    }
    .contact-us{
      text-align: left;
       display: flex;
      flex-direction:row;
      justify-content:  space-between;
      margin-top: 65px;
      .p-title{
        margin-top: 25px;
        font-size:18px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
      }
      .p-explain{
         margin-top: 14px;
        font-size:14px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(127,127,127,1);
      }
    }
    .qr-wrapper{
      display: flex;
      align-items: flex-end;
       .qr{
          width: 86px;
          height: 86px;
       }
    }

  }
</style>
