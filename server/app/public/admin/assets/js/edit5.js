import{a as h,u as w}from"./ad.js";import{B as A}from"./@element-plus.js";import{_ as v}from"./index.js";import{ag as r,o as n,c as C,Z as l,V as t,a as $,Y as m,U as f}from"./@vue.js";import"./api.js";import"./axios.js";import"./form-data.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const B={name:"ad-edit",data:()=>({params:{id:0,title:"",mark:"",imgUrl:"",link:"",platform:"",position:[1,2],createdAt:new Date,updatedAt:new Date,status:"1"},disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}],mark:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),components:{Plus:A},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let e=await h(this.params.id);if(e.code===200){let a=e.data;a.position=a.position.split(","),a.platform=a.status.toString(),a.status=a.status.toString(),a.updatedAt=new Date(a.createdAt),this.params=a}}catch(e){console.error(e)}},handleAttr(e){console.log("e-->",e)},beforeUpload(e){if(e.size/1024/1024>2)return this.$message("上传文件必须小于1M"),!1},upload(e){e.code===200&&(this.params.imgUrl=e.data.path,console.log("this.params.imgUrl",this.params.imgUrl))},async update(){try{let e={...this.params};e.position=e.position.toString(),(await w(e)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate(a=>{if(a)this.update();else return console.log("error submit!!"),!1})}}},P={class:"mr-10 ml-10 mb-20"};function D(e,a,N,S,q,p){const i=r("el-input"),s=r("el-form-item"),u=r("el-radio"),d=r("el-checkbox"),b=r("el-checkbox-group"),g=r("el-image"),V=r("Plus"),_=r("el-icon"),c=r("el-upload"),U=r("el-date-picker"),k=r("el-button"),y=r("el-form");return n(),C("div",P,[l(y,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:""},{default:t(()=>[$("div",null,[l(s,{label:"广告名称",prop:"title"},{default:t(()=>[l(i,{modelValue:e.params.title,"onUpdate:modelValue":a[0]||(a[0]=o=>e.params.title=o),placeholder:"请输入汉字"},null,8,["modelValue"])]),_:1}),l(s,{label:"广告链接"},{default:t(()=>[l(i,{modelValue:e.params.link,"onUpdate:modelValue":a[1]||(a[1]=o=>e.params.link=o)},null,8,["modelValue"])]),_:1}),l(s,{label:"广告标识",prop:"mark"},{default:t(()=>[l(i,{modelValue:e.params.mark,"onUpdate:modelValue":a[2]||(a[2]=o=>e.params.mark=o),disabled:""},null,8,["modelValue"])]),_:1}),l(s,{label:"广告平台"},{default:t(()=>[l(u,{modelValue:e.params.platform,"onUpdate:modelValue":a[3]||(a[3]=o=>e.params.platform=o),label:"1"},{default:t(()=>[m("PC")]),_:1},8,["modelValue"]),l(u,{modelValue:e.params.platform,"onUpdate:modelValue":a[4]||(a[4]=o=>e.params.platform=o),label:"2"},{default:t(()=>[m("H5")]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"广告位置"},{default:t(()=>[l(b,{modelValue:e.params.position,"onUpdate:modelValue":a[5]||(a[5]=o=>e.params.position=o),onChange:p.handleAttr},{default:t(()=>[l(d,{label:"1"},{default:t(()=>[m("首页")]),_:1}),l(d,{label:"2"},{default:t(()=>[m("频道页")]),_:1}),l(d,{label:"3"},{default:t(()=>[m("列表页")]),_:1}),l(d,{label:"4"},{default:t(()=>[m("文章页")]),_:1}),l(d,{label:"5"},{default:t(()=>[m("单页")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),l(s,{label:"图片链接"},{default:t(()=>[l(i,{modelValue:e.params.imgUrl,"onUpdate:modelValue":a[6]||(a[6]=o=>e.params.imgUrl=o)},null,8,["modelValue"])]),_:1}),l(s,{label:"广告图片"},{default:t(()=>[l(c,{class:"avatar-uploader",action:"/api/upload","on-success":p.upload,"show-file-list":!1,"before-upload":p.beforeUpload},{default:t(()=>[e.params.imgUrl?(n(),f(g,{key:0,style:{width:"100%"},src:e.params.imgUrl},null,8,["src"])):(n(),f(_,{key:1,class:"avatar-uploader-icon"},{default:t(()=>[l(V)]),_:1}))]),_:1},8,["on-success","before-upload"])]),_:1}),l(s,{label:"发布时间"},{default:t(()=>[l(U,{modelValue:e.params.createdAt,"onUpdate:modelValue":a[7]||(a[7]=o=>e.params.createdAt=o),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])]),_:1}),l(s,{label:"是否显示"},{default:t(()=>[l(u,{modelValue:e.params.status,"onUpdate:modelValue":a[8]||(a[8]=o=>e.params.status=o),label:"1"},{default:t(()=>[m("发布")]),_:1},8,["modelValue"]),l(u,{modelValue:e.params.status,"onUpdate:modelValue":a[9]||(a[9]=o=>e.params.status=o),label:"2"},{default:t(()=>[m("不发布")]),_:1},8,["modelValue"])]),_:1})]),l(s,null,{default:t(()=>[l(k,{type:"primary",onClick:a[10]||(a[10]=o=>p.submit("params"))},{default:t(()=>[m("保存")]),_:1})]),_:1})]),_:1},8,["model","rules"])])}const ae=v(B,[["render",D]]);export{ae as default};
