System.register(["./@vue-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./element-plus-legacy.js","./dayjs-legacy.js","./@qiun-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./@element-plus-legacy.js","./saduocss-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js"],(function(e,t){"use strict";var a,i,o,r,n,d,l,s,c,u,p,m,v,h,g,f,w,x,y,b,k,j,S,_,C,A,I,P,E,B,L,z,M,$,F,O,T,U,D,H,N,V,q,R,G,W,J,K,Q,X,Y,Z;return{setters:[e=>{a=e.j,i=e.o,o=e.k,r=e.a1,n=e.u,d=e.l,l=e.c,s=e.a,c=e.U,u=e.m,p=e.v,m=e.ad,v=e.F,h=e.a2,g=e.h,f=e.t,w=e.a3,x=e.x,y=e.w,b=e.a4,k=e.a6,j=e.n,S=e.p,_=e.i,C=e.aw},e=>{A=e.d,I=e.c},e=>{P=e.i},e=>{E=e.E,B=e.z,L=e.a,z=e.b,M=e.c,$=e.d,F=e.e,O=e.f,T=e.g,U=e.h,D=e.i,H=e.j,N=e.k,V=e.l,q=e.m,R=e.n},null,e=>{G=e._},e=>{W=e.u,J=e.a,K=e.c,Q=e.b},e=>{X=e.a},e=>{Y=e.a},e=>{Z=e.F},null,null,null,null,null,null,null,null,null],execute:function(){var ee=document.createElement("style");ee.textContent="nav a.router-link-exact-active[data-v-ee806c20]{color:var(--color-text)}nav a.router-link-exact-active[data-v-ee806c20]:hover{background-color:transparent}nav a[data-v-ee806c20]{display:inline-block;padding:0 1rem;border-left:1px solid var(--color-border)}nav a[data-v-ee806c20]:first-of-type{border:0}.icon[data-v-9e64fcd9]{width:30px;height:30px;border-radius:50%}.logo[data-v-9e64fcd9]{padding:9px;font-size:20px;font-weight:100;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:width .3s linear;display:flex;justify-content:center;align-items:center;box-shadow:0 1px 10px rgba(0,0,0,.06);margin-bottom:10px}.ico-nav[data-v-c38ddda6]{width:40px;height:40px;border-radius:15px;box-shadow:inset 0 0 5px #f2f2f2;padding:4px;display:inline-block;margin-right:5px}.ico-nav img[data-v-c38ddda6]{width:100%}.el-sub-menu .el-menu-item[data-v-c38ddda6]{margin-left:10px}.el-sub-menu.is-active[data-v-c38ddda6] .el-icon,.el-sub-menu.is-active[data-v-c38ddda6] .el-sub-menu__title,.el-sub-menu.is-active[data-v-c38ddda6] .el-sub-menu__icon-arrow,[data-v-c38ddda6] .is-active{color:#165dff}.el-menu-vertical-demo[data-v-9687d3bd]:not(.el-menu--collapse){width:200px;min-height:400px}.el-menu[data-v-9687d3bd]{border-right:0px}[data-v-1768f88d] .el-badge__content.is-fixed.is-dot{top:5px;right:10px}.navbar-cont[data-v-1768f88d]{padding:8px 20px;display:flex;justify-content:end;gap:10px}.breadcrumb-leave-active[data-v-676e3626]{position:absolute}.breadcrumb[data-v-676e3626]{display:inline-block;font-size:14px;line-height:50px;margin-left:8px}.breadcrumb .no-redirect[data-v-676e3626]{cursor:text}.breadcrumb .redirect[data-v-676e3626]{font-weight:bolder}.app-wrapper[data-v-495a5ee7]{display:flex;width:100%;height:100%}.app-wrapper .sidebar[data-v-495a5ee7]{height:100vh;border-right:1px solid #f9f5f5;transition:all .5s}.app-wrapper .sidebar-container[data-v-495a5ee7]{height:100%;background-color:var(--vt-c-white);width:200px!important}.app-wrapper .sidebar-container-menu[data-v-495a5ee7]:not(.el-menu--collapse){width:200px}.app-wrapper .sidebar-container .el-menu[data-v-495a5ee7]{border:none}.app-wrapper .main-container[data-v-495a5ee7]{flex:1;display:flex;flex-direction:column;height:100vh;overflow:hidden}.app-wrapper .main-container .header .navbar[data-v-495a5ee7]{background-color:var(--vt-c-white);border-bottom:1px solid var(--color-border)}.app-wrapper .main-container .header .navbar .ico-collapse[data-v-495a5ee7]{width:42px;height:42px;cursor:pointer;font-size:16px;color:#1890ff}.app-wrapper .main-container .header .tags-view[data-v-495a5ee7]{height:34px;background:#12efff}.app-wrapper .main-container .app-main[data-v-495a5ee7]{height:calc(100vh - 51px);padding:20px 20px 10px;background-color:#f2f3f5;overflow:auto}.app-wrapper .main-container .app-main .container[data-v-495a5ee7]{border-radius:6px;min-height:calc(100vh - 120px)}[data-v-495a5ee7] .el-drawer{width:200px!important}[data-v-495a5ee7] .el-drawer__body{padding:0}@media only screen and (max-width: 992px){.sidebar[data-v-495a5ee7]{display:none}}:root{--vt-c-white: #ffffff;--vt-c-white-soft: #f8f8f8;--vt-c-white-mute: #f2f2f2;--vt-c-black: #181818;--vt-c-black-soft: #222222;--vt-c-black-mute: #282828;--vt-c-indigo: #2c3e50;--vt-c-divider-light-1: rgba(60, 60, 60, .29);--vt-c-divider-light-2: rgba(60, 60, 60, .12);--vt-c-divider-dark-1: rgba(84, 84, 84, .65);--vt-c-divider-dark-2: rgba(84, 84, 84, .48);--vt-c-text-light-1: var(--vt-c-indigo);--vt-c-text-light-2: rgba(60, 60, 60, .66);--vt-c-text-dark-1: var(--vt-c-white);--vt-c-text-dark-2: rgba(235, 235, 235, .64);--blue:#324157;--light-blue:#3A71A8;--red:#C03639;--pink: #E65D6E;--green: #30B08F;--tiffany: #4AB7BD;--yellow:#FEC171;--panGreen: #30B08F;--menuText:#bfcbd9;--menuActiveText:#409EFF;--subMenuActiveText:#f4f4f5;--menuBg:#304156;--menuHover:#263445;--subMenuBg:#1f2d3d;--subMenuHover:#001528;--sideBarWidth: 210px}:root{--color-background: var(--vt-c-white);--color-background-soft: var(--vt-c-white-soft);--color-background-mute: var(--vt-c-white-mute);--color-border: var(--vt-c-divider-light-2);--color-border-hover: var(--vt-c-divider-light-1);--color-heading: var(--vt-c-text-light-1);--color-text: var(--vt-c-text-light-1)}@media (prefers-color-scheme: dark){:root{--color-background: var(--vt-c-black);--color-background-soft: var(--vt-c-black-soft);--color-background-mute: var(--vt-c-black-mute);--color-border: var(--vt-c-divider-dark-2);--color-border-hover: var(--vt-c-divider-dark-1);--color-heading: var(--vt-c-text-dark-1);--color-text: var(--vt-c-text-dark-2)}}@font-face{font-family:chanyue;src:url("+new URL("../../admin/font/chanyue.ttf",t.meta.url).href+");font-weight:400;font-style:normal}body{min-height:100vh;color:var(--color-text);background:var(--color-background);transition:color .5s,background-color .5s;line-height:1.6;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.c-fff{color:var(--vt-c-white)}.c-a1a3aa{color:#a1a3aa}.c-165dff{color:#165dff}.c-1d2129{color:#1d2129}.c-4e5969{color:#4e5969}.search{background-color:#f7f7f7;border:1px solid #f7f2f2;border-radius:5px}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:100px;height:100px;text-align:center}.avatar-uploader .el-upload{border:1px dashed #dcdfe6;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;transition:.2s}.el-button--primary{background:center center #4A54FF;background-image:linear-gradient(315deg,#6772FF 0,#00F9E5 100%);background-size:104% 104%;color:#fff;border:none}.avatar-uploader{width:32px;height:32px}.avatar-uploader-icon{width:31px;height:31px}.tox-tinymce,.el-cascader,.el-select,.el-input,.el-select-v2{width:100%!important}.w-80{width:80px!important}.content-wrap{min-height:calc(100vh - 120px);border-radius:6px;background-color:#fff;padding:20px}\n",document.head.appendChild(ee);const te=G({__name:"App",setup(e){const t=B;return(e,l)=>{const s=a("router-view");return i(),o(n(E),{size:"","z-index":3e3,locale:n(t)},{default:r((()=>[d(s)])),_:1},8,["locale"])}}},[["__scopeId","data-v-ee806c20"]]),ae=function(e,t,a){return e()},ie={},oe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 107.02 100"},re=[s("path",{d:"M14.64 26.68A26.67 26.67 0 0 1 53.52 3a26.69 26.69 0 0 1 38.91 23.68h-9.07A17.62 17.62 0 0 0 65.75 9.07 17.79 17.79 0 0 0 48.52 23a12.07 12.07 0 0 0-.27 2.55 7.78 7.78 0 0 0 1 4.21A4.23 4.23 0 0 0 52 31.57a7.36 7.36 0 0 0 1.5.14 7.06 7.06 0 0 0 1.64-.17 4.1 4.1 0 0 0 2.62-1.81 7.91 7.91 0 0 0 1-4.19 12.67 12.67 0 0 0-.34-2.88 17.43 17.43 0 0 0-3.32-6.9 13.91 13.91 0 0 1 7.9-4.63 26.41 26.41 0 0 1 4.31 9.52 21.34 21.34 0 0 1 .58 4.9 16.85 16.85 0 0 1-2.43 9 12.94 12.94 0 0 1-8.25 5.81 16 16 0 0 1-3.66.42 16.81 16.81 0 0 1-3.37-.35 13 13 0 0 1-8.44-5.75 16.72 16.72 0 0 1-2.54-9.13 21.29 21.29 0 0 1 .48-4.43 26.61 26.61 0 0 1 5.66-11.6 18.25 18.25 0 0 0-4-.45 17.6 17.6 0 0 0-17.6 17.61z",fill:"#16ea9e"},null,-1),s("path",{d:"M94 29.38a26.68 26.68 0 0 1 .53 45.55 26.68 26.68 0 0 1-40.3 21.32l4.63-7.79A17.61 17.61 0 0 0 83 82.31a17.79 17.79 0 0 0-3.17-21.93 13.33 13.33 0 0 0-2-1.53 7.78 7.78 0 0 0-4.17-1.24 4.14 4.14 0 0 0-3 1.39 7.15 7.15 0 0 0-.89 1.22 7.8 7.8 0 0 0-.7 1.49 4.08 4.08 0 0 0 .23 3.17 7.85 7.85 0 0 0 3.08 3A12.63 12.63 0 0 0 75 69.12a17.51 17.51 0 0 0 7.62.66 14.07 14.07 0 0 1 0 9.1 26.49 26.49 0 0 1-10.38-1.15 22 22 0 0 1-4.52-2 16.93 16.93 0 0 1-6.5-6.7A13 13 0 0 1 60.46 59 16.15 16.15 0 0 1 62 55.61a15.87 15.87 0 0 1 2-2.72 13.05 13.05 0 0 1 9.24-4.32 16.71 16.71 0 0 1 9.16 2.49 21.48 21.48 0 0 1 3.6 2.67 26.68 26.68 0 0 1 7 10.79 17.61 17.61 0 0 0-3.71-27.34z",fill:"#1a85f8"},null,-1),s("path",{d:"M51.12 96.19A26.66 26.66 0 0 1 11.7 73.38a26.69 26.69 0 0 1 2.23-45.51l4.33 8a17.59 17.59 0 0 0-7 23.88 17.78 17.78 0 0 0 20.43 8.45 12.54 12.54 0 0 0 2.36-1 7.74 7.74 0 0 0 3.2-2.94 4.16 4.16 0 0 0 .28-3.26A8.22 8.22 0 0 0 36 58.26a4.13 4.13 0 0 0-2.84-1.42 7.91 7.91 0 0 0-4.16 1.1 12.71 12.71 0 0 0-2.37 1.68 17.49 17.49 0 0 0-4.47 6.21 14 14 0 0 1-7.82-4.66 26.58 26.58 0 0 1 6.29-8.34 21.41 21.41 0 0 1 4-2.85 16.85 16.85 0 0 1 9.08-2.17 12.94 12.94 0 0 1 9 4.46 16.24 16.24 0 0 1 3.42 6.15 13 13 0 0 1-1 10.16 16.73 16.73 0 0 1-6.81 6.6 20.85 20.85 0 0 1-4.11 1.69 26.68 26.68 0 0 1-12.9.58 18.05 18.05 0 0 0 1.52 3.73 17.61 17.61 0 0 0 23.88 7z",fill:"#f8cd0f"},null,-1)],ne=e("_",G(ie,[["render",function(e,t){return i(),l("svg",oe,re)}]])),de=c({components:{IconLogo:ne},props:{isCollapse:{type:Boolean,default:!1}},watch:{isCollapse(e,t){this.flag=e}},data:()=>({flag:!1}),created(){},methods:{}}),le={class:"logo"},se={class:"f-20"},ce=G(de,[["render",function(e,t,a,o,r,n){const c=ne;return i(),l("h1",le,[d(c,{class:"icon mr-10"}),u(s("span",se,"禅悦cms",512),[[p,!e.flag]])])}],["__scopeId","data-v-9e64fcd9"]]),ue=G({name:"SidebarItem",props:{data:{type:Array,default:()=>[]}},data:()=>({}),created(){},methods:{goto(e){if(e?.children?.length>0)return!1;this.$router.push({path:e.path,query:e.query})}}},[["render",function(e,t,n,c,u,p){const x=L,y=a("SidebarItem"),b=z,k=M;return i(!0),l(v,null,m(n.data,((e,t)=>(i(),l(v,{key:e.path},[e?.children?.length>0&&e.meta.isShow?(i(),o(b,{key:0,index:e.path},{title:r((()=>[e?.meta?.icon?(i(),o(x,{key:0},{default:r((()=>[(i(),o(h(e.meta.icon)))])),_:2},1024)):g("",!0),s("span",null,f(e?.meta?.title),1)])),default:r((()=>[d(y,{data:e.children},null,8,["data"])])),_:2},1032,["index"])):e.meta.isShow?(i(),o(k,{key:1,index:e.path},{title:r((()=>[w(f(e?.meta?.title),1)])),default:r((()=>[e?.meta?.icon?(i(),o(x,{key:0},{default:r((()=>[(i(),o(h(e.meta.icon)))])),_:2},1024)):g("",!0)])),_:2},1032,["index"])):g("",!0)],64)))),128)}],["__scopeId","data-v-c38ddda6"]]),pe=e("s",((e="token",t)=>{Y.set(e,t)})),me=e("g",((e="token")=>Y.get(e)));let ve=e("a",(e=>{for(let t of e)t.label=t.name,t.value=t.id,t.children&&ve(t.children);return e})),he=e("t",((e,t=0,a=1)=>{let i=[];return e.forEach(((o,r)=>{o.pid==t&&(o.leval=a,o.children=he(e,o.id,a+1),i.push(o))})),i}));e("c",((e,t)=>{const a=[];let i=(e,t)=>{for(let o,r=0;r<t.length;r++)o=t[r],o.id==e&&(a.unshift(o.id),0!=o.pid&&i(o.pid,t))};return i(e,t),a})),e("b",(e=>{let t=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,a=e.match(/<img.*?(?:>|\/>)/gi),i=[];if(a)for(let o=0;o<a.length;o++){let e=a[o].match(t);e[1]&&i.push(e[1])}return i})),e("f",(e=>{let t=e.indexOf("</p>");-1!==t&&(e=e.substring(0,t+4));let a=document.createElement("div");a.innerHTML=e;let i=a.textContent;if(i.length>225){let e=i.lastIndexOf("。",255);-1!==e&&(i=i.slice(0,e+1))}return a.remove(),i})),X.defaults.headers.post["Content-Type"]="application/json; charset=utf-8",X.defaults.crossDomain=!0,X.defaults.withCredentials=!0,X.defaults.timeout=1e4;let ge=e("h",X.create({baseURL:""}));ge.interceptors.request.use((e=>{const{token:t}=je();return t&&(e.headers.auth=t),e}),(e=>{console.log(e),Promise.reject(e||"网络异常")})),ge.interceptors.response.use((e=>{const{code:t,data:a,message:i}=e;return 501===a.code&&(console.log("data->",a),"TokenExpiredError"==a.msg.name?$({message:"登录失效，请重新登录",type:"warning"}):$.success(a.msg),je().logout(),location.reload()),Promise.resolve(a)}),(e=>{console.warn(e);const{response:t}=e;return t&&t.status,Promise.reject(e)})),ge.jsonp=function({url:e,data:t={}}){let a=+new Date;const i=t.callback?t.callback:`light_${a}`;t.callback=i;const o=document.createElement("script");return o.setAttribute("src",e+"?"+function(e={}){const t=Object.keys(e),a=Object.values(e);return t.map(((e,t)=>e+"="+a[t])).join("&")}(t)),document.body.appendChild(o),new Promise(((e,t)=>{window[i]=t=>{e(t),o&&document.body.removeChild(o),delete window[i]},o.onerror=function(e){t(e)}}))};let fe={pre:{BASE_API:{}.VITE_APP_BASE_API||""},prd:{BASE_API:{}.VITE_APP_BASE_API||""}};console.log("api[env]",fe.pre);const we=e("A",fe.pre);class xe{static API=we.BASE_API;version(){return"v.1.0"}static get(e={}){return ge({url:`${xe.API}/api/get`,method:"GET",params:e})}static post(e={}){return ge({url:`${xe.API}/api/post`,method:"POST",data:e})}static put(e={}){return ge({url:`${xe.API}/api/put`,method:"PUT",data:e})}static patch(e={}){return ge({url:`${xe.API}/api/patch`,method:"PATCH",data:e})}static delete(){return ge({url:`${xe.API}/api/delete?id=1`,method:"Delete"})}static upload=e=>ge({url:`${xe.API}/api/delete?id=1`,method:"post",headers:{"Content-type":"multipart/form-data"},data:e})}class ye extends xe{constructor(e){super(e)}static toLogin(e){return ge({url:`${we.BASE_API}/api/sysUser/login`,method:"post",data:e})}static userInfo(e){return ge({url:`${we.BASE_API}/api/sysUser/detail?id=${e}`,method:"get"})}static menuList(){return new Promise(((e,t)=>{setTimeout((()=>{e({code:200,data:Ke})}),300)}))}}let be=e("d",(()=>ge({url:`${we.BASE_API}/api/sysMenu/find`,method:"get"})));e("e",(({id:e,content:t})=>ge({url:`${we.BASE_API}/api/sysMenu/update`,method:"post",data:{id:e,content:t}})));const ke=Object.assign({"/src/views/article/add.vue":()=>ae((()=>t.import("./add-legacy.js")),0,t.meta.url),"/src/views/article/edit.vue":()=>ae((()=>t.import("./edit-legacy.js")),0,t.meta.url),"/src/views/article/index.vue":()=>ae((()=>t.import("./index-legacy2.js")),0,t.meta.url),"/src/views/category/add.vue":()=>ae((()=>t.import("./add-legacy2.js")),0,t.meta.url),"/src/views/category/edit.vue":()=>ae((()=>t.import("./edit-legacy2.js")),0,t.meta.url),"/src/views/category/index.vue":()=>ae((()=>t.import("./index-legacy3.js")),0,t.meta.url),"/src/views/collect/add.vue":()=>ae((()=>t.import("./add-legacy3.js")),0,t.meta.url),"/src/views/collect/edit.vue":()=>ae((()=>t.import("./edit-legacy3.js")),0,t.meta.url),"/src/views/collect/index.vue":()=>ae((()=>t.import("./index-legacy4.js")),0,t.meta.url),"/src/views/dashboard/index.vue":()=>ae((()=>t.import("./index-legacy5.js")),0,t.meta.url),"/src/views/field/add.vue":()=>ae((()=>t.import("./add-legacy4.js")),0,t.meta.url),"/src/views/field/edit.vue":()=>ae((()=>t.import("./edit-legacy4.js")),0,t.meta.url),"/src/views/field/index.vue":()=>ae((()=>t.import("./index-legacy6.js")),0,t.meta.url),"/src/views/frag/add.vue":()=>ae((()=>t.import("./add-legacy5.js")),0,t.meta.url),"/src/views/frag/edit.vue":()=>ae((()=>t.import("./edit-legacy5.js")),0,t.meta.url),"/src/views/frag/index.vue":()=>ae((()=>t.import("./index-legacy7.js")),0,t.meta.url),"/src/views/friendlink/add.vue":()=>ae((()=>t.import("./add-legacy6.js")),0,t.meta.url),"/src/views/friendlink/edit.vue":()=>ae((()=>t.import("./edit-legacy6.js")),0,t.meta.url),"/src/views/friendlink/index.vue":()=>ae((()=>t.import("./index-legacy8.js")),0,t.meta.url),"/src/views/home/info.vue":()=>ae((()=>t.import("./info-legacy.js")),0,t.meta.url),"/src/views/home/site.vue":()=>ae((()=>t.import("./site-legacy.js")),0,t.meta.url),"/src/views/layout/index.vue":()=>ae((()=>t.import("./index-legacy9.js")),0,t.meta.url),"/src/views/login/index.vue":()=>ae((()=>t.import("./index-legacy10.js")),0,t.meta.url),"/src/views/loginlog/index.vue":()=>ae((()=>t.import("./index-legacy11.js")),0,t.meta.url),"/src/views/menu/index.vue":()=>ae((()=>t.import("./index-legacy12.js")),0,t.meta.url),"/src/views/message/add.vue":()=>ae((()=>t.import("./add-legacy7.js")),0,t.meta.url),"/src/views/message/edit.vue":()=>ae((()=>t.import("./edit-legacy7.js")),0,t.meta.url),"/src/views/message/index.vue":()=>ae((()=>t.import("./index-legacy13.js")),0,t.meta.url),"/src/views/model/add.vue":()=>ae((()=>t.import("./add-legacy8.js")),0,t.meta.url),"/src/views/model/edit.vue":()=>ae((()=>t.import("./edit-legacy8.js")),0,t.meta.url),"/src/views/model/index.vue":()=>ae((()=>t.import("./index-legacy14.js")),0,t.meta.url),"/src/views/role/add.vue":()=>ae((()=>t.import("./add-legacy9.js")),0,t.meta.url),"/src/views/role/edit.vue":()=>ae((()=>t.import("./edit-legacy9.js")),0,t.meta.url),"/src/views/role/index.vue":()=>ae((()=>t.import("./index-legacy15.js")),0,t.meta.url),"/src/views/slide/add.vue":()=>ae((()=>t.import("./add-legacy10.js")),0,t.meta.url),"/src/views/slide/edit.vue":()=>ae((()=>t.import("./edit-legacy10.js")),0,t.meta.url),"/src/views/slide/index.vue":()=>ae((()=>t.import("./index-legacy16.js")),0,t.meta.url),"/src/views/tag/add.vue":()=>ae((()=>t.import("./add-legacy11.js")),0,t.meta.url),"/src/views/tag/edit.vue":()=>ae((()=>t.import("./edit-legacy11.js")),0,t.meta.url),"/src/views/tag/index.vue":()=>ae((()=>t.import("./index-legacy17.js")),0,t.meta.url),"/src/views/user/add.vue":()=>ae((()=>t.import("./add-legacy12.js")),0,t.meta.url),"/src/views/user/edit.vue":()=>ae((()=>t.import("./edit-legacy12.js")),0,t.meta.url),"/src/views/user/index.vue":()=>ae((()=>t.import("./index-legacy18.js")),0,t.meta.url)}),je=e("u",A("user",{state:()=>({token:me("token")||"",userInfo:null,menuList:[]}),actions:{async login(e){try{const t=await ye.toLogin(e);return 200==t.code&&(this.token=t.data.token,pe("token",t.data.token),pe("uid",t.data.id)),t}catch(t){console.log(t)}},async getUserInfo(){try{let e=me("uid");const t=await ye.userInfo(e);if(console.log("getUserInfo",t),200==t.code&&t.data){let e=t.data.value;return this.userInfo={role:e,...t.data},e}}catch(e){console.log(e)}},async getMenuList(){try{let e=await be();if(200==e.code){let t=e.data.content,a=_e(JSON.parse(t).route);this.menuList=a}}catch(e){console.log(e)}},logout(){this.userInfo=null,this.token="",localStorage.removeItem("token")},getAccessRoutes(e){const t=Se(this.menuList,e);return this.menuList=t,t}},persist:{enabled:!0,strategies:[{key:"user",paths:["token"]}]}}));function Se(e,t){const a=[];return e.forEach((e=>{const i={...e};i?.children?.length>0&&(i.children=Se(i.children,t)),function(e,t){return!e?.meta?.role||e.meta.role.includes(t)}(i,t)&&a.push(i)})),a}function _e(e){let t=[];return e.forEach((e=>{e.component&&(e.component=e.component.replace("@/","/src/"),e.component=ke[`${e.component}`]),t.push(e),e.children&&_e(e.children)})),t}const Ce=c({props:{isCollapse:Boolean},components:{SidebarItem:ue},data:()=>({activeIndex:"",menuList:[]}),watch:{$route(e,t){this.activeIndex="/"+e.path.split("/")[1]||e.path}},created(){const e=W(),{menuList:t}=je();this.menuList=t,this.activeIndex="/"+e.path.split("/")[1]||e.path},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)}}}),Ae=G(Ce,[["render",function(e,t,n,l,s,c){const u=a("SidebarItem"),p=F;return i(),o(p,{"active-text-color":"","background-color":"",class:"el-menu-vertical-demo","text-color":"","default-active":e.activeIndex,router:!0,"unique-opened":!0,"collapse-transition":!0,collapse:e.isCollapse,"popper-effect":"light",onOpen:e.handleOpen,onClose:e.handleClose},{default:r((()=>[d(u,{data:e.menuList},null,8,["data"])])),_:1},8,["default-active","collapse","onOpen","onClose"])}],["__scopeId","data-v-9687d3bd"]]),Ie={},Pe={viewBox:"0 0 48 48",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:"arco-icon arco-icon-launch","stroke-width":"4","stroke-linecap":"butt","stroke-linejoin":"arcs",filter:"","data-v-249840b0":"",style:{"font-size":"32px"}},Ee=[s("path",{d:"M41 26v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h14M19.822 28.178 39.899 8.1M41 20V7H28"},null,-1)],Be=G(Ie,[["render",function(e,t){return i(),l("svg",Pe,Ee)}]]),Le={justify:"end",class:"navbar-cont",gutter:20},ze={href:"/",target:"_blank"},Me=c({name:"NavBar"}),$e=G(Object.assign(Me,{setup(e){const t=je(),a=t.userInfo.username,o=()=>{t.logout(),location.reload()};return(e,t)=>{const c=O,u=T,p=U,m=D,v=H;return i(),l("div",Le,[d(u,{class:"mr-10",effect:"dark",content:"站点",placement:"top-start"},{default:r((()=>[s("a",ze,[d(c,{icon:Be,circle:""})])])),_:1}),d(u,{class:"mr-10",effect:"dark",content:n(a),placement:"top-start"},{default:r((()=>[d(v,{trigger:"click"},{dropdown:r((()=>[d(m,null,{default:r((()=>[d(p,{onClick:o},{default:r((()=>[w("退出登录")])),_:1})])),_:1})])),default:r((()=>[d(c,{icon:"Avatar",circle:""})])),_:1})])),_:1},8,["content"])])}}}),[["__scopeId","data-v-1768f88d"]]),Fe={key:0,class:"no-redirect"},Oe=["onClick"],Te=c({name:"BreadCrumb"}),Ue=Object.assign(Te,{setup(e){const t=W(),a=x([]);y(t,(()=>{a.value=t.matched.filter((e=>e.meta&&e.meta.title))}),{immediate:!0});const n=J();return(e,t)=>{const s=N,c=V;return i(),o(c,{class:"breadcrumb",separator:"/"},{default:r((()=>[d(b,{name:"breadcrumb"},{default:r((()=>[(i(!0),l(v,null,m(a.value,((e,t)=>(i(),o(s,{key:e.path},{default:r((()=>[t===a.value.length-1?(i(),l("span",Fe,f(e.meta.title),1)):(i(),l("a",{key:1,class:"redirect",onClick:k((t=>(e=>{console.log(e),n.push(e.path)})(e)),["prevent"])},f(e.meta.title),9,Oe))])),_:2},1024)))),128))])),_:1})])),_:1})}}}),De=c({components:{SideBar:Ae,NavBar:$e,BreadCrumb:G(Ue,[["__scopeId","data-v-676e3626"]]),Logo:ce},data:()=>({isCollapse:!1,drawer:!1}),watch:{$route(e,t){this.activeIndex=e.path}},created(){window.addEventListener("resize",this.changeCollapse)},mounted(){},methods:{changeCollapse(){},switchCollapse(e,t){console.log(e,t),this.isCollapse=!this.isCollapse,document.body.clientWidth<=920&&(this.drawer=!this.drawer,this.isCollapse=!0)},close(){this.isCollapse=!this.isCollapse,this.drawer=!this.drawer},handleClose(e,t){console.log(e,t)}}}),He={class:"app-wrapper"},Ne={class:"main-container"},Ve={class:"header"},qe={class:"navbar row justify-between align-c"},Re={class:"row align-c"},Ge={class:"app-main"},We={class:"container"},Je=(e=>(S("data-v-495a5ee7"),e=e(),_(),e))((()=>s("p",{class:"text-c mt-10 mb-10 c-333 f-12"},[w(" Copyright © 2016-2023 "),s("a",{class:"c-9ca4bf",href:"https://gitee.com/yanyutao0402/chanyue-cms",target:"_blank"},"禅悦cms")],-1))),Ke=[{path:"/home",name:"home-info",component:"@/views/home/info.vue",meta:{title:"网站信息",icon:"DataLine",isShow:!0,role:["admin","super","editor"]}},{path:"/site",name:"site",meta:{title:"站点管理",icon:"Monitor",isShow:!0,role:["admin","super","editor"]},redirect:"/site",children:[{path:"/site",name:"site-index",component:"@/views/home/site.vue",meta:{title:"站点设置",isShow:!0,role:["admin","super","editor"]}}]},{path:"/content",name:"content",meta:{title:"内容管理",isShow:!0,icon:"Grid",role:["admin","super","editor"]},redirect:"/category",children:[{path:"/category",name:"category-index",component:"@/views/category/index.vue",meta:{title:"栏目管理",isShow:!0,role:["admin","super","editor"]}},{path:"/category/add",name:"category-add",component:"@/views/category/add.vue",meta:{title:"栏目管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/category/edit/:id",name:"category-edit",component:"@/views/category/edit.vue",meta:{title:"页面管理-更新",isShow:!1,role:["admin","super","editor"]}},{path:"/article",name:"article-index",component:"@/views/article/index.vue",meta:{title:"文章管理",isShow:!0,role:["admin","super","editor"]}},{path:"/article/add",name:"article-add",component:"@/views/article/add.vue",meta:{title:"文章管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/article/edit/:id",name:"article-edit",component:"@/views/article/edit.vue",meta:{title:"文章管理-更新",isShow:!1,role:["admin","super","editor"]}},{path:"/slide",name:"slide-index",component:"@/views/slide/index.vue",meta:{title:"轮播管理",isShow:!0,role:["admin","super","editor"]}},{path:"/slide/add",name:"slide-add",component:"@/views/slide/add.vue",meta:{title:"轮播管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/slide/edit/:id",name:"slide-edit",component:"@/views/slide/edit.vue",meta:{title:"轮播管理-更新",isShow:!1,role:["admin","super","editor"]}},{path:"/tag",name:"tag-index",component:"@/views/tag/index.vue",meta:{title:"标签管理",isShow:!0,role:["admin","super","editor"]}},{path:"/tag/add",name:"tag-add",component:"@/views/tag/add.vue",meta:{title:"标签管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/tag/edit/:id",name:"tag-edit",component:"@/views/tag/edit.vue",meta:{title:"标签管理-更新",isShow:!1,role:["admin","super","editor"]}},{path:"/frag",name:"frag-index",component:"@/views/frag/index.vue",meta:{title:"碎片管理",isShow:!0,role:["admin","super","editor"]}},{path:"/frag/add",name:"frag-add",component:"@/views/frag/add.vue",meta:{title:"碎片管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/frag/edit/:id",name:"frag-edit",component:"@/views/frag/edit.vue",meta:{title:"碎片管理-更新",isShow:!1,role:["admin","super","editor"]}}]},{path:"/gather",name:"gather",meta:{title:"采集功能",icon:"MagicStick",isShow:!0,role:["super"]},redirect:"/collect",children:[{path:"/collect",name:"collect-index",component:"@/views/collect/index.vue",meta:{title:"采集配置",isShow:!0,role:["super"]}},{path:"/collect/add",name:"collect-add",component:"@/views/collect/add.vue",meta:{title:"采集配置-新增",isShow:!1,role:["super"]}},{path:"/collect/:id",name:"collect-edit",component:"@/views/collect/edit.vue",meta:{title:"采集配置-更新",isShow:!1,role:["super"]}}]},{path:"/extend",name:"extend",meta:{title:"功能管理",icon:"Operation",isShow:!0,role:["super"]},children:[{path:"/model",name:"model-index",component:"@/views/model/index.vue",meta:{title:"模型管理",isShow:!0,role:["super"]}},{path:"/model/add",name:"model-add",component:"@/views/model/add.vue",meta:{title:"模型管理-新增",isShow:!1,role:["super"]}},{path:"/model/edit/:id",name:"model-edit",component:"@/views/model/edit.vue",meta:{title:"模型管理-更新",isShow:!1,role:["super"]}},{path:"/model/field",name:"field-index",component:"@/views/field/index.vue",meta:{title:"字段管理",isShow:!1,role:["super"]}},{path:"/model/field/add",name:"field-add",component:"@/views/field/add.vue",meta:{title:"字段管理-新增",isShow:!1,role:["super"]}},{path:"/model/field/edit",name:"field-edit",component:"@/views/field/edit.vue",meta:{title:"字段管理-更新",isShow:!1,role:["super"]}},{path:"/friendlink",name:"friendlink-index",component:"@/views/friendlink/index.vue",meta:{title:"友情链接",isShow:!0,role:["admin","super","editor"]}},{path:"/friendlink/add",name:"friendlink-add",component:"@/views/friendlink/add.vue",meta:{title:"友情链接-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/friendlink/edit/:id",name:"friendlink-edit",component:"@/views/friendlink/edit.vue",meta:{title:"友情链接-更新",isShow:!1,role:["admin","super","editor"]}},{path:"/message",name:"message-index",component:"@/views/message/index.vue",meta:{title:"消息管理",isShow:!0,role:["admin","super","editor"]}},{path:"/message/add",name:"message-add",component:"@/views/message/add.vue",meta:{title:"消息管理-新增",isShow:!1,role:["admin","super","editor"]}},{path:"/message/edit/:id",name:"message-edit",component:"@/views/message/edit.vue",meta:{title:"消息管理-更新",isShow:!1,role:["admin","super","editor"]}}]},{path:"/sys",name:"sys",meta:{title:"系统管理",isShow:!0,icon:"Setting",role:["admin","super"]},redirect:"/user",children:[{path:"/user",name:"user-index",component:"@/views/user/index.vue",meta:{title:"用户管理",isShow:!0,role:["admin","super"]}},{path:"/user/add",name:"user-add",component:"@/views/user/add.vue",meta:{title:"用户列表-新增",isShow:!1,role:["admin","super"]}},{path:"/user/edit/:id",name:"user-edit",component:"@/views/user/edit.vue",meta:{title:"用户列表-更新",isShow:!1,role:["admin","super"]}},{path:"/role",name:"role-index",component:"@/views/role/index.vue",meta:{title:"角色管理",isShow:!0,role:["admin","super"]}},{path:"/role/add",name:"role-add",component:"@/views/role/add.vue",meta:{title:"角色列表-新增",isShow:!1,role:["admin","super"]}},{path:"/role/edit/:id",name:"role-edit",component:"@/views/role/edit.vue",meta:{title:"角色列表-更新",isShow:!1,role:["admin","super"]}},{path:"/menu",name:"menu-index",component:"@/views/menu/index.vue",meta:{title:"菜单管理",isShow:!0,role:["admin","super"]}},{path:"/loginlog",name:"loginLog-index",component:"@/views/loginlog/index.vue",meta:{title:"登录日志",isShow:!0,role:["admin","super"]}}]}];var Qe=[{path:"/login",name:"login",component:()=>ae((()=>t.import("./index-legacy10.js")),0,t.meta.url),meta:{title:"登录"}},{path:"/",name:"Layout",component:G(De,[["render",function(e,t,n,c,u,p){const m=ce,v=a("SideBar"),g=q,f=R,w=a("Expand"),x=a("Fold"),y=L,b=a("BreadCrumb"),k=a("NavBar"),S=a("router-view");return i(),l("div",He,[d(g,{class:"sidebar",style:j({width:e.isCollapse?"65px":"200px"})},{default:r((()=>[d(m,{isCollapse:e.isCollapse},null,8,["isCollapse"]),d(v,{isCollapse:e.isCollapse},null,8,["isCollapse"])])),_:1},8,["style"]),d(f,{modelValue:e.drawer,"onUpdate:modelValue":t[0]||(t[0]=t=>e.drawer=t),"before-close":e.close,direction:"ltr","with-header":!1},{default:r((()=>[d(m),d(v)])),_:1},8,["modelValue","before-close"]),s("div",Ne,[s("div",Ve,[s("div",qe,[s("div",Re,[d(y,{class:"ico-collapse",onClick:e.switchCollapse},{default:r((()=>[1==e.isCollapse?(i(),o(w,{key:0})):(i(),o(x,{key:1}))])),_:1},8,["onClick"]),d(b)]),d(k)])]),s("div",Ge,[s("article",We,[d(S,null,{default:r((({Component:e,route:t})=>[(i(),o(h(e)))])),_:1})]),Je])])])}],["__scopeId","data-v-495a5ee7"]]),redirect:"/home",children:[]},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>ae((()=>t.import("./404-legacy.js")),0,t.meta.url),meta:{title:"404"}}];const Xe=K({history:Q(),linkActiveClass:"active",routes:Qe});Xe.beforeEach((async(e,t)=>{const a=je();if(a.token){if("/login"===e.path)return{path:"/"};if(a.userInfo)return!0;{const t=await a.getUserInfo();return await a.getMenuList(),a.getAccessRoutes(t).forEach((e=>{Xe.addRoute("Layout",e)})),e.fullPath}}return"/login"===e.path||{path:"/login",query:{redirect:e.fullPath}}}));const Ye={install:(e,t)=>{console.log("萨埵第一个插件"),e.config.globalProperties.$message=$;for(const[a,i]of Object.entries(Z))e.component(a,i);e.directive("permission",{mounted(e,t,a){const{userInfo:{role:i}}=je();i!==t.value&&e.parentNode.removeChild(e)}})}},Ze=C(te),et=I();et.use(P),Ze.use(et),Ze.use(Xe),Ze.use(Ye),Ze.mount("#app")}}}));
