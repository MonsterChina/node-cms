System.register(["./element-plus-legacy.js","./friendlink-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./vue-demi-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,t,u,n,r,c,m,o,i,d;return{setters:[e=>{a=e.q,s=e.r,t=e.f,u=e.p},e=>{n=e.c},e=>{r=e._},e=>{c=e.o,m=e.c,o=e.l,i=e.a1,d=e.a3},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};e("default",r({name:"friendlink-add",data:()=>({params:{title:"",link:"",sort:0},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:20,message:"名称长度在 2 到 20 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{let e=await n(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return!1;this.create()}))}}},[["render",function(e,n,r,g,p,y){const j=a,f=s,h=t,b=u;return c(),m("div",l,[o(b,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:"mt-20"},{default:i((()=>[o(f,{label:"标题",prop:"title"},{default:i((()=>[o(j,{modelValue:e.params.title,"onUpdate:modelValue":n[0]||(n[0]=l=>e.params.title=l)},null,8,["modelValue"])])),_:1}),o(f,{label:"链接"},{default:i((()=>[o(j,{modelValue:e.params.link,"onUpdate:modelValue":n[1]||(n[1]=l=>e.params.link=l)},null,8,["modelValue"])])),_:1}),o(f,{label:"排序"},{default:i((()=>[o(j,{modelValue:e.params.sort,"onUpdate:modelValue":n[2]||(n[2]=l=>e.params.sort=l)},null,8,["modelValue"])])),_:1}),o(f,null,{default:i((()=>[o(h,{type:"primary",onClick:n[3]||(n[3]=e=>y.submit("params"))},{default:i((()=>[d("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
