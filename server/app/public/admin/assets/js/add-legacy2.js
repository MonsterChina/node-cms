System.register(["./element-plus-legacy.js","./sys_app-legacy.js","./category-legacy.js","./index-legacy.js","./model-legacy.js","./pinyin-pro-legacy.js","./@vue-legacy.js","./@qiun-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,t,s,o,d,u,r,i,m,n,c,p,y,h,g,V,v,_,f,b,j,w,U,S,P,k,C,x,q,L,I;return{setters:[e=>{l=e.u,t=e.v,s=e.w,o=e.r,d=e.q,u=e.M,r=e.N,i=e.G,m=e.O,n=e.f,c=e.p},e=>{p=e.v},e=>{y=e.f,h=e.c},e=>{g=e.a,V=e.t},e=>{v=e.l},e=>{_=e.p},e=>{f=e.o,b=e.c,j=e.a,w=e.g,U=e._,S=e.w,P=e.Y,k=e.ab,C=e.e,x=e.a0,q=e.v,L=e.t},e=>{I=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"content-wrap"},N={class:"mr-10 ml-10"},$={class:"mr-10 ml-10 mb-20"};e("default",I({name:"category-add",data:()=>({categorySelected:[],categorySelectedPath:"",categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],modList:[],views:[],params:{pid:0,seo_title:"",seo_keywords:"",seo_description:"",name:"",path:"",pinyin:"",mid:"0",description:"",url:"",sort:0,type:"0",target:"0",status:"0",article_view:"article.html",list_view:"list.html"}}),created(){this.query(),this.getviews(),this.modelList()},methods:{createPinyin(e){this.params.pinyin=_(e,{toneType:"none"}).replace(/\s+/g,""),this.params.path=this.categorySelectedPath?this.categorySelectedPath+this.params.pinyin:"/"+this.categorySelectedPath+this.params.pinyin},changePath(e){this.params.path=this.categorySelectedPath?this.categorySelectedPath+e:"/"+this.categorySelectedPath+e},handleClick(e){this.activeIndex=e.index},async query(){try{let e=await y();if(200===e.code){let a=g(V(e.data));this.cate=e.data,this.category=[...a]}}catch(e){console.log(e)}},async getviews(){try{let e=await p();200===e.code&&(this.views=e.data.filter((e=>{if("404.html"!==e&&"500.html"!==e)return!0})).map((e=>({label:e,value:e}))))}catch(e){console.log(e)}},handleChange(e){let a=[];Object.values(e).forEach((e=>{this.cate.forEach((l=>{l.id==e&&a.push("/"+l.pinyin)}))})),this.categorySelectedPath=a.join("")+"/",this.params.path=this.categorySelectedPath+this.params.pinyin,-1!=e[0]&&(this.params.pid=e[e.length-1])},async modelList(){try{let e=await v(this.cur);200===e.code&&(this.modList=e.data.list)}catch(e){console.log(e)}},async categoryAdd(){try{let e=await h(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.categoryAdd()}))}}},[["render",function(e,p,y,h,g,V){const v=l,_=t,I=s,E=o,O=d,T=u,z=r,A=i,G=m,M=n,Y=c;return f(),b("div",a,[j("div",N,[w(_,{modelValue:e.activeName,"onUpdate:modelValue":p[0]||(p[0]=a=>e.activeName=a),onTabClick:V.handleClick},{default:U((()=>[w(v,{label:"基本信息",name:"first"}),w(v,{label:"SEO设置",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),j("div",$,[w(Y,{ref:"params",model:e.params,"label-width":"84px"},{default:U((()=>[S(j("div",null,[w(E,{label:"上级栏目"},{default:U((()=>[w(I,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":p[1]||(p[1]=a=>e.categorySelected=a),options:e.category,onChange:V.handleChange,placeholder:"不选择为顶级栏目"},null,8,["props","modelValue","options","onChange"])])),_:1}),w(E,{label:"栏目名称",prop:"name",rules:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:U((()=>[w(O,{modelValue:e.params.name,"onUpdate:modelValue":p[2]||(p[2]=a=>e.params.name=a),onChange:V.createPinyin},null,8,["modelValue","onChange"])])),_:1}),w(E,{label:"栏目标识"},{default:U((()=>[w(O,{modelValue:e.params.pinyin,"onUpdate:modelValue":p[3]||(p[3]=a=>e.params.pinyin=a),onChange:V.changePath},null,8,["modelValue","onChange"])])),_:1}),w(E,{label:"栏目路径"},{default:U((()=>[w(O,{modelValue:e.params.path,"onUpdate:modelValue":p[4]||(p[4]=a=>e.params.path=a),disabled:""},null,8,["modelValue"])])),_:1}),w(E,{label:"列表模板"},{default:U((()=>[w(z,{modelValue:e.params.list_view,"onUpdate:modelValue":p[5]||(p[5]=a=>e.params.list_view=a),placeholder:"Select"},{default:U((()=>[(f(!0),b(P,null,k(e.views,(e=>(f(),C(T,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(E,{label:"内容模板"},{default:U((()=>[w(z,{modelValue:e.params.article_view,"onUpdate:modelValue":p[6]||(p[6]=a=>e.params.article_view=a),placeholder:"Select"},{default:U((()=>[(f(!0),b(P,null,k(e.views,(e=>(f(),C(T,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(E,{label:"栏目类型"},{default:U((()=>[w(A,{modelValue:e.params.type,"onUpdate:modelValue":p[7]||(p[7]=a=>e.params.type=a),value:"0"},{default:U((()=>[x("栏目")])),_:1},8,["modelValue"]),w(A,{modelValue:e.params.type,"onUpdate:modelValue":p[8]||(p[8]=a=>e.params.type=a),value:"1"},{default:U((()=>[x("单页")])),_:1},8,["modelValue"])])),_:1}),w(E,{label:"是否显示"},{default:U((()=>[w(A,{modelValue:e.params.status,"onUpdate:modelValue":p[9]||(p[9]=a=>e.params.status=a),value:"0"},{default:U((()=>[x("显示")])),_:1},8,["modelValue"]),w(A,{modelValue:e.params.status,"onUpdate:modelValue":p[10]||(p[10]=a=>e.params.status=a),value:"1"},{default:U((()=>[x("隐藏")])),_:1},8,["modelValue"])])),_:1})],512),[[q,0==e.activeIndex]]),S(j("div",null,[w(E,{label:"栏目描述"},{default:U((()=>[w(O,{modelValue:e.params.description,"onUpdate:modelValue":p[11]||(p[11]=a=>e.params.description=a)},null,8,["modelValue"])])),_:1}),w(E,{label:"栏目链接"},{default:U((()=>[w(O,{modelValue:e.params.url,"onUpdate:modelValue":p[12]||(p[12]=a=>e.params.url=a)},null,8,["modelValue"])])),_:1}),w(E,{label:"扩展模型"},{default:U((()=>[w(G,{modelValue:e.params.mid,"onUpdate:modelValue":p[13]||(p[13]=a=>e.params.mid=a)},{default:U((()=>[w(A,{value:"0"},{default:U((()=>[x("基本模型")])),_:1}),(f(!0),b(P,null,k(e.modList,((e,a)=>(f(),C(A,{key:a,value:e.id},{default:U((()=>[x(L(e.model_name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(E,{label:"打开方式"},{default:U((()=>[w(A,{modelValue:e.params.target,"onUpdate:modelValue":p[14]||(p[14]=a=>e.params.target=a),value:"0"},{default:U((()=>[x("当前页面")])),_:1},8,["modelValue"]),w(A,{modelValue:e.params.target,"onUpdate:modelValue":p[15]||(p[15]=a=>e.params.target=a),value:"1"},{default:U((()=>[x("新页面")])),_:1},8,["modelValue"])])),_:1}),w(E,{label:"栏目排序"},{default:U((()=>[w(O,{modelValue:e.params.sort,"onUpdate:modelValue":p[16]||(p[16]=a=>e.params.sort=a)},null,8,["modelValue"])])),_:1}),w(E,{label:"seo标题"},{default:U((()=>[w(O,{modelValue:e.params.seo_title,"onUpdate:modelValue":p[17]||(p[17]=a=>e.params.seo_title=a)},null,8,["modelValue"])])),_:1}),w(E,{label:"seo关键词"},{default:U((()=>[w(O,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":p[18]||(p[18]=a=>e.params.seo_keywords=a)},null,8,["modelValue"])])),_:1}),w(E,{label:"seo描述"},{default:U((()=>[w(O,{modelValue:e.params.seo_description,"onUpdate:modelValue":p[19]||(p[19]=a=>e.params.seo_description=a)},null,8,["modelValue"])])),_:1})],512),[[q,1==e.activeIndex]]),w(E,null,{default:U((()=>[w(M,{type:"primary",onClick:p[20]||(p[20]=e=>V.submit("params"))},{default:U((()=>[x("保存")])),_:1})])),_:1})])),_:1},8,["model"])])])}]]))}}}));
