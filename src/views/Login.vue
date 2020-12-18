<template>
  <el-form :model="form" status-icon :rules="rules" ref="form">
    <el-form-item prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit('form')">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// 登录页组件

import { login } from "@/api";
import { ElMessage } from "element-plus";

export default {
  name: "login-view",
  data() {
    return {
      form: {
        name: "adminadmin",
        password: "adminadmin",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名" },
          { min: 6, max: 20, message: "用户名长度在 6 到 20 个字符之间" },
        ],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const resp = await login({
            name: this.form.name,
            password: this.form.password,
          });
          if (typeof resp.data?.data === "string") {
            // 登录成功，保存 token
            ElMessage.success("登录成功");
            console.log("token: ", resp.data.data);
          }
        }
        return false;
      });

      // const t = this;
      // console.log("外部：", t.name, this.password);
      // this.$refs[formName].validate(async function (valid) {
      //   if (!valid) {
      //     return false;
      //   }
      //   // 校验合法，调用登录请求
      //   console.log("登录", this.form.name, this.form.password);
      //   const resp = await login({
      //     name: this.form.name,
      //     password: this.form.password,
      //   });
      //   console.log("resp: ", resp);
      // });
    },
  },
};
</script>

<style scoped></style>
