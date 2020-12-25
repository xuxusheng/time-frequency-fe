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
        title: {
          text: "技能图谱",
        },
        tooltip: {},
        radar: {
          shape: "circle",
          axisName: {
            color: "#fff",
            backgroundColor: "#999",
            borderRadius: 3,
            padding: [3, 5],
          },
          indicator: [
            { name: "时频知识", max: 100 },
            { name: "值班制度", max: 100 },
            { name: "故障处理", max: 100 },
          ],
        },
        series: [
          {
            type: "radar",
            areaStyle: {},
            data: [
              {
                value: [43, 88, 28],
              },
            ],
          },
        ],
      });
      //右上
      const rightChart = echarts.init(document.getElementById("rightData"));
      rightChart.setOption({
        title: {
          text: "成绩趋势",
        },
        xAxis: {
          type: "category",
          data: ["一测", "二测", "三测", "四测", "五测", "六测", "七测"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [82, 93, 90, 93, 29, 33, 50],
            type: "line",
          },
        ],
      });
    });
    const tableData = reactive({
      table: [
        {
          date: "2016-05-02",
          info: "时频知识类新增xxx",
        },
        {
          date: "2016-05-04",
          info: "值班制度类新增xxx",
        },
        {
          date: "2016-05-01",
          info: "故障处理类新增xxx",
        },
        {
          date: "2016-05-03",
          info: "时频知识类新增xxx",
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
    margin-bottom: 20px;
  }
  .showMsg {
    display: flex;
    justify-content: space-between;
  }
}
</style>
