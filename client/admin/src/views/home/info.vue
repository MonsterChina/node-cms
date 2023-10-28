<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
      <div class="bg-fff pd-20 radius-6 row justify-around mb-20">
        <div class="row flex-col align-c">
          <div class="tj-img">
            <img src="@/assets/img/ico-article.svg" />
          </div>
          <p class="f-12 text-c mt-5">文章内容</p>
          <p class="f-20 text-c">3735 <sub class="pos-r f-12">篇</sub></p>
        </div>
        <div class="row flex-col align-c">
          <div class="tj-img">
            <img src="@/assets/img/ico-will.svg" />
          </div>
          <p class="f-12 text-c mt-5">文章标签</p>
          <p class="f-20 text-c">3735 <sub class="pos-r f-12">篇</sub></p>
        </div>

        <div>
          <div class="tj-img">
            <img src="@/assets/img/ico-message.svg" />
          </div>
          <p class="f-12 text-c mt-5">留言信息</p>
          <p class="f-20 text-c">
            {{ data.message }} <sub class="pos-r f-12">条</sub>
          </p>
        </div>
        <div>
          <div class="tj-img">
            <img src="@/assets/img/ico-up.svg" />
          </div>
          <p class="f-12 text-c mt-5">七日更新</p>
          <p class="f-20 text-c">
            {{ data.week }} <sub class="pos-r f-12">条</sub>
          </p>
        </div>
      </div>

      <div class="row">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div
              class="bg-fff pd-20 radius-6 mb-20 row"
              style="min-width: 17rem; max-width: 480px; height: 330px"
            >
              <qiun-vue-ucharts
                type="ring"
                :opts="opts"
                :chartData="chartData"
              />
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="bg-fff pd-20 radius-6 mb-20">
              <div class="mb-12 f-16 c-1d2129 bold">系统特色</div>
              <p class="f-13 mb-6 c-4e5969">
                禅悦cms基于express+mysql的一款轻量级高质量实用型cms管理系统。它具备多种类型网站开发功能，高扩展，模块化，插件化灵活方便开发者进行二次开发。
              </p>
              <p class="f-13 mb-6 c-4e5969">轻量、灵活、稳定、高性能。</p>
              <p class="f-13 mb-6 c-4e5969">
                SEO。专注于seo,伪静态html和拼音导航，灵活设置关键词和描述。
              </p>
              <p class="f-13 mb-6 c-4e5969">
                安全。基于knex,高防sql注入，接口权限校验，为安全提供保障。
              </p>
              <p class="f-13 mb-6 c-4e5969">
                灵活。碎片功能，支持零碎文案配置，方便各类灵活文案配置。
              </p>
              <p class="f-13 mb-6 c-4e5969">
                高扩展。支持扩展模型，字段配置，可动态生成表，超强扩展。
              </p>
              <p class="f-13 mb-6 c-4e5969">
                模块化。一切模块相互独立，互不干扰。
              </p>
              <p class="f-13 mb-6 c-4e5969">
                插件化。灵活开发，支持完整功能模块。
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>

    <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
      <div class="bg-fff pd-20 radius-6 mb-20">
        <div class="mb-12 f-16 c-1d2129 bold">技术架构</div>
        <p class="f-13 mb-6 c-4e5969">
          <span class="c-333">服务架构：</span>nodejs express mysql
        </p>
        <p class="f-13 mb-6"><span>前端架构：</span>vite vue3 element-plus</p>
        <p class="f-13 mb-6"><span>程序路径：</span>{{ dirname }}</p>
        <p class="f-13 mb-6"><span>程序版本：</span>v.1.6.0</p>
        <p class="f-13 mb-6"><span>发布时间：</span>2023-10-28</p>
        <p class="f-13 mb-6"><span>技术开发：</span>明空</p>
        <p class="f-13 mb-6 row"><span>联系微信：</span>yanyutao2014</p>
        <p class="f-13 mb-6 row"><span>联系邮箱：</span>867528315@qq.com</p>
      </div>

      <div class="bg-fff pd-20 radius-6 mb-20">
        <div class="mb-12 f-16 c-1d2129 bold">技术服务</div>
        <p class="f-13 mb-6 c-4e5969 row justify-around">
          <span class="c-1d2129 col-12 mb-10">前端开发</span>
          <span class="c-1d2129 col-12 mb-10">企业建站</span>
          <span class="c-1d2129 col-12 mb-10">小程序开发</span>
          <span class="c-1d2129 col-12 mb-10">技术顾问</span>
          <span class="c-1d2129 col-12">互动玩法2d</span>
          <span class="c-1d2129 col-12">技术交流</span>
        </p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { tongji } from "@/api/article.js";
