<template>
  <el-menu
    class="el-menu-vertical-demo"
    text-color="black"
    active-text-color="red"
    router
    :default-active="activePath"
  >
    <template v-for="item in routerList">
      <el-menu-item :key="item.path" v-if="!item.hidden" :index="item.redirect">
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
    }
  }
};
</script>

<style scoped></style>
