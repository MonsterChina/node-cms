import{q as e,r as a,u as s,f as t,p as m,K as o}from"./element-plus.js";import{c as r}from"./frag.js";import{_ as l}from"./@jsdawn.js";import{t as n}from"./tinymce.js";import{p as i}from"./pinyin-pro.js";import{_ as p}from"./@qiun.js";import{j as d,o as u,c,m as j,k as g,a1 as f,a as h,l as y,a3 as b}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const V={class:"mr-10 ml-10 mb-20 pd-10 bg-fff"};const _=p({name:"frag-add",components:{Vue3Tinymce:l},data:()=>({setting:n,loading:!0,params:{name:"",mark:"",createdAt:new Date,content:"禅悦"},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},created(){},unmounted(){},watch:{"params.name":function(e,a){this.params.mark=i(e,{toneType:"none"}).replace(/\s+/g,"")}},methods:{tinymce(){this.loading=!1},setContent(e){this.params.content=e},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{let e=await r(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(r,l,n,i,p,_){const v=e,k=a,x=d("vue3-tinymce"),w=s,A=t,U=m,$=o;return u(),c("div",V,[j((u(),g(U,{ref:"params",model:r.params,rules:r.paramsRules,"label-width":"84px",class:"mt-20"},{default:f((()=>[h("div",null,[y(k,{label:"碎片名称",prop:"name"},{default:f((()=>[y(v,{modelValue:r.params.name,"onUpdate:modelValue":l[0]||(l[0]=e=>r.params.name=e),placeholder:"请输入汉字"},null,8,["modelValue"])])),_:1}),y(k,{label:"碎片标识",prop:"mark"},{default:f((()=>[y(v,{modelValue:r.params.mark,"onUpdate:modelValue":l[1]||(l[1]=e=>r.params.mark=e),placeholder:"模板使用标识"},null,8,["modelValue"])])),_:1}),y(k,{label:"文章内容"},{default:f((()=>[y(x,{modelValue:r.params.content,"onUpdate:modelValue":l[2]||(l[2]=e=>r.params.content=e),setting:r.setting,onInit:_.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),y(k,{label:"发布时间"},{default:f((()=>[y(w,{modelValue:r.params.createdAt,"onUpdate:modelValue":l[3]||(l[3]=e=>r.params.createdAt=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1})]),y(k,null,{default:f((()=>[y(A,{type:"primary",onClick:l[4]||(l[4]=e=>_.submit("params"))},{default:f((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[$,r.loading]])])}],["__scopeId","data-v-65439a91"]]);export{_ as default};