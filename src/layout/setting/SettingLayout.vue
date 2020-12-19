<template>
  <el-container class="container" direction="vertical">
    <Header />
    <el-container>
      <el-aside class="aside" width="auto">
        <SettingNavMenu :isCollapse="isCollapse"></SettingNavMenu>
        <el-button :icon="collapseIcon" @click="isCollapse = !isCollapse" />
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SettingNavMenu from "@/layout/setting/SettingNavMenu.vue";
import Header from "@/layout/components/Header.vue";
import Footer from "@/layout/components/Footer.vue";

export default defineComponent({
  name: "SettingLayout",
  components: {
    Footer,
    Header,
    SettingNavMenu,
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
});
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;

  .aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
