<template>
  <div class="login">
    <div class="login-box">
      <div class="avatar">
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <el-form ref="formRef" :model="form" class="form" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            prefix-icon="iconfont icon-BARISTA"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            prefix-icon="iconfont icon-mima"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        username: "1234",
        password: "1234",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入用户密码",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    }
  },
  methods: {
    resetForm() {
      console.log(this)
      this.$refs.formRef.resetFields()
    },
    login() {
      const that = this
      this.$refs.formRef.validate(function (s, f) {
        if (s) {
          console.log(that)
          that.$message.success("校验通过")
          window.sessionStorage.setItem("token", "123456789")
          that.$router.push("/home")
        } else {
          that.$message.warning("校验失败")
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background-color: #2b4b6b;
  .login-box {
    width: 500px;
    height: 400px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: content-box;
    .avatar {
      width: 100px;
      height: 100px;
      border: 1px solid #ccc;
      padding: 6px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: -50px;
      transform: translateX(-50px);
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #ddd;
      }
    }

    .btns {
      display: flex;
      justify-content: flex-end;
    }

    .form {
      position: absolute;
      bottom: 80px;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
}
</style>
