import{q as e,r as a,B as s,f as t,p as l}from"./element-plus.js";import{c as r}from"./friendlink.js";import{_ as m}from"./@qiun.js";import{o,c as i,l as p,a1 as d,a3 as u}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const n={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};const c=m({name:"friendlink-add",data:()=>({params:{title:"",link:"",sort:0,createdAt:new Date},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:20,message:"名称长度在 2 到 20 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{let e=await r(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return!1;this.create()}))}}},[["render",function(r,m,c,j,f,g){const h=e,V=a,b=s,y=t,_=l;return o(),i("div",n,[p(_,{ref:"params",model:r.params,rules:r.paramsRules,"label-width":"84px",class:"mt-20"},{default:d((()=>[p(V,{label:"标题",prop:"title"},{default:d((()=>[p(h,{modelValue:r.params.title,"onUpdate:modelValue":m[0]||(m[0]=e=>r.params.title=e)},null,8,["modelValue"])])),_:1}),p(V,{label:"链接"},{default:d((()=>[p(h,{modelValue:r.params.link,"onUpdate:modelValue":m[1]||(m[1]=e=>r.params.link=e)},null,8,["modelValue"])])),_:1}),p(V,{label:"排序"},{default:d((()=>[p(h,{modelValue:r.params.sort,"onUpdate:modelValue":m[2]||(m[2]=e=>r.params.sort=e)},null,8,["modelValue"])])),_:1}),p(V,{label:"发布时间"},{default:d((()=>[p(b,{modelValue:r.params.createdAt,"onUpdate:modelValue":m[3]||(m[3]=e=>r.params.createdAt=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),p(V,null,{default:d((()=>[p(y,{type:"primary",onClick:m[4]||(m[4]=e=>g.submit("params"))},{default:d((()=>[u("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{c as default};
