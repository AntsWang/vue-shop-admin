<template>
  <el-container class="container">
    <el-header>
      <div>
        <img src="../assets/logo.png" alt="logo" />
        <span>电商后台管理系统</span>
      </div>
      <el-button @click="logout"> 退出 </el-button>
    </el-header>
    <el-container>
      <el-aside width="201px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu
            v-for="(item, index) in menuList"
            :index="index"
            :key="index"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              v-for="(itemc, indexc) in item.children"
              :key="indexc"
              :index="index + '-' + indexc"
              ><template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ itemc.authName }}</span>
              </template></el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
    }
  },
  created() {
    this.getMenus()
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push("/login")
    },
    async getMenus() {
      const data = await this.$apis.getMenu()
      console.log(data)
      this.menuList = data
    },
  },
}
</script>

<style lang='less' scoped>
.el-header {
  display: flex;
  background-color: #373d41;
  justify-content: space-between;
  align-items: center;
  padding-left: 0px;
  > div {
    display: flex;
    color: #fff;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    span {
      font-size: 18px;
      margin-left: 10px;
    }
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
.container {
  height: 100%;
}
</style>
