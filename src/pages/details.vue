<template>
  <div>
    <div><Headers></Headers></div>
  <div class="detail-warp">
    <div class="detail-left">
      <div class="product-board">
        <!-- 对应显示的图标 -->
        <img :src="getUrl" alt="">
        <ul>
          <!--active-class="active"默认样式 tag转化为li标签-->
          <router-link active-class="active" :to="{path:'/details/'+nav.tag}" v-for="(nav, index) in detalist" :key="index" tag="li">
            {{ nav.title }}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <router-view></router-view>
    </div>
  </div>
    <div><Footers ></Footers></div>
  </div>
</template>
<script>
export default {
  name: 'details1',
  data() {
    return {
      detalist: [
        {
          title: '开源产品',
          tag: 'cat'
        },
        {
          title: '品牌产品',
          tag: 'make'
        },
        {
          title: '特色产品',
          tag: 'trait'
        },
        {
          title: '学生特惠',
          tag: 'student'
        }
      ],
      imgUrl: {
        /* 将当前点击的路径指定特定图标 */
        '/details/cat': require('../assets/cat1.jpg'),
        '/details/make': require('../assets/make1.jpg'),
        '/details/trait': require('../assets/trait1.jpg'),
        '/details/student': require('../assets/st1.jpg')
      }
    }
  },
  computed: {
    getUrl() {
      /* console.log(this.$route.path) */
      return this.imgUrl[this.$route.path] /* 获取当前点击的路径 */
    }
  }
}
</script>
<style>
  .detail-warp {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;/* 隐藏溢出，清除浮动 */
    padding: 20px;
  }
  .detail-left {
    float: left;/* 左浮动 */
    width: 200px;/* 宽度为200像素*/
    text-align: center;/* 文本居中 */
  }
  .detail-right {
    float: left;/* 左浮动 */
    width: 980px;/* 宽度为980像素 */
    margin-left: 20px;/* 左外边距20像素 */
  }
  .product-board {
    background: #fff;
    padding: 20px 0;/* 内编辑上下20像素，左右0像素 */
  }
  .product-board ul {
    margin-top: 20px;/* 外边距上20像素 */
  }
  .product-board li {
    text-align: left;/* 文本左对齐 */
    padding: 10px 15px;
    cursor: pointer;
  }
  .product-board li.active, .product-board li:hover {
    background: #4fc08d;
    color: aliceblue;
  }
  .product-board li a {
    display: block;/* 块元素 */
  }
  .sales-board {
    background: #fff;
  }
  .sales-board-intro h2 {
    font-size: 20px;
    padding: 20px;
  }
  .sales-board-intro p {
    width: 960px;
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
    word-wrap:break-word;
    word-break:break-all;
  }
  .sales-board-form {
   padding: 30px 20px;
    font-size: 14px;
  }
  .sales-board-line {
    clear: both;/* 左右俩侧不允许出现浮动元素 */
    padding-bottom: 20px;
  }
  .sales-board-line-left {
    display: inline-block;/* 行内块元素行内块元素 */
    width: 100px;
  }
  .sales-board-line-right {
    display: inline-block;
    width: 75%;
  }
  .sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
  }
  .sales-board-des p {
    line-height: 1.6;
  }
  .sales-board-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
  }
  .sales-board-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
  }
  .sales-board-des li {
    padding: 5px 0;
    width: 960px;
  }
  .sales-board-table {
    width: 100%;
    margin-top: 20px;
  }
  .sales-board-table th {
    background: #4fc08d;
    color: white;
  }
  .sales-board-table td {
    border: 1px solid white;
  }

</style>
