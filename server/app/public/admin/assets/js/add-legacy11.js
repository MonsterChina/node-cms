System.register(["./element-plus-legacy.js","./tag-legacy.js","./pinyin-pro-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var s,l,t,n,c,u,r,m,o,p,g,i,d;return{setters:[e=>{s=e.q,l=e.r,t=e.f,n=e.p},e=>{c=e.c,u=e.h},e=>{r=e.p},e=>{m=e._},e=>{o=e.o,p=e.c,g=e.l,i=e.a1,d=e.a3},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};e("default",m({name:"tag-add",components:{},data:()=>({params:{name:"",path:""},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},created(){},unmounted(){},watch:{"params.name":function(e,a){this.params.path=r(e,{toneType:"none"}).replace(/\s+/g,"")}},methods:{async create(){try{let e=await c(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async has(){try{let e=await u(this.params.path);200==e.code?e.data?this.$message({message:"标签已存在，请不要再添加了",type:"success"}):this.create():this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.has()}))}}},[["render",function(e,c,u,r,m,y){const h=s,j=l,f=t,b=n;return o(),p("div",a,[g(b,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:"mt-20"},{default:i((()=>[g(j,{label:"标签名称",prop:"name"},{default:i((()=>[g(h,{modelValue:e.params.name,"onUpdate:modelValue":c[0]||(c[0]=a=>e.params.name=a),placeholder:"请输入汉字"},null,8,["modelValue"])])),_:1}),g(j,{label:"标签标识"},{default:i((()=>[g(h,{modelValue:e.params.path,"onUpdate:modelValue":c[1]||(c[1]=a=>e.params.path=a),placeholder:"模板使用标识"},null,8,["modelValue"])])),_:1}),g(j,null,{default:i((()=>[g(f,{type:"primary",onClick:c[2]||(c[2]=e=>y.submit("params"))},{default:i((()=>[d("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
