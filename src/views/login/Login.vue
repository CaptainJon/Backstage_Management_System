<template>
  <div class="loginbg">
    <div class="loginbox">
      <!-- 登录背景图 -->
      <div class="logo"></div>
      <!-- 登录框标题 -->
      <h2 class="title">账号登录</h2>
      <!-- 登录表单 -->
      <el-form :model="loginForm" :rules="loginFormRule" ref="loginFormRef">
        <el-form-item prop="name">
          <el-input clearable suffix-icon="el-icon-user" placeholder="请输入账户名" v-model="loginForm.name" size="medium"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input show-password clearable suffix-icon="el-icon-lock" placeholder="请输入密码" v-model="loginForm.password" size="medium"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" size="medium" @click="login">登录</el-button>
      <div class="tips" @click="showPassTips">忘记密码?</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      // 登录表单数据
      loginForm: {
        name: '',
        password: ''
      },
      // 登录表单验证规则
      loginFormRule: {
        name: [
          { required: true, message: '账户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 忘记密码提示
    showPassTips() {
      this.$msgbox('如忘记用户名或密码，请联系张智峰QQ: 1619692829', '提示')
    },
    // 登录按钮
    login() {
      // 开启表单格式验证
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          // 格式验证成功
          this.$http.post('/api/gadmin/loginWithVerificationCodeServlet', this.loginForm).then(res => {
            var aaa = document.cookie
            console.log(aaa)
            console.log(11)
            // this.$message.success('登录成功')
            // this.$router.push('/home')
          }).catch(() => {
            this.$message.error('账户名或密码错误')
          })
        } else {
          // 格式验证失败
          return false
        }
      })
    }
  }
}
</script>

<style>
.loginbg{
  width: 100%;
  height: 100%;
  background: url('../../assets/images/login_bg.png') no-repeat;
  background-size: cover;
}
.loginbg .loginbox{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%)
}
.loginbg .loginbox .logo{
  width: 400px;
  height: 78px;
  background: url('../../assets/images/logo.png') no-repeat;
  padding-bottom: 15px;
}
.loginbg .loginbox .title{
  color: #fff;
  letter-spacing: 3px;
  text-align: center;
}
.loginbg .loginbox .el-form{
  margin-top: 15px;
}
.loginbg .loginbox .el-button{
  width: 100%;
}
.loginbg .loginbox .tips{
  color: #5167a3;
  margin-top: 15px;
  cursor: pointer;
  text-align: center;
}
</style>
