
import { Component, Mixins, Vue } from 'vue-property-decorator';

interface Iheader{
  id: RegExp | string;
  title: string;
}
/**
 * mixins 必须先用 Component 修饰
 * https://www.jianshu.com/p/d8ed3aa76e9b 说明很好
 *  */
@Component
export class HeaderMixin extends Vue {
 activeIndex2: string = '/'

 private menus: Array<Iheader> = [
   {
     id: '/',
     title: '首页',
   },
   {
     id: '/female',
     title: '女士',
   },
   {
     id: '/male',
     title: '男士',
   },
   {
     id: '/gift',
     title: '礼品套盒',
   },
   {
     id: '/tools',
     title: '美妆工具',
   },
   {
     id: '/clothing',
     title: '服装',
   },
   {
     id: '/show',
     title: '秀场',
   },
   {
     id: '/culture',
     title: '企业文化',
   },
   {
     id: '/cooperation',
     title: '跨境合作',
   },
 ]
}
