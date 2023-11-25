import{q as e,r as a,M as l,N as s,f as m,p as t}from"./element-plus.js";import{c as r}from"./field.js";import{_ as o}from"./@qiun.js";import{o as d,c as i,l as u,a1 as p,F as n,ad as f,k as _,a3 as c}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./vue-demi.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const b={class:"mr-10 ml-10 mb-20 bg-fff pd-20"};const j=o({name:"field-add",components:{},data:()=>({params:{model_id:"",field_cname:"",field_ename:"",field_type:"",field_values:"",field_default:"",field_sort:"0"},type:[{value:"1",label:"单行文本"},{value:"2",label:"多行文本 "},{value:"3",label:"下拉菜单"},{value:"4",label:"单选"},{value:"5",label:"多选 "},{value:"6",label:"时间和日期 "},{value:"7",label:"数字 "}],value:"",paramsRules:{field_cname:[{required:!0,message:"字段名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){const{model_name:e,mid:a,table_name:l}=this.$route.query;this.params.model_id=a,this.params.table_name=l,this.model_name=e},methods:{handleAttr(e){console.log("e--\x3e",e)},async create(){try{let e={...this.params},a=await r(e);200==a.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:a.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(r,o,j,g,v,h){const V=e,y=a,x=l,U=s,q=m,$=t;return d(),i("div",b,[u($,{ref:"params",model:r.params,rules:r.paramsRules,"label-width":"100px",class:"mt-20"},{default:p((()=>[u(y,{label:"中文名称",prop:"field_cname"},{default:p((()=>[u(V,{modelValue:r.params.field_cname,"onUpdate:modelValue":o[0]||(o[0]=e=>r.params.field_cname=e)},null,8,["modelValue"])])),_:1}),u(y,{label:"英文名称",prop:"field_ename"},{default:p((()=>[u(V,{modelValue:r.params.field_ename,"onUpdate:modelValue":o[1]||(o[1]=e=>r.params.field_ename=e)},null,8,["modelValue"])])),_:1}),u(y,{label:"字段类型"},{default:p((()=>[u(U,{modelValue:r.params.field_type,"onUpdate:modelValue":o[2]||(o[2]=e=>r.params.field_type=e),placeholder:"请选择"},{default:p((()=>[(d(!0),i(n,null,f(r.type,(e=>(d(),_(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),u(y,{label:"字段选项"},{default:p((()=>[u(V,{modelValue:r.params.field_values,"onUpdate:modelValue":o[3]||(o[3]=e=>r.params.field_values=e)},null,8,["modelValue"])])),_:1}),u(y,{label:"默认值"},{default:p((()=>[u(V,{modelValue:r.params.field_default,"onUpdate:modelValue":o[4]||(o[4]=e=>r.params.field_default=e)},null,8,["modelValue"])])),_:1}),u(y,{label:"排序"},{default:p((()=>[u(V,{modelValue:r.params.field_sort,"onUpdate:modelValue":o[5]||(o[5]=e=>r.params.field_sort=e)},null,8,["modelValue"])])),_:1}),u(y,null,{default:p((()=>[u(q,{type:"primary",onClick:o[6]||(o[6]=e=>h.submit("params"))},{default:p((()=>[c("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{j as default};
