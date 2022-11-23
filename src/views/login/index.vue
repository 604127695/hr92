<template>
  <div class="login">
    <el-form ref="form" class="form" :model="form" :rules="rules">
      <img src="@/assets/common/login-logo.png" alt="">
      <el-form-item prop="mobile">
        <el-input v-model="form.mobile" prefix-icon="el-icon-s-custom" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          show-password
          prefix-icon="el-icon-s-finance"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="button"
          @click.native="submit"
        >登录</el-button>
      </el-form-item>
      <el-form-item>
        <a href="#">还没有账号？立即注册</a>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { sysLogin } from '@/api/login'
export default {
  data() {
    return {
      form: {
        mobile: '13800000002',
        password: '123456'
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '请输入正确的手机号',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async submit() {
      const result = await this.$refs.form.validate()
      if (result) {
        const res = await sysLogin(this.form)
        try {
          console.log(res)
          this.$message.success('登录成功')
          this.$store.dispatch('user/setToken', res.data)
          this.$router.push('/')
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-image: url('~@/assets/common/login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  .form {
    width: 450px;
    height: 350px;
    // background-color: blue;
    img {
      margin: 0 0 38px 5px;
    }
    ::v-deep .el-input__inner {
      height: 50px;
    }
    ::v-deep .el-input input {
      background-color: #d4e5ff;
    }
    ::v-deep .el-input__icon {
      font-size: 20px;
      color: #889aa4;
    }
    .button {
      width: 100%;
      height: 50px;
      font-size: 20px;
      color: #fff;
    }
    a {
      color: #fff;
      margin-left: 160px;
    }
  }
}
</style>
