<template>
  <div class="container">
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      v-loading="loading.userInfo || loading.update"
    >
      <el-form-item prop="name" label="用户名">
        <el-input
          placeholder="请输入用户名"
          v-model="form.name"
          @keydown.enter="submit"
        />
      </el-form-item>
      <el-form-item prop="phone" label="手机号">
        <el-input
          placeholder="请输入手机号"
          v-model="form.phone"
          @keydown.enter="submit"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="submit"> 确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createNamespacedHelpers } from "vuex";
import { ActTypes } from "@/store/modules/user";

const { mapActions, mapState } = createNamespacedHelpers("user");

export default defineComponent({
  name: "UserInfoView",
  data() {
    return {
      form: {
        name: "",
        phone: "",
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空" },
          { min: 6, max: 20, message: "用户名长度在 6 到 20 个字符之间" },
        ],
        phone: [
          {
            required: true,
            message: "手机号不能为空",
          },
          {
            min: 11,
            max: 11,
            message: "手机号必须为 11 位数字",
          },
        ],
      },
    };
  },
  computed: {
    ...mapState(["userInfo", "loading"]),
  },
  watch: {
    userInfo({ name, phone }) {
      this.form.name = name;
      this.form.phone = phone;
    },
  },
  methods: {
    ...mapActions([ActTypes.GetUserAsync, ActTypes.UpdateUserAsync]),
    submit() {
      this.$refs["form"].validate(async (valid) => {
        if (!valid) {
          return false;
        }
        this[ActTypes.UpdateUserAsync]({
          name: this.form.name,
          phone: this.form.phone,
        });
      });
    },
  },
  mounted() {
    this[ActTypes.GetUserAsync]();
  },
});
</script>

<style scoped lang="scss">
.container {
  width: 400px;
}
</style>
