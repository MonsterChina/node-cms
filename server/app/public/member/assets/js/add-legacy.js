System.register(["./element-plus-legacy.js","./category-legacy.js","./article-legacy.js","./tag-legacy.js","./upload-legacy.js","./@jsdawn-legacy.js","./tinymce-legacy.js","./index-legacy.js","./@vue-legacy.js","./@qiun-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,t,d,o,s,u,m,r,i,n,c,p,g,f,_,h,y,V,v,b,w,j,U,x,k,C,I,S,D,q,A,N,T,$,E,F,z,L,O,P,B,G,H,M,J,K;return{setters:[e=>{a=e.u,t=e.v,d=e.w,o=e.r,s=e.s,u=e.q,m=e.x,r=e.y,i=e.A,n=e.B,c=e.a,p=e.C,g=e.D,f=e.F,_=e.f,h=e.n,y=e.t,V=e.G,v=e.p,b=e.H},e=>{w=e.f},e=>{j=e.f,U=e.c},e=>{x=e.s},e=>{k=e.u},e=>{C=e._},e=>{I=e.t},e=>{S=e.a,D=e.t,q=e.f,A=e.b,N=e.c},e=>{T=e.j,$=e.o,E=e.c,F=e.a,z=e.l,L=e.a1,O=e.m,P=e.a3,B=e.k,G=e.h,H=e.F,M=e.ad,J=e.v},e=>{K=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent="[data-v-130f5899] .tiny-textarea{height:436px}.cover div[data-v-130f5899]{width:120px;height:90px;margin:5px;cursor:pointer}.w-300[data-v-130f5899]{width:300px!important}[data-v-130f5899] .el-drawer{width:280px!important}[data-v-130f5899] .el-drawer__body{padding:0}\n",document.head.appendChild(l);const Q={class:"content-wrap"},R={class:"mr-10 ml-10"},W={class:"mr-10 ml-10 mb-20"},X={class:"cover row"};e("default",K({name:"article-add",components:{Vue3Tinymce:C},data:()=>({setting:I,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!1,autoDes:!1,picNum:1,taglist:[],params:{cid:0,title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"禅悦",status:"0",pv:1,link:""},field:[],dialogImageUrl:"",dialogVisible:!1,disabled:!1,cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},mounted(){},created(){this.query(),this.searchTag()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},tinymce(){this.loading=!1},selectCover(e){this.params.img=e},async searchTag(e){try{let l=await x(this.cur,e);if(200===l.code){let e=[];l.data.list.forEach((l=>{e.push({label:l.name,value:l.id})})),this.taglist=e}}catch(l){console.log(l)}},async query(){try{let e=await w();if(200===e.code){let l=S(D(e.data)),a=S(e.data);this.cateList=a,this.category=[...l]}}catch(e){console.log(e)}},handleChange(e){console.log(e),-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async upload(e){let l=new FormData;l.append("file",e.file);let a=await k(l);200===a.code&&(this.params.img=a.data.path)},async findField(e){try{let l=await j(e);200===l.code&&(this.field=l.data.fields)}catch(l){console.log(l)}},async create(){try{let e={...this.params};e.attr=e.attr.toString(),e.tag_id=e.tag_id.toString(),e.content=q(e.content),e.img||(e.img=A(e.content)[0]),e.description||(e.description=N(e.content).substr(0,255));let l={};this.field.map((e=>{l[e.field_ename]=e.field_values}));let a=await U({defaultParams:e,fieldParams:l});200==a.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:a.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(e,l,w,j,U,x){const k=a,C=t,I=d,S=o,D=s,q=u,A=m,N=r,K=i,Y=n,Z=T("MostlyCloudy"),ee=c,le=p,ae=g,te=f,de=_,oe=h,se=y,ue=T("vue3-tinymce"),me=V,re=v,ie=b;return $(),E("div",Q,[F("div",R,[z(C,{modelValue:e.activeName,"onUpdate:modelValue":l[0]||(l[0]=l=>e.activeName=l),onTabClick:x.handleClick},{default:L((()=>[z(k,{label:"基本信息",name:"first"}),z(k,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),F("div",W,[z(re,{ref:"params",model:e.params,"label-width":"90px"},{default:L((()=>[O(($(),E("div",null,[z(se,{gutter:20},{default:L((()=>[z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"文章栏目"},{default:L((()=>[z(I,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":l[1]||(l[1]=l=>e.categorySelected=l),options:e.category,onChange:x.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:L((()=>[z(q,{modelValue:e.params.title,"onUpdate:modelValue":l[2]||(l[2]=l=>e.params.title=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"tag标签"},{default:L((()=>[z(A,{modelValue:e.params.tag_id,"onUpdate:modelValue":l[3]||(l[3]=l=>e.params.tag_id=l),options:e.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":x.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"内容属性"},{default:L((()=>[z(K,{modelValue:e.params.attr,"onUpdate:modelValue":l[4]||(l[4]=l=>e.params.attr=l),onChange:x.handleAttr},{default:L((()=>[z(N,{label:"1"},{default:L((()=>[P("头条")])),_:1}),z(N,{label:"2"},{default:L((()=>[P("推荐")])),_:1}),z(N,{label:"3"},{default:L((()=>[P("轮播")])),_:1}),z(N,{label:"4"},{default:L((()=>[P("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"发布时间"},{default:L((()=>[z(Y,{modelValue:e.params.createdAt,"onUpdate:modelValue":l[5]||(l[5]=l=>e.params.createdAt=l),"default-value":new Date,type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue","default-value"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:L((()=>[z(S,{class:"row",label:"缩略图"},{default:L((()=>[z(ae,{class:"avatar-uploader","http-request":x.upload,"show-file-list":!1,"before-upload":x.beforeUpload},{default:L((()=>[z(le,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:L((()=>[z(ee,{class:"avatar-uploader-icon"},{default:L((()=>[z(Z)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),e.params.img?($(),B(le,{key:0,placement:"right",width:400,trigger:"hover"},{reference:L((()=>[z(te,{class:"avatar-uploader-icon pointer ml-10",src:e.params.img},null,8,["src"])])),default:L((()=>[z(te,{style:{width:"100%"},src:e.params.img},null,8,["src"])])),_:1})):G("",!0),z(de,{type:"primary",class:"ml-10",onClick:l[6]||(l[6]=l=>e.drawer=!0)},{default:L((()=>[P(" 默认封面图 ")])),_:1}),z(oe,{modelValue:e.drawer,"onUpdate:modelValue":l[7]||(l[7]=l=>e.drawer=l),title:"默认封面图",class:"w-300","with-header":!1},{default:L((()=>[F("div",X,[($(!0),E(H,null,M(e.drawerList,((e,l)=>($(),B(te,{key:l,src:e,onClick:l=>x.selectCover(e),fit:"fit"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),z(q,{class:"ml-10 flex-1",modelValue:e.params.img,"onUpdate:modelValue":l[8]||(l[8]=l=>e.params.img=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),z(S,{label:"内容摘要"},{default:L((()=>[z(q,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:e.params.description,"onUpdate:modelValue":l[9]||(l[9]=l=>e.params.description=l)},null,8,["modelValue"])])),_:1}),z(S,{label:"文章内容"},{default:L((()=>[z(ue,{modelValue:e.params.content,"onUpdate:modelValue":l[10]||(l[10]=l=>e.params.content=l),setting:e.setting,onInit:x.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),z(se,{gutter:20},{default:L((()=>[z(D,{sm:24,md:12,lg:8},{default:L((()=>[z(S,{label:"自动封面"},{default:L((()=>[z(N,{modelValue:e.autoImg,"onUpdate:modelValue":l[12]||(l[12]=l=>e.autoImg=l)},{default:L((()=>[P(" 文章第 "),z(q,{modelValue:e.picNum,"onUpdate:modelValue":l[11]||(l[11]=l=>e.picNum=l),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),P("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12,lg:8},{default:L((()=>[z(S,{label:"提取描述"},{default:L((()=>[z(N,{modelValue:e.autoDes,"onUpdate:modelValue":l[13]||(l[13]=l=>e.autoDes=l)},{default:L((()=>[P("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12,lg:8},{default:L((()=>[z(S,{label:"是否显示"},{default:L((()=>[z(me,{modelValue:e.params.status,"onUpdate:modelValue":l[14]||(l[14]=l=>e.params.status=l),label:"0"},{default:L((()=>[P("发布")])),_:1},8,["modelValue"]),z(me,{modelValue:e.params.status,"onUpdate:modelValue":l[15]||(l[15]=l=>e.params.status=l),label:"1"},{default:L((()=>[P("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),[[J,0==e.activeIndex],[ie,e.loading]]),O(F("div",null,[z(se,{gutter:20},{default:L((()=>[z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"短标题",prop:"name"},{default:L((()=>[z(q,{modelValue:e.params.short_title,"onUpdate:modelValue":l[16]||(l[16]=l=>e.params.short_title=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"SEO标题"},{default:L((()=>[z(q,{modelValue:e.params.seo_title,"onUpdate:modelValue":l[17]||(l[17]=l=>e.params.seo_title=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"SEO关键词"},{default:L((()=>[z(q,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":l[18]||(l[18]=l=>e.params.seo_keywords=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"SEO描述"},{default:L((()=>[z(q,{modelValue:e.params.seo_description,"onUpdate:modelValue":l[19]||(l[19]=l=>e.params.seo_description=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"来源"},{default:L((()=>[z(q,{modelValue:e.params.source,"onUpdate:modelValue":l[20]||(l[20]=l=>e.params.source=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"作者"},{default:L((()=>[z(q,{modelValue:e.params.author,"onUpdate:modelValue":l[21]||(l[21]=l=>e.params.author=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"外链跳转"},{default:L((()=>[z(q,{modelValue:e.params.link,"onUpdate:modelValue":l[22]||(l[22]=l=>e.params.link=l),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),($(!0),E(H,null,M(e.field,((e,l)=>($(),B(D,{sm:24,md:12,lg:8,key:l},{default:L((()=>[z(S,{label:e.field_cname},{default:L((()=>["1"===e.field_type?($(),B(q,{key:0,modelValue:e.field_values,"onUpdate:modelValue":l=>e.field_values=l,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===e.field_type?($(),B(q,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.field_values,"onUpdate:modelValue":l=>e.field_values=l},null,8,["modelValue","onUpdate:modelValue"])):($(),B(q,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.field_values,"onUpdate:modelValue":l=>e.field_values=l},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])])),_:2},1024)))),128)),z(D,{sm:24,md:12},{default:L((()=>[z(S,{label:"浏览数"},{default:L((()=>[z(q,{modelValue:e.params.pv,"onUpdate:modelValue":l[23]||(l[23]=l=>e.params.pv=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[J,1==e.activeIndex]]),z(S,null,{default:L((()=>[z(de,{type:"primary",onClick:l[24]||(l[24]=e=>x.submit("params"))},{default:L((()=>[P("保存")])),_:1})])),_:1})])),_:1},8,["model"])])])}],["__scopeId","data-v-130f5899"]]))}}}));
