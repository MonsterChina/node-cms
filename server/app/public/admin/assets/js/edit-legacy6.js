System.register(["./element-plus-legacy.js","./friendlink-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./vue-demi-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,t,u,r,n,i,o,c,m,d,p;return{setters:[e=>{a=e.q,s=e.r,t=e.f,u=e.p},e=>{r=e.d,n=e.u},e=>{i=e._},e=>{o=e.o,c=e.c,m=e.l,d=e.a1,p=e.a3},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};e("default",i({name:"friendlink-edit",data:()=>({params:{id:0,title:"",link:"",sort:0},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let e=await r(this.params.id);200===e.code&&(this.params=e.data)}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async update(){try{let e=await n(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,r,n,i,g,y){const j=a,h=s,f=t,b=u;return o(),c("div",l,[m(b,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"80px",class:"mt-20"},{default:d((()=>[m(h,{label:"标题",prop:"title"},{default:d((()=>[m(j,{modelValue:e.params.title,"onUpdate:modelValue":r[0]||(r[0]=l=>e.params.title=l)},null,8,["modelValue"])])),_:1}),m(h,{label:"链接"},{default:d((()=>[m(j,{modelValue:e.params.link,"onUpdate:modelValue":r[1]||(r[1]=l=>e.params.link=l)},null,8,["modelValue"])])),_:1}),m(h,{label:"排序"},{default:d((()=>[m(j,{modelValue:e.params.sort,"onUpdate:modelValue":r[2]||(r[2]=l=>e.params.sort=l)},null,8,["modelValue"])])),_:1}),m(h,null,{default:d((()=>[m(f,{type:"primary",onClick:r[3]||(r[3]=e=>y.submit("params"))},{default:d((()=>[p("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
