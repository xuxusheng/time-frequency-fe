<template>
  <div class="home">
    <el-row class="showData">
      <el-card>
        <div id="leftData" :style="{ width: '400px', height: '400px' }"></div>
      </el-card>
      <el-card>
        <div id="rightData" :style="{ width: '400px', height: '400px' }"></div>
      </el-card>
    </el-row>
    <el-row class="showMsg">
      <el-card id="leftMsg">
        <el-collapse :style="{ width: '400px', height: '300px' }">
          <el-collapse-item title="通知1" name="1">
            <div>第一条通知详情</div>
          </el-collapse-item>
          <el-collapse-item title="通知2" name="2">
            <div>第二条通知详情</div>
          </el-collapse-item>
          <el-collapse-item title="通知3" name="3">
            <div>第三条通知详情</div>
          </el-collapse-item>
          <el-collapse-item title="通知4" name="4">
            <div>第四条通知详情</div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <el-card id="rightMsg">
        <el-table :data="table" :style="{ width: '400px', height: '300px' }">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="info" label="信息"> </el-table-column>
        </el-table>
      </el-card>
    </el-row>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  reactive,
  toRefs,
} from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    // mounted
    onMounted(() => {
      const echarts = getCurrentInstance()?.appContext.config.globalProperties
        .$echarts;

      //左上
      const leftChart = echarts.init(document.getElementById("leftData"));
      leftChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [30, 110],
            center: ["50%", "50%"],
            roseType: "area",
            data: [
              { value: 10, name: "rose1" },
              { value: 5, name: "rose2" },
              { value: 15, name: "rose3" },
              { value: 25, name: "rose4" },
              { value: 20, name: "rose5" },
              { value: 35, name: "rose6" },
              { value: 30, name: "rose7" },
              { value: 40, name: "rose8" },
            ],
          },
        ],
      });
      //右上
      const rightChart = echarts.init(document.getElementById("rightData"));
      rightChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
          },
        ],
      });
    });
    const tableData = reactive({
      table: [
        {
          date: "2016-05-02",
          info: "info1",
        },
        {
          date: "2016-05-04",
          info: "info2",
        },
        {
          date: "2016-05-01",
          info: "info3",
        },
        {
          date: "2016-05-03",
          info: "info4",
        },
      ],
    });
    const refTableData = toRefs(tableData);

    return {
      ...refTableData,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/config";
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .showData {
    display: flex;
    justify-content: space-between;
  }
  .showMsg {
    display: flex;
    justify-content: space-between;
  }
}
</style>
