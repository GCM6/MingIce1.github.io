<template>
  <div class="wamp">
    <div class="imgage-im">
    </div>
    <div class="actives-login">
      <h1 class="h1">账号登录</h1>
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item  prop="userName">
    <el-input type="text" placeholder="请输入账号" v-model="ruleForm2.userName" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item  prop="pass">
    <el-input type="password" placeholder="请输入密码" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
    <div class="long-register">
      没有账号？
    <router-link to="/register">注册</router-link>
    </div>
  </el-form-item>
</el-form>
    </div>
  </div>
</template>
<script>
import {requestLogin} from '../api/api'
export default {
  name: 'logins',
  data() {
    let validateuserName = (rule, value, callback) => {
      let pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g /* 3-10个字母/汉字/数字/下划线 */
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else if (!pattern.test(value)) {
        callback(new Error('请输入3-10个字母/汉字/数字/下划线'))
      } else {
        callback()
      }
    }
    let validatePass = (rule, value, callback) => {
      let pattern = /^\S{3,20}$/g
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (!pattern.test(value)) {
        callback(new Error('请输入3-20个非空白字符'))
      } else {
        callback()
      }
    }
    return {
      logining: false,
      ruleForm2: {
        userName: '',
        pass: ''
      },
      rules2: {
        userName: [
          { validator: validateuserName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /* alert('submit!') */
          this.logining = true
          let loginParams = {userName: this.ruleForm2.userName, pass: this.ruleForm2.pass}
          /* 把loginParams保存的账号密码传到api.js，然后在api.js发送数据，再拦截数据mockjs */
          requestLogin(loginParams).then(data => {
            this.logining = false
            let {msg, code, token} = data
            /* 如果code等于200 */
            if (code === 200) {
              /* 则将用户信息保存在sessionStorage */
              sessionStorage.setItem('access-token', token)
              /* 跳转到主页 */
              this.$router.push({path: '/'})
            } else {
              /* 否则提示错误信息 */
              alert(msg)
              console.log(code)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  resetForm(formName) {
    this.$refs[formName].resetFields()
  }
}

</script>
<style scoped>
  .wamp {
    width: 100%;
    height: 100%;
    position: relative;/* 父盒子相对定位 */
    font: 100% "Microsoft YaHei",tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
  }
  .imgage-im {
    margin: 90px auto;
    width: 1900px;
    height: 800px;
    overflow: hidden;
    background: url("../assets/login.jpg")no-repeat;/* 不平铺 */
    background-size: cover;/* 适应大小 */
    display: inline-block;
  }
  .actives-login {
    position: absolute; /* 子盒子绝对定位 */
    top: 280px;
    left: 1300px;
    width: 350px;
    height: 317px;
    margin-left: -60px;
  }
  .h1 {
     height: 45px;
     line-height: 45px;
     color: #4ab08d;
     font-size: 28px;
     font-weight: normal;
    margin-left:99px ;
    margin-bottom: 10px;
   }
  .long-register {
    float: right;
    color: #9B9EA0;
  }
</style>
