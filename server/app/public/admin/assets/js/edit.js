import{u as e,v as a,w as l,r as t,s,q as d,x as o,y as i,A as m,B as r,a as u,C as p,D as n,F as c,f,n as g,t as _,G as h,p as V,H as b}from"./element-plus.js";import{f as y}from"./category.js";import{f as v,d as j,u as w}from"./article.js";import{s as U}from"./tag.js";import{u as k}from"./upload.js";import{_ as x}from"./@jsdawn.js";import{t as C}from"./tinymce.js";import{c as S,a as I,t as A,b as q,f as D}from"./index.js";import{j as N,o as $,c as F,a as T,l as P,a1 as z,m as E,k as L,a3 as O,h as B,F as G,ad as H,v as M}from"./@vue.js";import{_ as R}from"./@qiun.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const J={class:"content-wrap"},K={class:"mr-10 ml-10"},Q={class:"mr-10 ml-10 mb-20"},W={class:"cover row"};const X=R({name:"article-edit",components:{Vue3Tinymce:x},data:()=>({setting:C,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!1,autoDes:!1,picNum:1,taglist:[],params:{id:0,cid:0,sub_cid:[],title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"",status:"0",pv:1,link:""},field:[],fieldParams:{},dialogImageUrl:"",dialogVisible:!1,disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]},cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail(),await this.query(),this.searchTag()},unmounted(){},methods:{tinymce(){this.loading=!1},handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},selectCover(e){this.params.img=e},async searchTag(e){try{let a=await U(this.cur,e,100);if(200===a.code){let e=[];a.data.list.forEach((a=>{e.push({label:a.name,value:a.id})})),this.taglist=e}}catch(a){console.log(a)}},async query(){try{let e=await y();if(200===e.code){let a=e.data,l=S(this.params.cid,a);this.categorySelected=l,this.findField(this.params.cid);let t=I(A(a));this.cateList=I(a),this.category=[...t]}}catch(e){console.log(e)}},handleChange(e){-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},async findField(e){try{let a=await v(e);200===a.code&&(this.field=a.data.fields)}catch(a){console.log(a)}},async detail(){try{let e=await j(this.params.id);if(200===e.code){let a=e.data;a.attr=a.attr?a.attr.split(","):[],a.sub_cid=a.sub_cid?a.sub_cid.split(",").map((e=>Number(e))):[],a.tag_id=a.tag_id?a.tag_id.split(",").map((e=>Number(e))):[],a.status=a.status.toString(),a.updatedAt=new Date(a.createdAt),this.params=a,this.fieldParams=a.field,this.loading=!1}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async upload(e){let a=new FormData;a.append("file",e.file);let l=await k(a);200===l.code&&(this.params.img=l.data.path)},async update(){try{let e={...this.params};e.attr=e.attr.toString(),e.sub_cid=e.sub_cid.toString(),e.tag_id=e.tag_id.toString(),e.img||(e.img=q(e.content)[0]),e.description||(e.description=D(e.content).substr(0,255));let a=await w({...e,field:this.fieldParams});200==a.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:a.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(y,v,j,w,U,k){const x=e,C=a,S=l,I=t,A=s,q=d,D=o,R=i,X=m,Y=r,Z=N("MostlyCloudy"),ee=u,ae=p,le=n,te=c,se=f,de=g,oe=_,ie=N("vue3-tinymce"),me=h,re=V,ue=b;return $(),F("div",J,[T("div",K,[P(C,{modelValue:y.activeName,"onUpdate:modelValue":v[0]||(v[0]=e=>y.activeName=e),onTabClick:k.handleClick},{default:z((()=>[P(x,{label:"基本信息",name:"first"}),P(x,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),T("div",Q,[E(($(),L(re,{ref:"params",model:y.params,"label-width":"90px"},{default:z((()=>[E(T("div",null,[P(oe,{gutter:20},{default:z((()=>[P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"文章栏目"},{default:z((()=>[P(S,{props:y.categoryProps,"show-all-levels":!1,modelValue:y.categorySelected,"onUpdate:modelValue":v[1]||(v[1]=e=>y.categorySelected=e),options:y.category,onChange:k.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:z((()=>[P(q,{modelValue:y.params.title,"onUpdate:modelValue":v[2]||(v[2]=e=>y.params.title=e)},null,8,["modelValue"])])),_:1})])),_:1}),P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"tag标签"},{default:z((()=>[P(D,{modelValue:y.params.tag_id,"onUpdate:modelValue":v[3]||(v[3]=e=>y.params.tag_id=e),options:y.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":k.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"内容属性"},{default:z((()=>[P(X,{modelValue:y.params.attr,"onUpdate:modelValue":v[4]||(v[4]=e=>y.params.attr=e),onChange:k.handleAttr},{default:z((()=>[P(R,{label:"1"},{default:z((()=>[O("头条")])),_:1}),P(R,{label:"2"},{default:z((()=>[O("推荐")])),_:1}),P(R,{label:"3"},{default:z((()=>[O("轮播")])),_:1}),P(R,{label:"4"},{default:z((()=>[O("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"发布时间"},{default:z((()=>[P(Y,{modelValue:y.params.updatedAt,"onUpdate:modelValue":v[5]||(v[5]=e=>y.params.updatedAt=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1})])),_:1}),P(A,{sm:24,md:12},{default:z((()=>[P(I,{class:"row",label:"缩略图"},{default:z((()=>[P(le,{class:"avatar-uploader","http-request":k.upload,"show-file-list":!1,"before-upload":k.beforeUpload},{default:z((()=>[P(ae,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:z((()=>[P(ee,{class:"avatar-uploader-icon"},{default:z((()=>[P(Z)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),y.params.img?($(),L(ae,{key:0,placement:"right",width:400,trigger:"hover"},{reference:z((()=>[P(te,{class:"avatar-uploader-icon pointer ml-10",src:y.params.img},null,8,["src"])])),default:z((()=>[P(te,{style:{width:"100%"},src:y.params.img},null,8,["src"])])),_:1})):B("",!0),P(se,{type:"primary",class:"ml-10",onClick:v[6]||(v[6]=e=>y.drawer=!0)},{default:z((()=>[O(" 默认封面图 ")])),_:1}),P(de,{modelValue:y.drawer,"onUpdate:modelValue":v[7]||(v[7]=e=>y.drawer=e),title:"默认封面图",class:"w-300","with-header":!1},{default:z((()=>[T("div",W,[($(!0),F(G,null,H(y.drawerList,((e,a)=>($(),L(te,{key:a,src:e,onClick:a=>k.selectCover(e),fit:"fill"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),P(q,{class:"ml-10 flex-1",modelValue:y.params.img,"onUpdate:modelValue":v[8]||(v[8]=e=>y.params.img=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),P(I,{label:"内容摘要"},{default:z((()=>[P(q,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:y.params.description,"onUpdate:modelValue":v[9]||(v[9]=e=>y.params.description=e)},null,8,["modelValue"])])),_:1}),P(I,{label:"文章内容"},{default:z((()=>[P(ie,{modelValue:y.params.content,"onUpdate:modelValue":v[10]||(v[10]=e=>y.params.content=e),setting:y.setting,onInit:k.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),P(oe,{gutter:20},{default:z((()=>[P(A,{sm:24,md:12,lg:8},{default:z((()=>[P(I,{label:"自动封面"},{default:z((()=>[P(R,{modelValue:y.autoImg,"onUpdate:modelValue":v[12]||(v[12]=e=>y.autoImg=e)},{default:z((()=>[O(" 文章第 "),P(q,{modelValue:y.picNum,"onUpdate:modelValue":v[11]||(v[11]=e=>y.picNum=e),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),O("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),P(A,{sm:24,md:12,lg:8},{default:z((()=>[P(I,{label:"提取描述"},{default:z((()=>[P(R,{modelValue:y.autoDes,"onUpdate:modelValue":v[13]||(v[13]=e=>y.autoDes=e)},{default:z((()=>[O("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),P(A,{sm:24,md:12,lg:8},{default:z((()=>[P(I,{label:"是否显示"},{default:z((()=>[P(me,{modelValue:y.params.status,"onUpdate:modelValue":v[14]||(v[14]=e=>y.params.status=e),label:"0"},{default:z((()=>[O("发布")])),_:1},8,["modelValue"]),P(me,{modelValue:y.params.status,"onUpdate:modelValue":v[15]||(v[15]=e=>y.params.status=e),label:"1"},{default:z((()=>[O("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[M,0==y.activeIndex]]),E(T("div",null,[P(oe,{gutter:20},{default:z((()=>[P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"短标题",prop:"name"},{default:z((()=>[P(q,{modelValue:y.params.short_title,"onUpdate:modelValue":v[16]||(v[16]=e=>y.params.short_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"SEO标题"},{default:z((()=>[P(q,{modelValue:y.params.seo_title,"onUpdate:modelValue":v[17]||(v[17]=e=>y.params.seo_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"SEO关键词"},{default:z((()=>[P(q,{modelValue:y.params.seo_keywords,"onUpdate:modelValue":v[18]||(v[18]=e=>y.params.seo_keywords=e)},null,8,["modelValue"])])),_:1})])),_:1}),P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"SEO描述"},{default:z((()=>[P(q,{modelValue:y.params.seo_description,"onUpdate:modelValue":v[19]||(v[19]=e=>y.params.seo_description=e)},null,8,["modelValue"])])),_:1})])),_:1}),P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"来源"},{default:z((()=>[P(q,{modelValue:y.params.source,"onUpdate:modelValue":v[20]||(v[20]=e=>y.params.source=e)},null,8,["modelValue"])])),_:1})])),_:1}),P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"作者"},{default:z((()=>[P(q,{modelValue:y.params.author,"onUpdate:modelValue":v[21]||(v[21]=e=>y.params.author=e)},null,8,["modelValue"])])),_:1})])),_:1}),P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"外链跳转"},{default:z((()=>[P(q,{modelValue:y.params.link,"onUpdate:modelValue":v[22]||(v[22]=e=>y.params.link=e),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),($(!0),F(G,null,H(y.field,((e,a)=>($(),L(A,{sm:24,md:12,lg:8,key:a},{default:z((()=>[P(I,{label:e.field_cname},{default:z((()=>["1"===e.field_type?($(),L(q,{key:0,modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===e.field_type?($(),L(q,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"])):($(),L(q,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])])),_:2},1024)))),128)),P(A,{sm:24,md:12},{default:z((()=>[P(I,{label:"浏览数"},{default:z((()=>[P(q,{modelValue:y.params.pv,"onUpdate:modelValue":v[23]||(v[23]=e=>y.params.pv=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[M,1==y.activeIndex]]),P(I,null,{default:z((()=>[P(se,{type:"primary",onClick:v[24]||(v[24]=e=>k.submit("params"))},{default:z((()=>[O("保存")])),_:1})])),_:1})])),_:1},8,["model"])),[[ue,y.loading]])])])}],["__scopeId","data-v-a8bfee43"]]);export{X as default};
