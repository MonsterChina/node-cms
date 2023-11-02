import{q as e,r as s,G as a,O as t,f as l,p as o,u as i,v as d}from"./element-plus.js";import{s as m,u,a as r}from"./site2.js";import{f as n,u as c}from"./sys_app.js";import{_ as p}from"./@qiun.js";import{o as f,c as g,l as y,a1 as h,a3 as b,j as V}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./vue-demi.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const _={class:"mr-10 ml-10"};const j={class:"mr-10 ml-10"};const w={class:"mr-10 ml-10"};const x={class:"pd-20 content-wrap"};const k=p({name:"sys-index",components:{ConfigSet:p({name:"ConfigSet",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await n();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await c(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(d,m,u,r,n,c){const p=e,V=s,j=a,w=t,x=l,k=o,q=i;return f(),g("div",_,[y(q,{label:"应用配置",class:"mt-20",name:"config"},{default:h((()=>[y(k,{ref:"set",model:d.set,"label-width":"80px"},{default:h((()=>[y(V,{prop:"template",label:"模板"},{default:h((()=>[y(p,{modelValue:d.set.template,"onUpdate:modelValue":m[0]||(m[0]=e=>d.set.template=e),placeholder:"默认模板default不用填写"},null,8,["modelValue"])])),_:1}),y(V,{label:"上传方式"},{default:h((()=>[y(w,{modelValue:d.set.uploadWay,"onUpdate:modelValue":m[1]||(m[1]=e=>d.set.uploadWay=e),class:"ml-4"},{default:h((()=>[y(j,{label:"1",size:"large"},{default:h((()=>[b("普通")])),_:1}),y(j,{label:"2",size:"large"},{default:h((()=>[b("七牛云")])),_:1})])),_:1},8,["modelValue"])])),_:1}),y(V,null,{default:h((()=>[y(x,{type:"primary",onClick:m[2]||(m[2]=e=>c.submit("set"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]]),QiNiu:p({name:"QiNiu",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await n();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await c(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(a,t,d,m,u,r){const n=e,c=s,p=l,V=o,_=i;return f(),g("div",j,[y(_,{label:"七牛云配置",class:"mt-20",name:"qiniu"},{default:h((()=>[y(V,{ref:"set",model:a.set,"label-width":"80px"},{default:h((()=>[y(c,{prop:"accessKey",label:"accessKey"},{default:h((()=>[y(n,{modelValue:a.set.accessKey,"onUpdate:modelValue":t[0]||(t[0]=e=>a.set.accessKey=e)},null,8,["modelValue"])])),_:1}),y(c,{prop:"secretKey",label:"secretKey"},{default:h((()=>[y(n,{modelValue:a.set.secretKey,"onUpdate:modelValue":t[1]||(t[1]=e=>a.set.secretKey=e)},null,8,["modelValue"])])),_:1}),y(c,{prop:"domain",label:"domain"},{default:h((()=>[y(n,{modelValue:a.set.domain,"onUpdate:modelValue":t[2]||(t[2]=e=>a.set.domain=e)},null,8,["modelValue"])])),_:1}),y(c,{prop:"bucket",label:"bucket"},{default:h((()=>[y(n,{modelValue:a.set.bucket,"onUpdate:modelValue":t[3]||(t[3]=e=>a.set.bucket=e)},null,8,["modelValue"])])),_:1}),y(c,null,{default:h((()=>[y(p,{type:"primary",onClick:t[4]||(t[4]=e=>r.submit("set"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]]),WeChat:p({name:"WeChat",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await n();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await c(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(a,t,d,m,u,r){const n=e,c=s,p=l,V=o,_=i;return f(),g("div",w,[y(_,{label:"微信配置",class:"mt-20",name:"wechat"},{default:h((()=>[y(V,{ref:"set",model:a.set,"label-width":"80px"},{default:h((()=>[y(c,{label:"appid",prop:"appid",rules:[{required:!0,message:"请输入appid",trigger:"blur"}]},{default:h((()=>[y(n,{modelValue:a.set.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>a.set.appid=e)},null,8,["modelValue"])])),_:1}),y(c,{prop:"secret",label:"secret"},{default:h((()=>[y(n,{modelValue:a.set.secret,"onUpdate:modelValue":t[1]||(t[1]=e=>a.set.secret=e)},null,8,["modelValue"])])),_:1}),y(c,null,{default:h((()=>[y(p,{type:"primary",onClick:t[2]||(t[2]=e=>r.submit("set"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]])},data:()=>({loading:!0,activeName:"first",activeIndex:"0",info:{id:"",name:"",domain:"",email:"",icp:"",json:"",code:""},seo:{id:"",title:"",keywords:"",description:""},infoRules:{name:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},seoRules:{title:[{required:!0,message:"不能为空",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}]}}),computed:{},created(){this.query()},methods:{handleClick(e){this.activeIndex=e.index},async query(){try{let e=await m();if(200===e.code){this.loading=!1;let{id:s,name:a,domain:t,email:l,icp:o,police:i,copyright:d,json:m,code:u,title:r,keywords:n,description:c}=e.data;this.info={id:s,name:a,domain:t,email:l,icp:o,police:i,copyright:d,code:u,json:m},this.seo={id:s,title:r,keywords:n,description:c}}else this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async updateInfo(){try{let e=await u(this.info);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async updateSeo(){try{let e=await r(this.seo);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submitInfo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateInfo()}))},submitSeo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateSeo()}))}}},[["render",function(a,t,m,u,r,n){const c=e,p=s,_=l,j=o,w=i,k=V("ConfigSet"),q=V("QiNiu"),v=V("WeChat"),$=d;return f(),g("div",x,[y($,{modelValue:a.activeName,"onUpdate:modelValue":t[11]||(t[11]=e=>a.activeName=e),onTabClick:n.handleClick},{default:h((()=>[y(w,{label:"基本设置",class:"mt-20",name:"first"},{default:h((()=>[y(j,{ref:"info",model:a.info,"label-width":"84px"},{default:h((()=>[y(p,{label:"网站名称",prop:"name",rules:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:h((()=>[y(c,{modelValue:a.info.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.info.name=e)},null,8,["modelValue"])])),_:1}),y(p,{prop:"domain",label:"网站域名"},{default:h((()=>[y(c,{modelValue:a.info.domain,"onUpdate:modelValue":t[1]||(t[1]=e=>a.info.domain=e)},null,8,["modelValue"])])),_:1}),y(p,{prop:"email",label:"站长邮箱"},{default:h((()=>[y(c,{modelValue:a.info.email,"onUpdate:modelValue":t[2]||(t[2]=e=>a.info.email=e),rules:[{type:"email",message:"请输入正确的邮箱",trigger:["blur","change"]}]},null,8,["modelValue"])])),_:1}),y(p,{prop:"icp",label:"ICP备案号"},{default:h((()=>[y(c,{modelValue:a.info.icp,"onUpdate:modelValue":t[3]||(t[3]=e=>a.info.icp=e)},null,8,["modelValue"])])),_:1}),y(p,{prop:"code",label:"统计代码"},{default:h((()=>[y(c,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:a.info.code,"onUpdate:modelValue":t[4]||(t[4]=e=>a.info.code=e)},null,8,["modelValue"])])),_:1}),y(p,{prop:"json",label:"万能配置"},{default:h((()=>[y(c,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:a.info.json,"onUpdate:modelValue":t[5]||(t[5]=e=>a.info.json=e)},null,8,["modelValue"])])),_:1}),y(p,null,{default:h((()=>[y(_,{type:"primary",onClick:t[6]||(t[6]=e=>n.submitInfo("info"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),y(w,{label:"SEO设置",class:"mt-20",name:"second"},{default:h((()=>[y(j,{ref:"seo",model:a.seo,"label-width":"84px"},{default:h((()=>[y(p,{label:"标题",prop:"title",rules:[{required:!0,message:"请输入网站标题",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:h((()=>[y(c,{modelValue:a.seo.title,"onUpdate:modelValue":t[7]||(t[7]=e=>a.seo.title=e)},null,8,["modelValue"])])),_:1}),y(p,{label:"关键词",prop:"keywords"},{default:h((()=>[y(c,{modelValue:a.seo.keywords,"onUpdate:modelValue":t[8]||(t[8]=e=>a.seo.keywords=e)},null,8,["modelValue"])])),_:1}),y(p,{label:"描述",prop:"description",rules:[{min:2,max:255,message:"字数限制255",trigger:"blur"}]},{default:h((()=>[y(c,{type:"textarea",rows:3,class:"textarea",modelValue:a.seo.description,"onUpdate:modelValue":t[9]||(t[9]=e=>a.seo.description=e)},null,8,["modelValue"])])),_:1}),y(p,null,{default:h((()=>[y(_,{type:"primary",onClick:t[10]||(t[10]=e=>n.submitSeo("seo"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),y(k),y(q),y(v)])),_:1},8,["modelValue","onTabClick"])])}]]);export{k as default};
