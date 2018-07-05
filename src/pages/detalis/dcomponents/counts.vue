<template>
  <div class="counts-component">
    <div class="counts-btn" @click="mins"> - </div>
    <div class="counts-show">
    <input type="text" v-model="number" @keyup="inputs"/>
  </div>
    <div class="counts-btn" @click="maxs"> + </div>
  </div>
</template>
<script>
export default {
  name: 'counts',
  data () {
    return {
      number: 1
    }
  },
  /* 父组件传的数据 */
  props: {
    max: {
      type: Number,
      default: 1/* 默认值 */
    },
    min: {
      type: Number,
      default: 1
    }
  },
  methods: {
    maxs () {
      if (this.number >= this.max) { /* 如果当前的max大于默认的就不在添加 */
        return
      }
      this.number++
      /* 否则继续可以增加 */
      this.$emit('countss', this.number)
      this.$store.dispatch('updateOrder', ['countss', this.number])
    },
    mins () {
      if (this.number <= this.min) {
        return
      }
      this.number--
      this.$emit('countss', this.number)
      this.$store.dispatch('updateOrder', ['countss', this.number])
    },
    inputs () {
      /* \D 非数字 */
      let fix = null
      if (typeof this.number === 'string') {
        fix = Number(this.number.replace(/\D/g, ''))
        /* /g为全局都要执行 不符合规范的转化为数值类型 只能为空字符串 */
      } else {
        /* 否则就是原来的数据1 */
        fix = this.number
      }
      /* 判断输入的数值是否合理 */
      this.number = fix
      if (fix > this.max || fix < this.min) {
        fix = this.min/* 如果输入的值有一个为false则把值设置为当前最小值 */
      }
      /* 然后将当前的fix设置到number */
      this.number = fix
      this.$emit('countss', this.number)
      this.$store.dispatch('updateOrder', ['countss', this.number])
    }
  }
}
</script>
<style scoped>
  .counts-component {
    position: relative;/* 生成相对定位的元素，相对于其正常位置进行定位 */
    display: inline-block;/* 行内块元素 */
    overflow: hidden;
    vertical-align: middle;/* 把此元素放置在父元素的中部 */
  }
  .counts-show {
    float: left;
  }
  .counts-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 3px;
    width: 30px;
    outline: none;/* 轮廓 */
    text-indent: 4px;/* 文本块中首行文本的缩进 */
  }
  .counts-btn {
    border:1px solid #e3e3e3;/* 整个外框的颜色 */
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;/* 鼠标变成可点状 */
  }
  .counts-btn:hover {/* 鼠标经过的样式 */
    border-color: #4fc08d;
    background: #4fc08d;
    color: white;
  }
</style>
