<template>
  <div class="selection-component" >
    <div class="selection-show" @click="showHide">
      <span>{{ this.SelectData[nowIndex].name }}</span>
      <div class="arrow"></div>
    </div>
    <div class="selection-list" v-show="show">
      <ul>
        <li @click="selectlist(index)" v-for="(items, index) in SelectData" :key="index">{{ items.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'selectdown',
  data() {
    return {
      nowIndex: 0,
      show: false
    }
  },
  props: {
    /* props只能是对象 */
    SelectData: {
      type: Array,
      default: function () {
        return [
          {
            name: 'test',
            value: 1
          }
        ]
      }
    }
  },
  methods: {
    selectlist(index) { /* 获取上面传下来的索引nowIndex */
      /* 将点击的当前事件赋值给上面默认的nowIndex */
      this.nowIndex = index
      this.show = false /* 点击事件之后将show设置为False */
      this.$emit('select', this.SelectData[index].value)/* 以SelectData作为索引 */
      this.$store.dispatch('updateOrder', ['select', this.SelectData[index].value])
    },
    showHide() {
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
  .selection-component {
    position: relative;/* 属性可向对于一个元素的当前位置来定位此元素 */
    display: inline-block;/* 行内块元素 */
  }
  .selection-show {
    border: 1px solid #e3e3e3;
    padding: 0 20px 0 10px;
    display: inline-block;
    position: relative;/* 相对定位 */
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    background: #fff;
  }
  .selection-show .arrow {
    /* 下拉三角形 */
    display: inline-block;/* 行内块元素 */
    border-left: 4px solid transparent; /* 背景颜色为透明 */
    border-right: 4px solid transparent;
    border-top: 5px solid #e3e3e3;
    width: 0;
    height: 0;
    margin-top: -1px;
    margin-left: 6px;
    margin-right: -14px;
    vertical-align: middle;/* 把此元素放置在父元素的中部 */
  }
  .selection-list {
    display: inline-block;
    position: absolute;/* 绝对定位 */
    left: 0;
    top: 25px;
    width: 100%;
    background: #ffff;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    z-index: 5;
  }
  .selection-list li {
    padding: 5px 15px 5px 10px;
    border-left: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
    cursor: pointer;
    background: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .selection-list li:hover {
    background: #e3e3e3;
  }
</style>
