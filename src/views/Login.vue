<template>
  <div class="root">
    <div class="container">
      <h1 class="header"><i class="el-icon-timer" /> 时频培训系统</h1>
      <el-form :model="form" status-icon :rules="rules" ref="form">
        <el-form-item prop="name">
          <el-input v-model="form.name" @keydown.enter="submit('form')" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" @keydown.enter="submit('form')" />
        </el-form-item>
        <el-form-item>
          <el-button
            class="btn"
            type="primary"
            :loading="loading.login"
            @click="submit('form')"
            >登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
// 登录页组件

import { defineComponent } from "vue";

import Footer from "@/layout/components/Footer.vue";
import { createNamespacedHelpers } from "vuex";
import { ActTypes } from "@/store/modules/user";

const { mapActions, mapState } = createNamespacedHelpers("user");

export default defineComponent({
  name: "LoginView",
  components: {
    Footer,
  },
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
  computed: {
    ...mapState(["loading"]),
  },
  methods: {
    ...mapActions([ActTypes.LoginAsync, ActTypes.GetUserAsync]),
    submit(formName: string) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) {
          return false;
        }
        if (this.loading.login) {
          return;
        }
        await this[ActTypes.LoginAsync]({
          name: this.form.name,
          password: this.form.password,
        });
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.root {
  min-height: 100vh;
  min-width: 100vw;
}

.container {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  width: 60%;
  min-width: 300px;
}

.header {
  color: #409eff;
  text-align: center;
  margin-left: -32px;
}

.btn {
  width: 100%;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #909399;
  text-align: center;

  a,
  a:visited,
  a:focus {
    color: #409eff;
  }
}
</style>
