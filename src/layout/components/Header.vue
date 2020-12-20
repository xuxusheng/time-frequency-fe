<template>
  <el-header class="header">
    <TitleBar @click="goToHome" />
    <el-dropdown placement="bottom">
      <div class="user-name" @click="goToInfo">
        <el-avatar
          size="medium"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <span class="user-name-text"> 用户名 </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="goToSetting"
            ><i class="el-icon-setting" />设置
          </el-dropdown-item>
          <el-dropdown-item>
            <i class="el-icon-switch-button" />
            <el-popconfirm
              confirmButtonText="YES"
              cancelButtonText="NO"
              icon="el-icon-info"
              iconColor="red"
              title="请问您确认要退出吗？"
              @confirm="logout"
            >
              <template #reference>
                <el-button type="text">退出登录</el-button>
              </template>
            </el-popconfirm>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleBar from "@/layout/components/TitleBar.vue";
import { setToken } from "@/utils";

export default defineComponent({
  name: "Header",
  components: { TitleBar },
  methods: {
    goToHome() {
      this.$router.push("/dashboard/home");
    },
    goToSetting() {
      this.$router.push("/setting/user-info");
    },
    goToInfo() {
      this.$router.push("/setting/user-info");
    },
    logout() {
      setToken("");
      this.$router.push("/login");
    },
  },
});
</script>

<style scoped lang="scss">
.header {
  padding: 0 48px 0 32px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 10;

  .user-name {
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;

    .user-name-text {
      margin-left: 8px;
    }
  }
}
</style>
