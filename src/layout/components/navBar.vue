<template>
  <el-menu
    class="el-menu-vertical-demo"
    text-color="black"
    active-text-color="red"
    router
    :default-active="activePath"
  >
    <!--    todo 报错：Custom elements in iteration require 'v-bind:key' directives -->
    <!--    <template v-for="item in routerList">-->

    <!--      <el-menu-item-->
    <!--        v-if="!item.hidden"-->
    <!--        :index="item.redirect"-->
    <!--      >-->
    <!--        {{ item.name }}-->
    <!--      </el-menu-item>-->
    <!--    </template>-->
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
