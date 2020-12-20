<template>
  <el-container>
    <el-aside width="200px">
      <el-header style="height: auto">
        <div class="demo-fit">
          <div class="block">
            <el-avatar shape="circle" :size="100" :src="url"></el-avatar>
          </div>
        </div>
        <el-button> 更换头像 </el-button>
      </el-header>
      <el-main>
        <div v-for="(item, index) in infos" :key="index" class="textDec text">
          <span>{{ item.name + ":" }}</span> <span>{{ item.content }}</span>
        </div>
      </el-main>
    </el-aside>
    <el-container>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="课程" name="first"
            ><el-row :gutter="20">
              <el-col
                :span="12"
                v-for="(item, index) in ClassInfos"
                :key="index"
                style="margin-bottom: 20px"
              >
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img :src="item.img" class="image" style="height: 60px" />
                  <div style="padding: 14px" class="text">
                    <span>{{ item.name }}</span>
                    <div class="bottom clearfix">
                      <time class="time">{{
                        "课程截止日期" + item.deadline
                      }}</time>
                      <el-button class="button" icon="el-icon-right"
                        >进入课程</el-button
                      >
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row></el-tab-pane
          >
          <el-tab-pane label="考试" name="second">考试</el-tab-pane>
          <el-tab-pane label="讨论" name="third">讨论</el-tab-pane>
          <el-tab-pane label="学习计划" name="fourth"
            ><div class="block">
              <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/12 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/3 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/2 20:46</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-tab-pane>
        </el-tabs></el-main
      >
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "UserInfoView",
  data() {
    return {
      url:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      infos: [
        {
          name: "姓名",
          content: "Vera",
        },
        {
          name: "年龄",
          content: "18",
        },
        {
          name: "职位",
          content: "老大",
        },
      ],
      ClassInfos: [
        {
          name: "时频理论基础",
          content: "入门必备信息",
          deadline: "2020.12.12",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        },
        {
          name: "时频入门课程",
          content: "加油哇少年~",
          deadline: "2020.12.12",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        },
        {
          name: "时频终极奥义",
          content: "成神成魔就看这一步了",
          deadline: "2020.12.12",
          img:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        },
      ],
    };
  },
});
</script>

<style scoped>
.text {
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.textDec {
  height: 44px;
  border-bottom: #909399 solid 1px;
  line-height: 40px;
}
.button {
  float: right;
}
</style>
