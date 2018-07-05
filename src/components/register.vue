<template>
  <div>
  <div class="app-head">
    <div class="app-head-inner">
      <router-link to="/">
        <img src="../assets/logo.png" alt="">
      </router-link>
      <span> 注册界面</span>
    </div>
  </div>
  <div class="body-register">
  <div class="center-register">
    <h1 class="wh-font">会员注册</h1>
    <form action="../components/logins.vue">
    <input type="text" placeholder="设置您的会员名">
    <input type="text" placeholder="设置您的密码">
    <input type="text" placeholder="再次确认密码">
    <div class="reg-input">
    <input type="submit" value="注册"/>
    </div>
    </form>
  </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data() {
    return {}
  }
}
</script>
<style scoped>
  body {
    background-color: #F5F5F6;
    margin: 0;
    padding: 0;
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
      position: relative;
      top: -20px;
    font-size: 18px;
    margin: 0 5px;
    }
  .center-register {
    box-shadow: 0 0 0 10px rgba(152, 141, 141, 0.1);
    width: 350px;
    height: 318px;
    background: #fff;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -175px;
    margin-top: -159px;
    border-radius: 5px;
  }
  .wh-font {
    font-size: 28px;
    text-align: center;
    margin: 10px 0;
  }
  .center-register input {
    width: 250px;
    height: 40px;
    line-height: 40px;
    color: #606266;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    display: inline-block;
    font-size: inherit;
    padding: 0 15px;
    margin: 10px 35px;
  }
  .reg-input>input {
    color: #fff;
    background-color: #409EFF;
    width: 282px;
  }
  .reg-input>input:hover {
    background-color: #408Eff;
  }
</style>
