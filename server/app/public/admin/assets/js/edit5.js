import{q as e,r as a,G as s,O as t,f as m,p as l,H as o}from"./element-plus.js";import{d as r,u as i}from"./frag.js";import{_ as p}from"./@jsdawn.js";import{t as n}from"./tinymce.js";import{_ as d}from"./@qiun.js";import{j as u,o as c,c as j,m as g,k as y,a1 as f,a as h,l as b,a3 as V,h as _}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./vue-demi.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const v={class:"mr-10 ml-10 mb-20 pd-10 bg-fff"};const x=d({name:"frag-edit",components:{Vue3Tinymce:p},data:()=>({setting:n,loading:!0,params:{id:0,type:"1",name:0,mark:"",content:"禅悦"},dialogVisible:!1,disabled:!1,paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},unmounted(){},methods:{tinymce(){this.loading=!1},setContent(e){this.params.content=e},async detail(){try{let e=await r(this.params.id);200===e.code&&(this.params=e.data,"2"==this.params.type&&(this.loading=!1))}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async update(){try{let e=await i(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(r,i,p,n,d,x){const k=e,w=a,U=s,$=t,q=u("vue3-tinymce"),C=m,I=l,z=o;return c(),j("div",v,[g((c(),y(I,{ref:"params",model:r.params,rules:r.paramsRules,"label-width":"84px",class:"mt-20"},{default:f((()=>[h("div",null,[b(w,{label:"碎片名称",prop:"name"},{default:f((()=>[b(k,{modelValue:r.params.name,"onUpdate:modelValue":i[0]||(i[0]=e=>r.params.name=e)},null,8,["modelValue"])])),_:1}),b(w,{label:"碎片标识",prop:"mark"},{default:f((()=>[b(k,{modelValue:r.params.mark,"onUpdate:modelValue":i[1]||(i[1]=e=>r.params.mark=e)},null,8,["modelValue"])])),_:1}),b(w,{label:"碎片类型",prop:"type"},{default:f((()=>[b($,{modelValue:r.params.type,"onUpdate:modelValue":i[2]||(i[2]=e=>r.params.type=e),class:"ml-4"},{default:f((()=>[b(U,{label:"1"},{default:f((()=>[V("富文本")])),_:1}),b(U,{label:"2"},{default:f((()=>[V("文本框")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"1"==r.params.type?(c(),y(w,{key:0,label:"碎片内容"},{default:f((()=>[b(q,{modelValue:r.params.content,"onUpdate:modelValue":i[3]||(i[3]=e=>r.params.content=e),setting:r.setting,onInit:x.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1})):_("",!0),"2"==r.params.type?(c(),y(w,{key:1,label:"碎片内容"},{default:f((()=>[b(k,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:r.params.content,"onUpdate:modelValue":i[4]||(i[4]=e=>r.params.content=e)},null,8,["modelValue"])])),_:1})):_("",!0)]),b(w,null,{default:f((()=>[b(C,{type:"primary",onClick:i[5]||(i[5]=e=>x.submit("params"))},{default:f((()=>[V("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[z,r.loading]])])}],["__scopeId","data-v-35155a4d"]]);export{x as default};
