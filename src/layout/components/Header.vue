<template>
  <el-header class="header">
    <TitleBar @click="goToHome" />
    <el-dropdown placement="bottom">
      <div>
        <i class="el-icon-loading" v-if="loading.userInfo" />
        <span v-else class="user-name">
          <el-avatar
            class="avatar"
            size="medium"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <span class="user-name-text">{{ userInfo.name }}</span>
        </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="goToSetting"
            ><i class="el-icon-setting" />设置
          </el-dropdown-item>
          <el-dropdown-item divided @click="logout">
            <i class="el-icon-switch-button" />退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleBar from "@/layout/components/TitleBar.vue";
import auth from "@/utils/auth";
import { createNamespacedHelpers } from "vuex";
import { ActTypes } from "@/store/modules/user";

const { mapState, mapActions } = createNamespacedHelpers("user");

export default defineComponent({
  name: "Header",
  components: { TitleBar },
  computed: {
    ...mapState(["userInfo", "loading"]),
  },
  methods: {
    ...mapActions([ActTypes.GetUserAsync]),
    goToHome() {
      this.$router.push("/dashboard/home");
    },
    goToSetting() {
      this.$router.push("/setting/user-info");
    },
    logout() {
      auth.logout();
    },
  },
  mounted() {
    if (this.userInfo.id === 0) {
      this[ActTypes.GetUserAsync]();
    }
  },
});
</script>

<style scoped lang="scss">
.header {
  padding: 0 32px;
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

    .avatar {
      margin-right: 8px;
    }

    .el-icon-loading {
      font-size: 18px;
    }

    .user-name-text {
    }
  }
}
</style>
