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
import { defineComponent, watchEffect, computed, toRefs } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "BasicNavMenu",
  props: {
    isCollapse: { type: Boolean, default: false },
  },
  // computed: {
  //   // routers() {
  //   //   return this.$store.getters.permissionRoutes.find(
  //   //     ({ path }) => path === "/dashboard"
  //   //   )?.children;
  //   // },
  //   activePath() {
  //     return this.$route.name;
  //   },
  // },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const routers = computed(() => {
      // console.log(store.getters?.permissionRoutes);
      // return store.getters?.permissionRoutes?.[1]?.children;
      return router.options.routes.find(({ path }) => path === "/dashboard")
        ?.children;
    });
    const activePath = computed(() => {
      return route.name;
    });

    return {
      routers,
      activePath,
    };
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
