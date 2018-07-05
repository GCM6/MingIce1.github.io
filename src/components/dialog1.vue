<template>
  <div>
    <div class="dialogs" v-if="isShows" @click="closeMyself"></div>
    <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
    <!-- 内容-->
    <div class="dialog-content" v-if="isShows">
      <div class="dialog_main">
        <!--弹窗内容-->
        <slot name="main">弹窗内容</slot>
      </div>
      <div class="foot_close" @click="closeMyself"><p>X</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DiaLog',
  data() {
    return {}
  },
  props: {
    isShows: {
      type: Boolean,
      default: false /* 默认不显示 */
    }
  },
  methods: {
    closeMyself() {
      this.$emit('on-close')
    }
  }
}
</script>
<style scoped>
  /* // 最外层 设置position定位 遮罩层*/
  .dialogs {
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 120%;
    background: rgba(0,0,0,0.8);
    z-index: 4800;
  }
  /*内容层 z-index要比遮罩大，否则会被遮盖，*/
  /* 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩*/
  /*内容层 z-index要比遮罩大，否则会被遮盖，*/
  .dialog-content {
    width: 520px;
    position: fixed;
    left: 50%;
    top: 25%;
    border-radius: 5px;
    margin-left: -250px;
    background: white;
    z-index: 5000;
    border: 1px solid black;
  }
  .dialog_head {
    width: 56px;
    height: 43px;
    margin: 10px auto;/* 自适应，居中 */
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  /* 内容样式 */
  .dialog_main {
    background: #ffffff;
    display: flex;/* 弹性布局 */
    justify-content: center;
    align-content: center;
    width: 96%;
    margin: 2px auto;
     padding: 40px 0 47px 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  /* 关闭按钮的样式 */
  .foot_close {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    justify-content: center;
    align-content: center;
    top: -6px;
    left: 91%;
    cursor: pointer;/* 手势 */
  }
  /* 最终关闭按钮的样式 */
  .foot_close p {
    text-align: center;/*文字居中*/
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 50px;
    /* background: #fcca03;*/
    cursor: pointer;/* 手势 */
  }
  .dialog_footer {
    background: #ffffff;
    margin: 0 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .dialog_footerbtn {
    background: #ffffff;
    margin: 10px 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
</style>
