<template>
  <el-menu
    class="menu"
    router
    :default-active="activePath"
    :collapse="isCollapse"
  >
    <template v-for="router in routers">
      <el-menu-item
        v-if="!router?.meta?.hidden"
        :key="router.path"
        :index="router.path"
        :route="router"
      >
        <i v-show="router?.meta?.icon" :class="router.meta.icon" />
        <template #title>
          {{ router.name }}
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
export default {
  name: "NavBar",
  props: {
    isCollapse: { type: Boolean, default: false },
  },
  computed: {
    routers() {
      return this.$router.options.routes.find(
        ({ path }) => path === "/dashboard"
      ).children;
    },
    activePath() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style scoped lang="scss">
.menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