import { runEnv } from "@/api/site.js";
import qiunVueUcharts from "@qiun/vue-ucharts";
export default {
  name: "home-info",
  components: {
    qiunVueUcharts,
  },
  data: () => {
    return {
      data: {
        month: 0,
        quarter: 0,
        today: 0,
        week: 0,
        year: 0,
        yesterday: 0,
        message: 0,
      },
      dirname: "",
      loading: true,
      chartData: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['ring'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        rotate: false,
        rotateLock: false,
        color: [
          "#1890FF",
          "#91CB74",
          "#FAC858",
          "#EE6666",
          "#73C0DE",
          "#3CA272",
          "#FC8452",
          "#9A60B4",
          "#ea7ccc",
        ],
        padding: [5, 5, 5, 5],
        dataLabel: true,
        enableScroll: false,
        legend: {
          show: true,
          position: "right",
          lineHeight: 25,
        },
        title: {
          name: "技术架构",
          fontSize: 15,
          color: "#666666",
        },
        subtitle: {
          name: "70%",
          fontSize: 25,
          color: "#7cb5ec",
        },
        extra: {
          ring: {
            ringWidth: 60,
            activeOpacity: 0.5,
            activeRadius: 10,
            offsetAngle: 0,
            labelWidth: 15,
            border: true,
            borderWidth: 3,
            borderColor: "#FFFFFF",
            linearType: "custom",
          },
        },
      },
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.tongji();
    this.runEnv();
    this.chart();
  },

  methods: {
    async tongji() {
      try {
        let res = await tongji();
        if (res.code === 200) {
          this.data = res.data;
          this.loading = false;
          this.articleNum();
        } else {
          this.$message({
            message: res.msg,
            type: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    async runEnv() {
      try {
        let res = await runEnv();
        const { code, data } = res;
        if (code === 200) {
          this.dirname = data.dirname;
        } else {
          this.$message({
            message: res.msg,
            type: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    chart() {
      let res = {
        series: [
          {
            data: [
              { name: "nodejs", value: 40 },
              { name: "mysql", value: 10 },
              { name: "vue3", value: 40 },
              { name: "javascript", value: 90 },
              { name: "css3", value: 10 },
              { name: "html5", value: 10 },
            ],
          },
        ],
      };
      this.chartData = JSON.parse(JSON.stringify(res));
    },

    articleNum() {
      const data = [
        {
          type: "昨日",
          num: this.data.yesterday,
        },
        {
          type: "今天",
          sales: this.data.today,
        },
        {
          type: "7天",
          sales: this.data.week,
        },
        {
          type: "30天",
          sales: this.data.month,
        },
        {
          type: "一个季度",
          sales: this.data.quarter,
        },
        {
          type: "一年",
          sales: this.data.year,
        },
        {
          type: "留言总数",
          sales: this.data.message,
        },
      ];

      console.log("datav", data);
    },
  },
};
</script>
<style scoped>
.radius-6 {
  border-radius: 6px;
}

.c-9ca4bf {
  color: #9ca4bf;
}

.chanyue-title,
.chanyue-author,
.chanyue-txt {
  font-family: "chanyue";
}

.tj-img {
  width: 54px;
  height: 54px;
  background-color: #f2f3f5;
  border-radius: 50%;
}
</style>
