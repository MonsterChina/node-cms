import{G as e,H as a,I as l,r as s,q as t,u as o,M as m,f as d,p as r}from"./element-plus.js";import{f as i,a as p,u}from"./category.js";import{_ as n,c,a as h,t as V}from"./index.js";import{l as g}from"./model.js";import{p as y}from"./pinyin-pro.js";import{o as f,c as _,a as b,U as j,W as U,a1 as v,X as k,_ as w,h as x,F as C,aa as I,t as S,a2 as L}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const q={class:"mr-10 ml-10"},$={class:"mr-10 ml-10 mb-20"};const N=n({name:"category-edit",data:()=>({id:0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],modList:[],params:{pid:0,seo_title:"",seo_keywords:"",seo_description:"",name:"",pinyin:"",path:"",mid:"0",description:"",url:"",sort:0,type:"0",target:"0",status:"0"},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:10,message:"名称长度在 2 到 10 个字符之间",trigger:"blur"}]}}),computed:{},watch:{"params.name":function(e,a){this.params.pinyin=y(e,{toneType:"none"}).replace(/\s+/g,"");let l=this.params.path.split("/");l.length=l.length-1,l.push(this.params.pinyin),this.params.path=l.join("/")}},created(){this.id=this.$route.params.id,this.modelList(),this.query(),this.findById()},methods:{handleClick(e){this.activeIndex=e.index},async query(){try{let e=await i();if(200===e.code){let a=e.data,l=c(this.id,a);l.length>1&&(l.length=l.length-1),this.categorySelected=l;let s=h(V(a));this.category=[...s]}}catch(e){console.log(e)}},async modelList(){try{let e=await g(this.cur);200===e.code&&(this.modList=e.data.list.map((e=>(e.id=e.id.toString(),e))))}catch(e){console.log(e)}},async findById(){try{let e=await p(this.id);200===e.code&&(this.params=e.data)}catch(e){console.error(e)}},handleChange(e){-1!=e[0]&&(this.params.pid=e[e.length-1])},async update(){try{(await u(this.params)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.params.path=this.allPath,this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(i,p,u,n,c,h){const V=e,g=a,y=l,N=s,P=t,T=o,z=m,B=d,R=r;return f(),_(C,null,[b("div",q,[j(g,{modelValue:i.activeName,"onUpdate:modelValue":p[0]||(p[0]=e=>i.activeName=e),onTabClick:h.handleClick},{default:U((()=>[j(V,{label:"基本信息",name:"first"}),j(V,{label:"SEO设置",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),b("div",$,[j(R,{ref:"params",model:i.params,rules:i.paramsRules,"label-width":"84px",class:"w640"},{default:U((()=>[v(b("div",null,[0==!i.params.pid?(f(),k(N,{key:0,label:"上级栏目"},{default:U((()=>[j(y,{props:i.categoryProps,"show-all-levels":!1,disabled:!0,modelValue:i.categorySelected,"onUpdate:modelValue":p[1]||(p[1]=e=>i.categorySelected=e),options:i.category,onChange:h.handleChange},null,8,["props","modelValue","options","onChange"]),w(" 不选择为顶级栏目 ")])),_:1})):x("",!0),j(N,{label:"栏目名称",prop:"name",rules:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:1,max:10,message:"栏目不能超过10个字",trigger:"blur"}]},{default:U((()=>[j(P,{modelValue:i.params.name,"onUpdate:modelValue":p[2]||(p[2]=e=>i.params.name=e)},null,8,["modelValue"])])),_:1}),j(N,{label:"栏目标识"},{default:U((()=>[j(P,{modelValue:i.params.pinyin,"onUpdate:modelValue":p[3]||(p[3]=e=>i.params.pinyin=e),disabled:""},null,8,["modelValue"])])),_:1}),j(N,{label:"栏目路径"},{default:U((()=>[j(P,{modelValue:i.params.path,"onUpdate:modelValue":p[4]||(p[4]=e=>i.params.path=e)},null,8,["modelValue"])])),_:1}),j(N,{label:"栏目类型"},{default:U((()=>[j(T,{modelValue:i.params.type,"onUpdate:modelValue":p[5]||(p[5]=e=>i.params.type=e),label:"0"},{default:U((()=>[w("栏目")])),_:1},8,["modelValue"]),j(T,{modelValue:i.params.type,"onUpdate:modelValue":p[6]||(p[6]=e=>i.params.type=e),label:"1"},{default:U((()=>[w("单页")])),_:1},8,["modelValue"])])),_:1}),j(N,{label:"扩展模型"},{default:U((()=>[j(z,{modelValue:i.params.mid,"onUpdate:modelValue":p[7]||(p[7]=e=>i.params.mid=e)},{default:U((()=>[j(T,{label:"0"},{default:U((()=>[w("基本模型")])),_:1}),i.modList.length>0?(f(!0),_(C,{key:0},I(i.modList,((e,a)=>(f(),k(T,{key:a,label:e.id},{default:U((()=>[w(S(e.model_name)+"模型 ",1)])),_:2},1032,["label"])))),128)):x("",!0)])),_:1},8,["modelValue"])])),_:1}),j(N,{label:"是否显示"},{default:U((()=>[j(T,{modelValue:i.params.status,"onUpdate:modelValue":p[8]||(p[8]=e=>i.params.status=e),label:"0"},{default:U((()=>[w("显示")])),_:1},8,["modelValue"]),j(T,{modelValue:i.params.status,"onUpdate:modelValue":p[9]||(p[9]=e=>i.params.status=e),label:"1"},{default:U((()=>[w("隐藏")])),_:1},8,["modelValue"])])),_:1}),j(N,{label:"栏目排序"},{default:U((()=>[j(P,{modelValue:i.params.sort,"onUpdate:modelValue":p[10]||(p[10]=e=>i.params.sort=e)},null,8,["modelValue"])])),_:1})],512),[[L,0==i.activeIndex]]),v(b("div",null,[j(N,{label:"栏目描述"},{default:U((()=>[j(P,{modelValue:i.params.description,"onUpdate:modelValue":p[11]||(p[11]=e=>i.params.description=e)},null,8,["modelValue"])])),_:1}),j(N,{label:"栏目链接"},{default:U((()=>[j(P,{modelValue:i.params.url,"onUpdate:modelValue":p[12]||(p[12]=e=>i.params.url=e)},null,8,["modelValue"])])),_:1}),j(N,{label:"打开方式"},{default:U((()=>[j(T,{modelValue:i.params.target,"onUpdate:modelValue":p[13]||(p[13]=e=>i.params.target=e),label:"0"},{default:U((()=>[w("当前页面")])),_:1},8,["modelValue"]),j(T,{modelValue:i.params.target,"onUpdate:modelValue":p[14]||(p[14]=e=>i.params.target=e),label:"1"},{default:U((()=>[w("新页面")])),_:1},8,["modelValue"])])),_:1}),j(N,{label:"seo标题"},{default:U((()=>[j(P,{modelValue:i.params.seo_title,"onUpdate:modelValue":p[15]||(p[15]=e=>i.params.seo_title=e)},null,8,["modelValue"])])),_:1}),j(N,{label:"seo关键词"},{default:U((()=>[j(P,{modelValue:i.params.seo_keywords,"onUpdate:modelValue":p[16]||(p[16]=e=>i.params.seo_keywords=e)},null,8,["modelValue"])])),_:1}),j(N,{label:"seo描述"},{default:U((()=>[j(P,{modelValue:i.params.seo_description,"onUpdate:modelValue":p[17]||(p[17]=e=>i.params.seo_description=e)},null,8,["modelValue"])])),_:1})],512),[[L,1==i.activeIndex]]),j(N,null,{default:U((()=>[j(B,{type:"primary",onClick:p[18]||(p[18]=e=>h.submit("params"))},{default:U((()=>[w("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])],64)}]]);export{N as default};
//# sourceMappingURL=edit4.js.map
