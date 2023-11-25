System.register(["./element-plus-legacy.js","./article-legacy.js","./site-legacy2.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./vue-demi-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(a,s){"use strict";var l,e,c,t,n,i,r,d,o,u,m,g,p,f,v,h;return{setters:[a=>{l=a.s,e=a.t},a=>{c=a.t},a=>{t=a.r},a=>{n=a._,i=a.q},a=>{r=a.j,d=a.o,o=a.k,u=a.a1,m=a.l,g=a.a,p=a.a3,f=a.t,v=a.p,h=a.i},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var b=document.createElement("style");b.textContent=".radius-6[data-v-f12811ca]{border-radius:6px}.c-9ca4bf[data-v-f12811ca]{color:#9ca4bf}.chanyue-title[data-v-f12811ca],.chanyue-author[data-v-f12811ca],.chanyue-txt[data-v-f12811ca]{font-family:chanyue}.tj-img[data-v-f12811ca]{width:54px;height:54px;background-color:#f2f3f5;border-radius:50%}.chart[data-v-f12811ca]{max-width:calc(50vw - 45px);height:330px}@media only screen and (max-width: 992px){.chart[data-v-f12811ca]{max-width:calc(100vw - 45px);height:320px}}\n",document.head.appendChild(b);const y=""+new URL("../svg/ico-article.svg",s.meta.url).href,j=""+new URL("../svg/ico-will.svg",s.meta.url).href,x=""+new URL("../svg/ico-message.svg",s.meta.url).href,w=""+new URL("../svg/ico-up.svg",s.meta.url).href,F={name:"home-info",components:{qiunVueUcharts:i},data:()=>({data:{week:0,message:0,tag:0,article:0,version:"v.1.6.0",appName:"禅悦cms",port:"",versionTime:"",author:""},dirname:"",loading:!0,chartData:{},opts:{rotate:!1,rotateLock:!1,color:["#FADC19","#9FDB1D","#00B42A","#3491FA","#165DFF","#722ED1"],padding:[5,5,5,5],dataLabel:!0,enableScroll:!1,legend:{show:!0,position:"right",lineHeight:25},title:{name:"禅悦cms",fontSize:15,color:"#666666"},subtitle:{name:"架构",fontSize:25,color:"#7cb5ec"},extra:{ring:{ringWidth:60,activeOpacity:.5,activeRadius:10,offsetAngle:0,labelWidth:15,border:!0,borderWidth:3,borderColor:"#FFFFFF"}}}}),computed:{},created(){},mounted(){this.tongji(),this.runEnv(),this.chart()},methods:{async tongji(){try{let a=await c();200===a.code?(this.data=a.data,this.loading=!1):this.$message({message:a.msg,type:"success"})}catch(a){console.log(a)}},async runEnv(){try{let a=await t();const{code:s,data:l}=a;200===s?this.dirname=l.dirname:this.$message({message:a.msg,type:"success"})}catch(a){console.log(a)}},chart(){this.chartData=JSON.parse(JSON.stringify({series:[{data:[{name:"nodejs",value:40},{name:"mysql",value:10},{name:"vue3",value:40},{name:"javascript",value:90},{name:"css3",value:10},{name:"html5",value:10}]}]}))}}},D=a=>(v("data-v-f12811ca"),a=a(),h(),a),S={class:"bg-fff pd-20 radius-6 row justify-around mb-20"},q={class:"row flex-col align-c"},_=D((()=>g("div",{class:"tj-img"},[g("img",{src:y})],-1))),k=D((()=>g("p",{class:"f-12 text-c mt-5"},"文章内容",-1))),L={class:"f-20 text-c"},C=D((()=>g("sub",{class:"pos-r t-0 f-12"},"篇",-1))),E={class:"row flex-col align-c"},R=D((()=>g("div",{class:"tj-img"},[g("img",{src:j})],-1))),U=D((()=>g("p",{class:"f-12 text-c mt-5"},"文章标签",-1))),z={class:"f-20 text-c"},A=D((()=>g("sub",{class:"pos-r t-0 f-12"},"个",-1))),O=D((()=>g("div",{class:"tj-img"},[g("img",{src:x})],-1))),M=D((()=>g("p",{class:"f-12 text-c mt-5"},"留言信息",-1))),N={class:"f-20 text-c"},W=D((()=>g("sub",{class:"pos-r t-0 f-12"},"条",-1))),B=D((()=>g("div",{class:"tj-img"},[g("img",{src:w})],-1))),J=D((()=>g("p",{class:"f-12 text-c mt-5"},"七日更新",-1))),T={class:"f-20 text-c"},$=D((()=>g("sub",{class:"pos-r t-0 f-12"},"条",-1))),H={class:"row"},I={class:"bg-fff pd-20 radius-6 mb-20 row chart"},Q=D((()=>g("div",{class:"bg-fff pd-20 radius-6 mb-20"},[g("div",{class:"mb-12 f-16 c-1d2129 bold"},"系统特色"),g("p",{class:"f-13 mb-6 c-4e5969"}," 禅悦CMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。 "),g("p",{class:"f-13 mb-6 c-4e5969"},"轻量、灵活、稳定、高性能。"),g("p",{class:"f-13 mb-6 c-4e5969"},[g("strong",null,"SEO。"),p("专注于seo,伪静态html和拼音导航，灵活设置关键词和描述。 ")]),g("p",{class:"f-13 mb-6 c-4e5969"},[g("strong",null,"安全。"),p("基于knex,高防sql注入，接口权限校验，为安全提供保障。 ")]),g("p",{class:"f-13 mb-6 c-4e5969"},[g("strong",null,"灵活"),p("。碎片功能，支持零碎文案配置，方便各类灵活文案配置。 ")]),g("p",{class:"f-13 mb-6 c-4e5969"},[g("strong",null,"高扩展。"),p("支持扩展模型，字段配置，可动态生成表，超强扩展。 ")]),g("p",{class:"f-13 mb-6 c-4e5969"},[g("strong",null,"模块化。"),p("一切模块相互独立，互不干扰。 ")]),g("p",{class:"f-13 c-4e5969"},[g("strong",null,"插件化。"),p("灵活开发，支持完整功能模块。 ")])],-1))),V={class:"bg-fff pd-20 radius-6 mb-20"},G=D((()=>g("div",{class:"mb-12 f-16 c-1d2129 bold"},"技术架构",-1))),K=D((()=>g("p",{class:"f-13 mb-6 c-4e5969"},[g("span",{class:"c-333"},"服务架构："),p("nodejs express mysql ")],-1))),P=D((()=>g("p",{class:"f-13 mb-6"},[g("span",null,"前端架构："),p("vite vue3 element-plus")],-1))),X={class:"f-13 mb-6"},Y=D((()=>g("span",null,"程序路径：",-1))),Z={class:"f-13 mb-6"},aa=D((()=>g("span",null,"程序版本：",-1))),sa={class:"f-13 mb-6"},la=D((()=>g("span",null,"发布时间：",-1))),ea={class:"f-13 mb-6"},ca=D((()=>g("span",null,"技术开发：",-1))),ta=D((()=>g("p",{class:"f-13 mb-6 row"},[g("span",null,"联系微信："),p("yanyutao2014")],-1))),na=D((()=>g("p",{class:"f-13 mb-6 row"},[g("span",null,"联系邮箱："),p("867528315@qq.com")],-1))),ia=D((()=>g("div",{class:"bg-fff pd-20 radius-6 mb-20"},[g("div",{class:"mb-12 f-16 c-1d2129 bold"},"技术服务"),g("p",{class:"f-13 mb-6 c-4e5969 row justify-around"},[g("span",{class:"c-1d2129 col-12 mb-10"},"前端开发"),g("span",{class:"c-1d2129 col-12 mb-10"},"企业建站"),g("span",{class:"c-1d2129 col-12 mb-10"},"小程序开发"),g("span",{class:"c-1d2129 col-12 mb-10"},"技术顾问"),g("span",{class:"c-1d2129 col-12"},"互动玩法2d"),g("span",{class:"c-1d2129 col-12"},"技术交流")])],-1)));a("default",n(F,[["render",function(a,s,c,t,n,i){const v=r("qiun-vue-ucharts"),h=l,b=e;return d(),o(b,{gutter:20},{default:u((()=>[m(h,{xs:24,sm:18,md:18,lg:18,xl:18},{default:u((()=>[g("div",S,[g("div",q,[_,k,g("p",L,[p(f(a.data.article)+" ",1),C])]),g("div",E,[R,U,g("p",z,[p(f(a.data.tag)+" ",1),A])]),g("div",null,[O,M,g("p",N,[p(f(a.data.message)+" ",1),W])]),g("div",null,[B,J,g("p",T,[p(f(a.data.week)+" ",1),$])])]),g("div",H,[m(b,{gutter:20},{default:u((()=>[m(h,{xs:24,sm:12,md:12,lg:12,xl:12},{default:u((()=>[g("div",I,[m(v,{type:"ring",opts:a.opts,chartData:a.chartData},null,8,["opts","chartData"])])])),_:1}),m(h,{xs:24,sm:12,md:12,lg:12,xl:12},{default:u((()=>[Q])),_:1})])),_:1})])])),_:1}),m(h,{xs:24,sm:6,md:6,lg:6,xl:6},{default:u((()=>[g("div",V,[G,K,P,g("p",X,[Y,p(f(a.dirname),1)]),g("p",Z,[aa,p(f(a.data.version),1)]),g("p",sa,[la,p(f(a.data.versionTime),1)]),g("p",ea,[ca,p(f(a.data.author),1)]),ta,na]),ia])),_:1})])),_:1})}],["__scopeId","data-v-f12811ca"]]))}}}));
