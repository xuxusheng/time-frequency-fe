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
        :key="router.name"
        :index="router.name"
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasicNavMenu",
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
      return this.$route.name;
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
