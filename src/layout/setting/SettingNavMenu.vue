<template>
  <el-menu
    class="menu"
    router
    :default-active="activePath"
    :collapse="isCollapse"
  >
    <el-menu-item index="back" @click="goToHome">
      <i class="el-icon-back" />
      <template #title> 返回首页</template>
    </el-menu-item>
    <template v-for="router in routers">
      <el-menu-item
        v-if="!router?.meta?.hidden"
        :key="router.name"
        :index="router.name"
        :route="router"
      >
        <i v-if="router?.meta?.icon" :class="router.meta.icon" />
        <template #title>
          {{ router.name }}
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingNavMenu",
  props: {
    isCollapse: { type: Boolean, default: false },
  },
  computed: {
    routers() {
      return this.$router.options.routes.find(({ path }) => path === "/setting")
        .children;
    },
    activePath() {
      return this.$route.name;
    },
  },
  methods: {
    goToHome() {
      this.$router.push("/dashboard/home");
    },
  },
});
</script>

<style scoped lang="scss">
.menu {
  flex: 1;
}

.menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
