<template>
  <div class="navbar">
    <hamburger
      :is-active="$store.state.app.sidebar.opened"
      class="hamburger-container"
      @click.native="iconClick"
    />
    <div class="company">
      <span>江苏传智播客教育科技股份有限公司</span>
      <span class="exp">体验版</span>
    </div>
    <el-dropdown>
      <div class="user">
        <img
          v-imgerror="avatar"
          :src="$store.state.user.userInfo.staffPhoto"
          alt=""
        >
        <span class="username">{{ $store.state.user.userInfo.username }}</span>
        <i class="el-icon-arrow-down" />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>项目地址</el-dropdown-item>
          <el-dropdown-item @click.native="gohome">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import hamburger from '@/components/Hamburger'
export default {
  components: {
    hamburger
  },
  data() {
    return {
      avatar: require('@/assets/common/bigUserHeader.png')
    }
  },
  methods: {
    // 退出
    gohome() {
      this.$confirm('你确定要退出吗？')
        .then(() => {
          this.$message.success('登录成功')
          this.$store.commit('user/LOGOUT')
          this.$router.push('/login')
        })
        .catch(() => {})
    },
    iconClick() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #4d7dfc;
  color: #fff;
  .user {
    display: flex;
    align-items: center;
    margin-right: 10px;
    color: #fff;
    .username {
      margin: 0 12px;
    }
  }
  .company {
    flex: 1;
    .exp {
      padding: 4px;
      border-radius: 8px;
      background-color: #84a9fe;
      margin-left: 10px;
      font-size: 13px;
    }
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .hamburger-container {
    cursor: pointer;
    ::v-deep svg {
      fill: #fff;
    }
  }
}
</style>
