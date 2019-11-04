<template>
  <div class="vc-header">
    <div class="header-logo-wrapper">
      <img alt="verna chow" src="../assets/title.png" class="header-logo">
    </div>

    <div class="vc-header-menu">
    <el-menu
        :default-active="activeIndex2"
        router:true
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#000"
        text-color="#CBCBCB"
        active-text-color="#fff">
      <el-menu-item v-for = "item in menus" :index="item.id" :key="item.id">
        {{item.title}}
      </el-menu-item>

    </el-menu>
    </div>

  </div>
</template>

<script lang='ts'>

import { Component, Mixins, Vue } from 'vue-property-decorator';

import { HeaderMixin } from '../mixins/header_mixin';

@Component
export default class Header extends Mixins(HeaderMixin) {
  handleSelect(routerPath:any, indexPath: any): void{
    this.$router.push({ path: routerPath });
  }
}
</script>

<style lang="less" scoped>
  .vc-header{
    height: 141px;
    background: #000;
    position: relative;
    overflow: hidden;
    .header-logo-wrapper{
      padding-top: 20px;
      .header-logo{
      margin: 0 auto;
      width: 226px;
      height: 80px;
      }
    }
    .vc-header-menu{

    }

  }
</style>
