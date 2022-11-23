<template>
  <div class="login">
    <el-form class="form">
      <img src="@/assets/common/login-logo.png" alt="">
      <el-form-item>
        <el-input v-model="form.mobile" prefix-icon="el-icon-s-custom" />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          show-password
          prefix-icon="el-icon-s-finance"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="button">登录</el-button>
      </el-form-item>
      <el-form-item>
        <a href="#">还没有账号？立即注册</a>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        mobile: '',
        password: ''
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
