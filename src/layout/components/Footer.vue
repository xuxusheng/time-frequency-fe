<template>
  <p>
    Powered By
    <a href="https://github.com/xuxusheng" rel="noopener" target="_blank"
      >@XuSheng</a
    >
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped lang="scss">
p {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #909399;
  text-align: center;

  a,
  a:visited,
  a:focus {
    color: #409eff;
  }
}
</style>
