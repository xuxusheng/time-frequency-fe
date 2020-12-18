<template>
  <el-menu
    class="el-menu-vertical-demo"
    text-color="black"
    active-text-color="red"
    router
    :default-active="activePath"
  >
    <template v-for="(item, index) in routerList">
      <el-menu-item
        v-if="!item.meta?.hidden"
        :key="index"
        :index="item.redirect"
      >
        {{ item.name }}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: "navBar",
  computed: {
    routerList() {
      return this.$router.options.routes;
    },
    activePath() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style scoped></style>
