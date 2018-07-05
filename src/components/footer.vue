<template>
  <div class="app-foot">
    <p> 品类齐全，轻松购物，正品行货，物美廉价，精致服务，天天低价，极速配送</p>
  </div>
</template>
<script>
export default {
  name: 'footers',
  data() {
    return {}
  }
}
</script>
<style scoped>
  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;/* both 在左右两侧均不允许浮动元素 */
    margin-top: 30px;
  }
  .app-foot p {
    display: inline-block;
  }
</style>
