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
          <el-input
            clearable
            placeholder="请输入账户名"
            size="medium"
            suffix-icon="el-icon-user"
            v-model="loginForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            clearable
            placeholder="请输入密码"
            show-password
            size="medium"
            suffix-icon="el-icon-lock"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="login" size="medium" type="primary">登录</el-button>
      <div @click="showPassTips" class="tips">忘记密码?</div>
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
        name: '', // 账户
        password: '' // 密码
      },
      // 登录表单验证规则
      loginFormRule: {
        name: [{ required: true, message: '账户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
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
          this.$http.get('/gadmin/loginWithVerificationCodeServlet2', {
            params: {
              name: this.loginForm.name,
              password: this.loginForm.password
            }
          }).then(res => {
            // 判断是否具有token
            const token = res.data.split(':').includes('token')
            console.log(token)
            if (token) {
              // 获取token字符串
              let tokenStr = res.data.split(':')[1]
              // 设置token值
              // document.cookie = 'gadmin-user=' + tokenStr
              window.sessionStorage.setItem('gadmin-user', tokenStr)
              this.$message.success('登录成功')
              // 跳转到首页
              this.$router.push('home')
            } else {
              this.$message.error('账户或密码错误')
            }
          }).catch(err => {
            return err
          })
        }
      })
    }
  }
}
</script>

<style>
.loginbg {
  width: 100%;
  height: 100%;
  background: url('../../assets/images/login_bg.png') no-repeat;
  background-size: cover;
}
.loginbg .loginbox {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.loginbg .loginbox .logo {
  width: 400px;
  height: 78px;
  background: url('../../assets/images/logo.png') no-repeat;
  padding-bottom: 15px;
}
.loginbg .loginbox .title {
  color: #fff;
  letter-spacing: 3px;
  text-align: center;
}
.loginbg .loginbox .el-form {
  margin-top: 15px;
}
.loginbg .loginbox .el-button {
  width: 100%;
}
.loginbg .loginbox .tips {
  color: #5167a3;
  margin-top: 15px;
  cursor: pointer;
  text-align: center;
}
</style>
