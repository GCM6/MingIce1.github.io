<template>
  <div>
    <!-- @监听子组件发生过来的，：绑定事件 -->
    <MyDialog :isShow="isShowDialog" @on-close="CloseMyslef">
      <p slot="main">本站是一个小型网上商品购买平台，能满足日常的购买需求。。。</p>
    </MyDialog>
  <div class="app-head">
    <div class="app-head-inner">
      <router-link to="/">
        <img src="../assets/logo.png" alt="">
      </router-link>
      <span>Misell品牌: 品牌成就特色 | 特色成就唯一 | 唯一成就高端大气上档次 </span>
      <div class="head-nav">
        <keep-alive>
          <ul  class="nav-list">
            <li>{{ tokens }}</li>
            <li v-if="tokens!== ''">&nbsp;&nbsp;|&nbsp;&nbsp;</li>
            <li v-if="tokens!== ''" @click="Quitsback">退出</li>
            <li v-if="tokens === ''"><router-link to="/login" class="head-navs" >登录</router-link>
            </li>
            <li class="nav-pile" v-if="tokens === ''">|</li>
            <li v-if="tokens === ''"> <router-link to="/register" class="head-navs">注册</router-link></li>
            <li class="nav-pile" v-if="tokens === ''">|</li>
            <li @click="labout" v-if="tokens === ''">关于</li>
          </ul>
        <!--<ul class="nav-list" v-if="show">
          <router-link to="/login" class="head-navs" >登录</router-link>
          <li class="nav-pile">|</li>
          <router-link to="/register" class="head-navs">注册</router-link>
          <li class="nav-pile">|</li>
          <li @click="labout">关于</li>
        </ul>-->
         <!-- <ul v-else>欢迎您：{{ tokens }} </ul>-->
        </keep-alive>
      </div>
    </div>
  </div></div>
</template>
<script>
import DiaLog from '../components/dialog'
export default {
  name: 'headers',
  components: { MyDialog: DiaLog },
  data () {
    return {
      isShowDialog: false,
      show: true,
      tokens: ''
    }
  },
  created() {
    this.changelogin()
  },
  methods: {
    changelogin() {
      /* 获取存在sessionStorage的用户信息 */
      let token = window.sessionStorage.getItem('access-token')
      if (token) {
        this.show = !this.show
        this.tokens = token
      }
    },
    labout() {
      this.isShowDialog = true
      /* alert(this.isShowDialog) */
    },
    CloseMyslef() {
      this.isShowDialog = false
    },
    Quitsback() {
      window.sessionStorage.clear()
      console.log(window.sessionStorage.getItem('access-token'))
      this.tokens = ''
    }
  }
}
</script>
<style scoped>
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

  .head-logo {
    float: left;
  }

  .app-head-inner span {
    position: relative;
    top: -20px;
  }

  .app-head-inner img {
    width: 50px;
    margin-top: 20px;
  }

  .head-nav {
    float: right;
  }

  .head-nav ul {
    overflow: hidden;
  }

  .head-nav li {
    cursor: pointer;
    float: left;
  }
  .head-navs {
    cursor: pointer;
    float: left;
  }

  .nav-pile {
    padding: 0 10px;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .hr {
    height: 1px;
    width: 100px;
    background: #ddd;
  }

  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
  }

  .button:hover {
    background: #4fc08d;
  }

  .g-form {
  }

  .g-form-line {
    padding: 15px 0;
  }

  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }

  .g-form-input {
    display: inline-block;
  }

  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }

  .g-form-btn {
    padding-left: 100px;
  }

  .g-form-error {
    color: red;
    padding-left: 15px;
  }
</style>
