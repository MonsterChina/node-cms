System.register(["./element-plus-legacy.js","./@element-plus-legacy.js","./gather-legacy.js","./article-legacy.js","./js-cookie-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./saduocss-legacy.js"],(function(e,t){"use strict";var a,l,s,i,c,n,o,r,u,d,g,p,h,y,m,f,j,w,C,_,k,b;return{setters:[e=>{a=e.f,l=e.t,s=e.I,i=e.J,c=e.L},e=>{n=e.G,o=e.E,r=e.v,u=e.H,d=e.I},e=>{g=e.l,p=e.g,h=e.a},e=>{y=e.c},null,e=>{m=e._},e=>{f=e.j,j=e.o,w=e.c,C=e.l,_=e.a1,k=e.a3,b=e.t},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const t={class:"content-wrap"};e("default",m({name:"gather-index",setup:()=>({Edit:n,Delete:o,View:r,Search:u,Cpu:d}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1,step:0,params:{cid:0,title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"禅悦",status:"0",pv:1,link:""}}),computed:{},created(){this.list()},methods:{async list(){try{let e=await g(this.cur);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.list()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},async toRun(e){try{let{targetUrl:t,title:a,parseData:l,cid:s,status:i}=e,c=await p({targetUrl:t,title:a,parseData:l});if(200==c.code){const{title:e,content:t}=c.data;this.params.attr=this.params.attr.toString(),this.params.title=e,this.params.content=t,this.params.cid=s,this.params.status=1==i?1:0,this.create(this.params),this.$message({message:"内功获取成功^_^",type:"success"})}}catch(t){console.log(t)}},async create(){try{let e=await y({defaultParams:this.params,fieldParams:{}});console.log("--------\x3e",e),200==e.code&&this.$message({message:`第一${this.step+1}条数据完成^_^`,type:"success"})}catch(e){console.log(e)}},toEdit(e){let t=e.id;this.$router.push({name:"gather-edit",params:{id:t}})},async handleDel(e){let t=e.id;try{let e=await h(t);200===e.code?(this.$message({message:"删除成功 ^_^",type:"success"}),this.list()):this.$message({message:e.msg,type:"success"})}catch(a){console.log(a)}}}},[["render",function(e,n,o,r,u,d){const g=a,p=f("router-link"),h=l,y=s,m=i,S=c;return j(),w("div",t,[C(h,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:_((()=>[C(p,{to:"/gather/add"},{default:_((()=>[C(g,{type:"primary",round:""},{default:_((()=>[k("新增")])),_:1})])),_:1})])),_:1}),C(m,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:d.handleSelectionChange},{default:_((()=>[C(y,{type:"selection"}),C(y,{prop:"id",width:"60",label:"编号"}),C(y,{prop:"taskName",label:"任务名称"}),C(y,{prop:"targetUrl",label:"接口链接"}),C(y,{prop:"status",label:"状态"},{default:_((e=>[k(b(1==e.row.status?"草稿":"发布"),1)])),_:1}),C(y,{prop:"createdAt",label:"发布时间"},{default:_((e=>[k(b(e.row.createdAt),1)])),_:1}),C(y,{fixed:"right",width:"222",label:"操作"},{default:_((e=>[C(g,{icon:r.Edit,circle:"",onClick:t=>d.toEdit(e.row)},null,8,["icon","onClick"]),C(g,{icon:r.Delete,circle:"",onClick:t=>d.handleDel(e.row)},null,8,["icon","onClick"]),C(g,{type:"primary",round:"",icon:r.Cpu,onClick:t=>d.toRun(e.row)},{default:_((()=>[k("执行")])),_:2},1032,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),C(h,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:_((()=>[C(S,{background:"",layout:"prev, pager, next",onCurrentChange:d.handleCurrentChange,"page-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}]]))}}}));
