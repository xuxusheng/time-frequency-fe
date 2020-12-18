<template>
  <el-container class="wrapper">
    <el-aside width="200px" class="nav">
      <navBar></navBar>
    </el-aside>
    <el-container>
      <el-header class="title">
        <titleBar></titleBar>
      </el-header>
      <el-main class="main">
        <mainApp></mainApp>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import titleBar from "./components/titleBar";
import navBar from "./components/navBar";
import mainApp from "./components/mainApp";

export default {
  name: "index",
  components: {
    titleBar,
    navBar,
    mainApp,
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  .nav {
    border: #2c3e50 solid 1px;
  }
  .title {
    border: #2c3e50 solid 1px;
  }
  .main {
    border: #2c3e50 solid 1px;
  }
}
</style>
