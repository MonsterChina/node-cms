<template>
  <div class="pd-10">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
        <div class="bg-fff pd-20 radius-6">
          <h3>技术架构</h3>
          <p class="f-14 mb-6">
            <strong>技术架构：</strong>nodejs v18.16.0 express4+ mysql-5.6/5.7
          </p>
          <p class="f-14 mb-6">
            <strong>前端架构：</strong>vite4.0 vue3 element-plus pinia axios
          </p>
          <p class="f-14 mb-6"><strong>程序版本：</strong>v.1.6.0</p>
          <p class="f-14 mb-6"><strong>程序路径：</strong>{{ dirname }}</p>
          <p class="f-14 mb-6"><strong>发布时间：</strong>2023-10-28</p>
          <p class="f-14 mb-6"><strong>独立开发：</strong>明空</p>
          <p class="f-14 mb-6 row"><strong>联系微信：</strong>yanyutao2014</p>
          <p class="f-14 mb-6 row">
            <strong>联系邮箱：</strong>867528315@qq.com
          </p>
          <!-- <p class="f-14 mb-6">
            <strong>禅悦内容管理系统：</strong>
            <a class="c-9ca4bf" href="http://www.chanyue.top" target="_blank">
              &copy; www.chanyue.top
            </a>
          </p> -->
        </div>
      </el-col>

      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="bg-fff pd-20 radius-6">
          <h3 class="mb-12 f-20">技术架构</h3>
          <p class="f-14 mb-6 c-666">
            <span class="c-333">服务架构：</span>nodejs v18.16.0 express4+
            mysql-5.6/5.7
          </p>
          <p class="f-14 mb-6">
            <span>前端架构：</span>vite4.0 vue3 element-plus pinia axios
          </p>
          <p class="f-14 mb-6"><span>程序版本：</span>v.1.6.0</p>
          <p class="f-14 mb-6"><span>程序路径：</span>{{ dirname }}</p>
          <p class="f-14 mb-6"><span>发布时间：</span>2023-10-28</p>
          <p class="f-14 mb-6"><span>技术开发：</span>明空</p>
          <p class="f-14 mb-6 row"><span>联系微信：</span>yanyutao2014</p>
          <p class="f-14 mb-6 row"><span>联系邮箱：</span>867528315@qq.com</p>
          <!-- <p class="f-14 mb-6">
            <strong>禅悦内容管理系统：</strong>
            <a class="c-9ca4bf" href="http://www.chanyue.top" target="_blank">
              &copy; www.chanyue.top
            </a>
          </p> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { tongji } from "@/api/article.js";
import { runEnv } from "@/api/site.js";
export default {
  name: "home-info",
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
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.tongji();
    this.runEnv();
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
</style>
