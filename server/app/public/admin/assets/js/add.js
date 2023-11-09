import{u as e,v as a,w as l,r as t,s,q as o,x as d,y as m,A as r,B as u,a as i,C as p,D as n,F as c,f,n as g,t as _,G as h,p as V,H as b}from"./element-plus.js";import{f as y}from"./category.js";import{f as v,c as j}from"./article.js";import{s as w}from"./tag.js";import{u as U}from"./upload.js";import{_ as k}from"./@jsdawn.js";import{t as x}from"./tinymce.js";import{a as C,t as I,b as S,f as D}from"./index.js";import{j as q,o as A,c as N,a as T,l as $,a1 as F,m as z,a3 as E,k as L,h as O,F as P,ad as B,v as G}from"./@vue.js";import{_ as H}from"./@qiun.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const M={class:"content-wrap"},J={class:"mr-10 ml-10"},K={class:"mr-10 ml-10 mb-20"},Q={class:"cover row"};const R=H({name:"article-add",components:{Vue3Tinymce:k},data:()=>({setting:x,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!1,autoDes:!1,picNum:1,taglist:[],params:{cid:0,title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"禅悦",status:"0",pv:1,link:""},field:[],dialogImageUrl:"",dialogVisible:!1,disabled:!1,cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},mounted(){},created(){this.query(),this.searchTag()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},tinymce(){this.loading=!1},selectCover(e){this.params.img=e},async searchTag(e){try{let a=await w(this.cur,e);if(200===a.code){let e=[];a.data.list.forEach((a=>{e.push({label:a.name,value:a.id})})),this.taglist=e}}catch(a){console.log(a)}},async query(){try{let e=await y();if(200===e.code){let a=C(I(e.data)),l=C(e.data);this.cateList=l,this.category=[...a]}}catch(e){console.log(e)}},handleChange(e){console.log(e),-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async upload(e){let a=new FormData;a.append("file",e.file);let l=await U(a);200===l.code&&(this.params.img=l.data.path)},async findField(e){try{let a=await v(e);200===a.code&&(this.field=a.data.fields)}catch(a){console.log(a)}},async create(){try{let e={...this.params};e.attr=e.attr.toString(),e.tag_id=e.tag_id.toString(),e.img||(e.img=S(e.content)[0]),e.description||(e.description=D(e.content).substr(0,255));let a={};this.field.map((e=>{a[e.field_ename]=e.field_values}));let l=await j({defaultParams:e,fieldParams:a});200==l.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:l.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(y,v,j,w,U,k){const x=e,C=a,I=l,S=t,D=s,H=o,R=d,W=m,X=r,Y=u,Z=q("MostlyCloudy"),ee=i,ae=p,le=n,te=c,se=f,oe=g,de=_,me=q("vue3-tinymce"),re=h,ue=V,ie=b;return A(),N("div",M,[T("div",J,[$(C,{modelValue:y.activeName,"onUpdate:modelValue":v[0]||(v[0]=e=>y.activeName=e),onTabClick:k.handleClick},{default:F((()=>[$(x,{label:"基本信息",name:"first"}),$(x,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),T("div",K,[$(ue,{ref:"params",model:y.params,"label-width":"90px"},{default:F((()=>[z((A(),N("div",null,[$(de,{gutter:20},{default:F((()=>[$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"文章栏目"},{default:F((()=>[$(I,{props:y.categoryProps,"show-all-levels":!1,modelValue:y.categorySelected,"onUpdate:modelValue":v[1]||(v[1]=e=>y.categorySelected=e),options:y.category,onChange:k.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:F((()=>[$(H,{modelValue:y.params.title,"onUpdate:modelValue":v[2]||(v[2]=e=>y.params.title=e)},null,8,["modelValue"])])),_:1})])),_:1}),$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"tag标签"},{default:F((()=>[$(R,{modelValue:y.params.tag_id,"onUpdate:modelValue":v[3]||(v[3]=e=>y.params.tag_id=e),options:y.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":k.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"内容属性"},{default:F((()=>[$(X,{modelValue:y.params.attr,"onUpdate:modelValue":v[4]||(v[4]=e=>y.params.attr=e),onChange:k.handleAttr},{default:F((()=>[$(W,{label:"1"},{default:F((()=>[E("头条")])),_:1}),$(W,{label:"2"},{default:F((()=>[E("推荐")])),_:1}),$(W,{label:"3"},{default:F((()=>[E("轮播")])),_:1}),$(W,{label:"4"},{default:F((()=>[E("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"发布时间"},{default:F((()=>[$(Y,{modelValue:y.params.createdAt,"onUpdate:modelValue":v[5]||(v[5]=e=>y.params.createdAt=e),"default-value":new Date,type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue","default-value"])])),_:1})])),_:1}),$(D,{sm:24,md:12},{default:F((()=>[$(S,{class:"row",label:"缩略图"},{default:F((()=>[$(le,{class:"avatar-uploader","http-request":k.upload,"show-file-list":!1,"before-upload":k.beforeUpload},{default:F((()=>[$(ae,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:F((()=>[$(ee,{class:"avatar-uploader-icon"},{default:F((()=>[$(Z)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),y.params.img?(A(),L(ae,{key:0,placement:"right",width:400,trigger:"hover"},{reference:F((()=>[$(te,{class:"avatar-uploader-icon pointer ml-10",src:y.params.img},null,8,["src"])])),default:F((()=>[$(te,{style:{width:"100%"},src:y.params.img},null,8,["src"])])),_:1})):O("",!0),$(se,{type:"primary",class:"ml-10",onClick:v[6]||(v[6]=e=>y.drawer=!0)},{default:F((()=>[E(" 默认封面图 ")])),_:1}),$(oe,{modelValue:y.drawer,"onUpdate:modelValue":v[7]||(v[7]=e=>y.drawer=e),title:"默认封面图",class:"w-300","with-header":!1},{default:F((()=>[T("div",Q,[(A(!0),N(P,null,B(y.drawerList,((e,a)=>(A(),L(te,{key:a,src:e,onClick:a=>k.selectCover(e),fit:"fit"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),$(H,{class:"ml-10 flex-1",modelValue:y.params.img,"onUpdate:modelValue":v[8]||(v[8]=e=>y.params.img=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),$(S,{label:"内容摘要"},{default:F((()=>[$(H,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:y.params.description,"onUpdate:modelValue":v[9]||(v[9]=e=>y.params.description=e)},null,8,["modelValue"])])),_:1}),$(S,{label:"文章内容"},{default:F((()=>[$(me,{modelValue:y.params.content,"onUpdate:modelValue":v[10]||(v[10]=e=>y.params.content=e),setting:y.setting,onInit:k.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),$(de,{gutter:20},{default:F((()=>[$(D,{sm:24,md:12,lg:8},{default:F((()=>[$(S,{label:"自动封面"},{default:F((()=>[$(W,{modelValue:y.autoImg,"onUpdate:modelValue":v[12]||(v[12]=e=>y.autoImg=e)},{default:F((()=>[E(" 文章第 "),$(H,{modelValue:y.picNum,"onUpdate:modelValue":v[11]||(v[11]=e=>y.picNum=e),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),E("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),$(D,{sm:24,md:12,lg:8},{default:F((()=>[$(S,{label:"提取描述"},{default:F((()=>[$(W,{modelValue:y.autoDes,"onUpdate:modelValue":v[13]||(v[13]=e=>y.autoDes=e)},{default:F((()=>[E("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),$(D,{sm:24,md:12,lg:8},{default:F((()=>[$(S,{label:"是否显示"},{default:F((()=>[$(re,{modelValue:y.params.status,"onUpdate:modelValue":v[14]||(v[14]=e=>y.params.status=e),label:"0"},{default:F((()=>[E("发布")])),_:1},8,["modelValue"]),$(re,{modelValue:y.params.status,"onUpdate:modelValue":v[15]||(v[15]=e=>y.params.status=e),label:"1"},{default:F((()=>[E("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),[[G,0==y.activeIndex],[ie,y.loading]]),z(T("div",null,[$(de,{gutter:20},{default:F((()=>[$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"短标题",prop:"name"},{default:F((()=>[$(H,{modelValue:y.params.short_title,"onUpdate:modelValue":v[16]||(v[16]=e=>y.params.short_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"SEO标题"},{default:F((()=>[$(H,{modelValue:y.params.seo_title,"onUpdate:modelValue":v[17]||(v[17]=e=>y.params.seo_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"SEO关键词"},{default:F((()=>[$(H,{modelValue:y.params.seo_keywords,"onUpdate:modelValue":v[18]||(v[18]=e=>y.params.seo_keywords=e)},null,8,["modelValue"])])),_:1})])),_:1}),$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"SEO描述"},{default:F((()=>[$(H,{modelValue:y.params.seo_description,"onUpdate:modelValue":v[19]||(v[19]=e=>y.params.seo_description=e)},null,8,["modelValue"])])),_:1})])),_:1}),$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"来源"},{default:F((()=>[$(H,{modelValue:y.params.source,"onUpdate:modelValue":v[20]||(v[20]=e=>y.params.source=e)},null,8,["modelValue"])])),_:1})])),_:1}),$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"作者"},{default:F((()=>[$(H,{modelValue:y.params.author,"onUpdate:modelValue":v[21]||(v[21]=e=>y.params.author=e)},null,8,["modelValue"])])),_:1})])),_:1}),$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"外链跳转"},{default:F((()=>[$(H,{modelValue:y.params.link,"onUpdate:modelValue":v[22]||(v[22]=e=>y.params.link=e),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),(A(!0),N(P,null,B(y.field,((e,a)=>(A(),L(D,{sm:24,md:12,lg:8,key:a},{default:F((()=>[$(S,{label:e.field_cname},{default:F((()=>["1"===e.field_type?(A(),L(H,{key:0,modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===e.field_type?(A(),L(H,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"])):(A(),L(H,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])])),_:2},1024)))),128)),$(D,{sm:24,md:12},{default:F((()=>[$(S,{label:"浏览数"},{default:F((()=>[$(H,{modelValue:y.params.pv,"onUpdate:modelValue":v[23]||(v[23]=e=>y.params.pv=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[G,1==y.activeIndex]]),$(S,null,{default:F((()=>[$(se,{type:"primary",onClick:v[24]||(v[24]=e=>k.submit("params"))},{default:F((()=>[E("保存")])),_:1})])),_:1})])),_:1},8,["model"])])])}],["__scopeId","data-v-46cf6c77"]]);export{R as default};
