System.register(["./element-plus-legacy.js","./model-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,t,u,m,n,r,o,c,d,g,p;return{setters:[e=>{a=e.p,s=e.q,t=e.u,u=e.f,m=e.o},e=>{n=e.c},e=>{r=e._},e=>{o=e.o,c=e.c,d=e.l,g=e.a1,p=e.a3},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};e("default",r({name:"model-add",components:{},data:()=>({params:{model_name:"",table_name:"",status:"1"},paramsRules:{model_name:[{required:!0,message:"模型名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},change(e){console.log(e),this.params.table_name=e},async create(){try{let e={...this.params},l=await n(e);200==l.code?this.$message({message:"更新成功^_^",type:"success"}):this.$message({message:l.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(e,n,r,i,y,j){const b=a,_=s,f=t,h=u,V=m;return o(),c("div",l,[d(V,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"100px",class:"mt-20"},{default:g((()=>[d(_,{label:"模型名称",prop:"model_name"},{default:g((()=>[d(b,{modelValue:e.params.model_name,"onUpdate:modelValue":n[0]||(n[0]=l=>e.params.model_name=l),onInput:j.change},null,8,["modelValue","onInput"])])),_:1}),d(_,{label:"新增表名",prop:"table_name"},{default:g((()=>[d(b,{modelValue:e.params.table_name,"onUpdate:modelValue":n[1]||(n[1]=l=>e.params.table_name=l),disabled:""},null,8,["modelValue"])])),_:1}),d(_,{label:"是否启用"},{default:g((()=>[d(f,{modelValue:e.params.status,"onUpdate:modelValue":n[2]||(n[2]=l=>e.params.status=l),label:"1"},{default:g((()=>[p("开启")])),_:1},8,["modelValue"]),d(f,{modelValue:e.params.status,"onUpdate:modelValue":n[3]||(n[3]=l=>e.params.status=l),label:"0"},{default:g((()=>[p("禁用")])),_:1},8,["modelValue"])])),_:1}),d(_,null,{default:g((()=>[d(h,{type:"primary",onClick:n[4]||(n[4]=e=>j.submit("params"))},{default:g((()=>[p("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
