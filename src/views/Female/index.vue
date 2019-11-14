<template>
  <div class="female">
    <el-row :gutter="0">
      <el-col :span="4">

      </el-col>
      <el-col :span="16">
         <el-container>
            <el-aside width="200px">
              <SubMenus :choice ="choice" :classification = "classification"/>
            </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
        </el-container>
      </el-col>
      <el-col :span="4">

      </el-col>
    </el-row>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SubMenus from '@/components/sub_menus.vue';

@Component({
  components: {
    SubMenus,
  },
})


export default class Index extends Vue {

  name = 'female'

  choice = '女士'

  classification = [
    {
      id:'/female-all',
      name: '全部'
    },
     {
      id:'/female/skin',
      name: '护肤品'
    },
     {
      id:'',
      name: '底妆'
    },
     {
      id:'',
      name: '香氛'
    }
  ]

  
}
</script>

<style lang="less" scoped>
  .female{
    position: relative;
    width: 100%;
    text-align: left;
    padding-top: 56px;
  }
</style>