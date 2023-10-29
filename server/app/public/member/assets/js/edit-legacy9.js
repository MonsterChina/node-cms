System.register(["./element-plus-legacy.js","./model-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,s,t,m,u,d,n,o,r,i,c,g,p,y;return{setters:[e=>{l=e.q,s=e.r,t=e.v,m=e.f,u=e.p},e=>{d=e.d,n=e.h,o=e.u},e=>{r=e._},e=>{i=e.o,c=e.c,g=e.l,p=e.a1,y=e.a3},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};e("default",r({name:"model-edit",data:()=>({params:{id:0,old_table_name:"",model_name:"",table_name:"",status:"1"},disable:!1,paramsRules:{model_name:[{required:!0,message:"模型名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},async created(){let e=this.$route.params.id;this.params.id=e,await this.detail(),await this.hasUse(e)},methods:{async detail(){try{let e=await d(this.params.id);if(200===e.code){let a=e.data;this.params={...a,old_table_name:a.table_name}}else this.$message({message:e.msg,type:"success"})}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},handletag(e){console.log("e--\x3e",e)},handleBox(e){console.log("e--\x3e",e)},async hasUse(e){try{let a=await n(e);200==a.code?a.data.count?this.disable=!0:this.disable=!1:this.$message({message:a.msg,type:"success"})}catch(a){console.log(a)}},async update(){try{let e=await o(this.params);200==e.code?this.$message({message:"更新成功^_^",type:"success"}):this.$message({message:e.msg,type:"success"}),this.$router.go(-1)}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,d,n,o,r,b){const h=l,_=s,j=t,f=m,V=u;return i(),c("div",a,[g(V,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"100px",class:"mt-20"},{default:p((()=>[g(_,{label:"模型名称",prop:"model_name"},{default:p((()=>[g(h,{modelValue:e.params.model_name,"onUpdate:modelValue":d[0]||(d[0]=a=>e.params.model_name=a)},null,8,["modelValue"])])),_:1}),g(_,{label:"新增表名",prop:"table_name"},{default:p((()=>[g(h,{modelValue:e.params.table_name,"onUpdate:modelValue":d[1]||(d[1]=a=>e.params.table_name=a),disabled:e.disable},null,8,["modelValue","disabled"])])),_:1}),g(_,{label:"是否启用"},{default:p((()=>[g(j,{modelValue:e.params.status,"onUpdate:modelValue":d[2]||(d[2]=a=>e.params.status=a),label:"1"},{default:p((()=>[y("开启")])),_:1},8,["modelValue"]),g(j,{modelValue:e.params.status,"onUpdate:modelValue":d[3]||(d[3]=a=>e.params.status=a),disabled:e.disable,label:"0"},{default:p((()=>[y("禁用")])),_:1},8,["modelValue","disabled"])])),_:1}),g(_,null,{default:p((()=>[g(f,{type:"primary",onClick:d[4]||(d[4]=e=>b.submit("params"))},{default:p((()=>[y("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));