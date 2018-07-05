<template>
  <div>
  <div class="app-head">
    <div class="app-head-inner">
      <router-link to="/">
        <img src="../../../assets/logo.png" alt="">
      </router-link>
      <span>MISELL</span>
    </div>
    <div class="success-ince">
      <router-link to="/details/cat">
      <img src="../../../assets/cat2.jpg"/>
      </router-link>
      <!--<div>
      <router-link to="/" v-for="(item, index) in shoplist" :key="index">
        {{ item.title }}
      </router-link>
      </div>-->
      <div class="success-incespan">
      <span>数量：{{ getOrders.countss }}</span>
       <!-- <span>/类型：{{ getOrders.select }}</span>
        <span>/有效时间：{{ getOrders.radioslist }}</span>-->
      </div>
    <div class="success-top">
      <b class="succ-icon"></b>
    <h3 class="font-01">商品已成功加入购物车！</h3>
    </div>
      <div class="btn-a">
        <router-link to="/">去购物车结算</router-link>
      </div>
  </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'shopping',
  data() {
    return {
      shoplist: [
        {
          title: '开源产品'
        },
        {
          title: '品牌产品'
        },
        {
          title: '特色产品'
        },
        {
          title: '学生特惠'
        }
      ]
    }
  },
  computed: {
    getprice() {
      return this.$store.getters.getPrice
    },
    getOrders() {
      return this.$store.getters.getOrder
    }
  }
}
</script>
<style scoped>
  .success-ince {
    position: relative;
  }
  .success-ince img {
    overflow: hidden;
    position: absolute;
    left: 200px;
    top: 85px;
  }
  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }
  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }
  .app-head-inner img {
      width: 50px;
      margin-top: 20px;
    }
  .app-head-inner span {
    font-size: 23px;
    position: relative;
    top: -20px;
  }
  .font-01 {
    color: #71b247;
  }
  .success-top {
    position: relative;
    padding-left: 236px;
    margin: -10px 0;
    font-size: 18px;
  }
  .succ-icon {
    position: absolute;
    left: 200px;
    top: 33px;
    overflow: hidden;
    background: url("../../../assets/addtocart-icons.png")0 0 no-repeat;
    width: 25px;
    height: 25px;
    border-radius: 50px;
  }
  .success-incespan {
    position: absolute;
    left: 273px;
    top: 85px;
  }
  .btn-a {
    position: absolute;
    left: 1340px;
    top: 128px;
    width: 135px;
    height: 34px;
    background-color: red;
    color: #fff;
    line-height: 34px;
    font-size: 16px;
    text-align: center;
  }
</style>
