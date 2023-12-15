import{s,t as a}from"./element-plus.js";import{t}from"./article.js";import{r as e}from"./site2.js";import{_ as l,q as c}from"./@qiun.js";import{j as o,o as i,k as r,a1 as m,l as n,a as p,a3 as d,t as u,p as f,i as g}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./vue-demi.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const v=""+new URL("../svg/ico-article.svg",import.meta.url).href,b=""+new URL("../svg/ico-will.svg",import.meta.url).href,h=""+new URL("../svg/ico-message.svg",import.meta.url).href,j=""+new URL("../svg/ico-up.svg",import.meta.url).href,x={name:"home-info",components:{qiunVueUcharts:c},data:()=>({data:{week:0,message:0,tag:0,article:0,version:"v.1.6.0",appName:"禅悦cms",port:"",versionTime:"",author:""},dirname:"",loading:!0,chartData:{},opts:{rotate:!1,rotateLock:!1,color:["#FADC19","#9FDB1D","#00B42A","#3491FA","#165DFF","#722ED1"],padding:[5,5,5,5],dataLabel:!0,enableScroll:!1,legend:{show:!0,position:"right",lineHeight:25},title:{name:"禅悦cms",fontSize:15,color:"#666666"},subtitle:{name:"架构",fontSize:25,color:"#7cb5ec"},extra:{ring:{ringWidth:60,activeOpacity:.5,activeRadius:10,offsetAngle:0,labelWidth:15,border:!0,borderWidth:3,borderColor:"#FFFFFF"}}}}),computed:{},created(){this.chart()},mounted(){this.tongji(),this.runEnv()},methods:{async tongji(){try{let s=await t();200===s.code?(this.data=s.data,this.loading=!1):this.$message({message:s.msg,type:"success"})}catch(s){console.log(s)}},async runEnv(){try{let s=await e();const{code:a,data:t}=s;200===a?this.dirname=t.dirname:this.$message({message:s.msg,type:"success"})}catch(s){console.log(s)}},chart(){this.chartData=JSON.parse(JSON.stringify({series:[{data:[{name:"nodejs",value:40},{name:"mysql",value:10},{name:"vue3",value:40},{name:"javascript",value:90},{name:"css3",value:10},{name:"html5",value:10}]}]}))}}},w=s=>(f("data-v-16f54a58"),s=s(),g(),s),y={class:"bg-fff pd-20 radius-6 row justify-around mb-20"},F={class:"row flex-col align-c"},D=w((()=>p("div",{class:"tj-img"},[p("img",{src:v})],-1))),q=w((()=>p("p",{class:"f-12 text-c mt-5"},"文章内容",-1))),S={class:"f-20 text-c"},_=w((()=>p("sub",{class:"pos-r t-0 f-12"},"篇",-1))),L={class:"row flex-col align-c"},k=w((()=>p("div",{class:"tj-img"},[p("img",{src:b})],-1))),E=w((()=>p("p",{class:"f-12 text-c mt-5"},"文章标签",-1))),R={class:"f-20 text-c"},U=w((()=>p("sub",{class:"pos-r t-0 f-12"},"个",-1))),z=w((()=>p("div",{class:"tj-img"},[p("img",{src:h})],-1))),A=w((()=>p("p",{class:"f-12 text-c mt-5"},"留言信息",-1))),C={class:"f-20 text-c"},O=w((()=>p("sub",{class:"pos-r t-0 f-12"},"条",-1))),M=w((()=>p("div",{class:"tj-img"},[p("img",{src:j})],-1))),N=w((()=>p("p",{class:"f-12 text-c mt-5"},"七日更新",-1))),W={class:"f-20 text-c"},B=w((()=>p("sub",{class:"pos-r t-0 f-12"},"条",-1))),J={class:"row"},T={class:"bg-fff pd-20 radius-6 mb-20 row chart"},$=w((()=>p("div",{class:"bg-fff pd-20 radius-6 mb-20"},[p("div",{class:"mb-12 f-16 c-1d2129 bold"},"系统特色"),p("p",{class:"f-13 mb-6 c-4e5969"}," 禅悦CMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。 "),p("p",{class:"f-13 mb-6 c-4e5969"},"轻量、灵活、稳定、高性能。"),p("p",{class:"f-13 mb-6 c-4e5969"},[p("strong",null,"SEO。"),d("专注于seo,伪静态html和拼音导航，灵活设置关键词和描述。 ")]),p("p",{class:"f-13 mb-6 c-4e5969"},[p("strong",null,"安全。"),d("基于knex,高防sql注入，接口权限校验，为安全提供保障。 ")]),p("p",{class:"f-13 mb-6 c-4e5969"},[p("strong",null,"灵活"),d("。碎片功能，支持零碎文案配置，方便各类灵活文案配置。 ")]),p("p",{class:"f-13 mb-6 c-4e5969"},[p("strong",null,"高扩展。"),d("支持扩展模型，字段配置，可动态生成表，超强扩展。 ")]),p("p",{class:"f-13 mb-6 c-4e5969"},[p("strong",null,"模块化。"),d("一切模块相互独立，互不干扰。 ")]),p("p",{class:"f-13 c-4e5969"},[p("strong",null,"插件化。"),d("灵活开发，支持完整功能模块。 ")])],-1))),H={class:"bg-fff pd-20 radius-6 mb-20"},I=w((()=>p("div",{class:"mb-12 f-16 c-1d2129 bold"},"技术架构",-1))),Q=w((()=>p("p",{class:"f-13 mb-6 c-4e5969"},[p("span",{class:"c-333"},"服务架构："),d("nodejs express mysql ")],-1))),V=w((()=>p("p",{class:"f-13 mb-6"},[p("span",null,"前端架构："),d("vite vue3 element-plus")],-1))),G={class:"f-13 mb-6"},K=w((()=>p("span",null,"程序路径：",-1))),P={class:"f-13 mb-6"},X=w((()=>p("span",null,"程序版本：",-1))),Y={class:"f-13 mb-6"},Z=w((()=>p("span",null,"发布时间：",-1))),ss={class:"f-13 mb-6"},as=w((()=>p("span",null,"技术开发：",-1))),ts=w((()=>p("p",{class:"f-13 mb-6 row"},[p("span",null,"联系微信："),d("yanyutao2014")],-1))),es=w((()=>p("p",{class:"f-13 mb-6 row"},[p("span",null,"联系邮箱："),d("867528315@qq.com")],-1))),ls=w((()=>p("div",{class:"bg-fff pd-20 radius-6 mb-20"},[p("div",{class:"mb-12 f-16 c-1d2129 bold"},"技术服务"),p("p",{class:"f-13 mb-6 c-4e5969 row justify-around"},[p("span",{class:"c-1d2129 col-12 mb-10"},"前端开发"),p("span",{class:"c-1d2129 col-12 mb-10"},"企业建站"),p("span",{class:"c-1d2129 col-12 mb-10"},"小程序开发"),p("span",{class:"c-1d2129 col-12 mb-10"},"技术顾问"),p("span",{class:"c-1d2129 col-12"},"互动玩法2d"),p("span",{class:"c-1d2129 col-12"},"技术交流")])],-1)));const cs=l(x,[["render",function(t,e,l,c,f,g){const v=o("qiun-vue-ucharts"),b=s,h=a;return i(),r(h,{gutter:20},{default:m((()=>[n(b,{xs:24,sm:18,md:18,lg:18,xl:18},{default:m((()=>[p("div",y,[p("div",F,[D,q,p("p",S,[d(u(t.data.article)+" ",1),_])]),p("div",L,[k,E,p("p",R,[d(u(t.data.tag)+" ",1),U])]),p("div",null,[z,A,p("p",C,[d(u(t.data.message)+" ",1),O])]),p("div",null,[M,N,p("p",W,[d(u(t.data.week)+" ",1),B])])]),p("div",J,[n(h,{gutter:20},{default:m((()=>[n(b,{xs:24,sm:12,md:12,lg:12,xl:12},{default:m((()=>[p("div",T,[n(v,{type:"ring",opts:t.opts,chartData:t.chartData},null,8,["opts","chartData"])])])),_:1}),n(b,{xs:24,sm:12,md:12,lg:12,xl:12},{default:m((()=>[$])),_:1})])),_:1})])])),_:1}),n(b,{xs:24,sm:6,md:6,lg:6,xl:6},{default:m((()=>[p("div",H,[I,Q,V,p("p",G,[K,d(u(t.dirname),1)]),p("p",P,[X,d(u(t.data.version),1)]),p("p",Y,[Z,d(u(t.data.versionTime),1)]),p("p",ss,[as,d(u(t.data.author),1)]),ts,es]),ls])),_:1})])),_:1})}],["__scopeId","data-v-16f54a58"]]);export{cs as default};
