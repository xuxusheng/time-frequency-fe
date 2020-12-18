<template>
  <el-container class="container" direction="vertical">
    <el-header class="header">
      <TitleBar />
      <el-button @click="logout">登出</el-button>
    </el-header>
    <el-container>
      <el-aside class="aside" width="auto">
        <NavBar :isCollapse="isCollapse"></NavBar>
        <el-button :icon="collapseIcon" @click="isCollapse = !isCollapse" />
      </el-aside>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { setToken } from "@/utils";
import TitleBar from "@/layout/components/TitleBar.vue";
import NavBar from "@/layout/components/NavBar.vue";

export default {
  name: "BasicLayout",
  components: {
    TitleBar,
    NavBar,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    collapseIcon() {
      return this.isCollapse ? "el-icon-d-arrow-right" : "el-icon-d-arrow-left";
    },
  },
  methods: {
    logout() {
      setToken("");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;

  .aside {
    outline: firebrick dashed 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header {
    outline: firebrick dashed 2px;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main {
    outline: firebrick dashed 2px;
  }
}
</style>
