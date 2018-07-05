<template>
  <div class="chooser-component">
    <!-- 在ul中的li标签渲染 -->
    <ul class="chooser-list">
      <!-- 将当前数组遍历出来，通过点击将当前的index传到父组件中，通过绑定title动态显示lable。然后使用绑定class动态将当前的样式赋予对应的银行图标，使用的是数组，是否显示使用的是对象 -->
      <li
        v-for="(item, index) in banks" :key="index" @click="chooseSelection(index)" :title="item.label" :class="[item.name, {active: index === nowIndex}]"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /* 当前选择的nowIndex,默认为0 */
      nowIndex: 0,
      /* 一个放置银行数据的数组 */
      banks: [
        {
          id: 201,
          label: '招商银行',
          name: 'zhaoshang'
        },
        {
          id: 301,
          label: '中国建设银行',
          name: 'jianshe'
        },
        {
          id: 1000,
          label: '交通银行',
          name: 'jiaotong'
        },
        {
          id: 101,
          label: '中国工商银行',
          name: 'gongshang'
        },
        {
          id: 401,
          label: '中国农业银行',
          name: 'nongye'
        },
        {
          id: 701,
          label: '中国银行',
          name: 'zhongguo'
        },
        {
          id: 801,
          label: '储蓄银行',
          name: 'chuxu'
        },
        {
          id: 901,
          label: '支付宝',
          name: 'zhifubao'
        }
      ]
    }
  },
  methods: {
    chooseSelection (index) {
      this.nowIndex = index
      /* 将当前选择的银行传到父组件 */
      this.$emit('on-change', this.banks[index])
      /* 将当前选择的银行ID传到仓库 */
      this.$store.dispatch('updateOrder', ['BankId', this.banks[index].id])
    }
  }
}
</script>
  <style scoped>
    .chooser-component {
      position: relative;
      display: inline-block;
    }
    .chooser-list li.active {
      border: 1px solid #4fc08d;
    }
    .chooser-list li {
      display: inline-block;
      width: 117px;
      height: 32px;
      background-image: url('../../../assets/banks.png');
      background-repeat: no-repeat;
      margin: 5px;
      border: 1px solid #e3e3e3;
      cursor: pointer;
    }
    /* 通过样式动态控制定位当前显示的银行图标 */
    .zhaoshang {
      background-position: -2160px 0;
    }
    .jianshe {
      background-position: -720px 0;
    }
    .pufa {
      background-position: -1800px 0;
    }
    .zhifubao {
      background-position: -1918px 0;
    }
    .jiaotong {
      background-position: -3120px 0;
    }
    .minsheng {
      background-position: -2760px 0;
    }
    .pingan {
      background-position: -2400px 0;
    }
    .beijing {
      background-position: -960px 0;
    }
    .xingye {
      background-position: 0 0;
    }
    .shanghai {
      background-position: -1560px 0;
    }
    .guangfa {
      background-position: -840px 0;
    }
    .gongshang {
      background-position: -2640px 0;
    }
    .nongye {
      background-position: -1680px 0;
    }
    .guangda {
      background-position: -2280px 0;
    }
    .zhongguo {
      background-position: -2520px 0;
    }
    .zhongxin {
      background-position: -480px 0;
    }
    .chuxu {
      background-position: -120px 0;
    }
    .bnongshang {
      background-position: -1440px 0;
    }
    .huaxia {
      background-position: -2040px 0;
    }
    .snongshang {
      background-position: -2880px 0;
    }

    .baifubao {
      background-position: -1320px 0;
    }
  </style>
