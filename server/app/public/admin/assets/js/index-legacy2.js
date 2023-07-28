System.register(["./element-plus-legacy.js","./@element-plus-legacy.js","./ad-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var t,a,s,n,i,o,c,r,u,d,p,h,y,g,m,f,j,w;return{setters:[e=>{t=e.f,a=e.t,s=e.C,n=e.D,i=e.F},e=>{o=e.F,c=e.D},e=>{r=e.s,u=e.a},e=>{d=e._},e=>{p=e.af,h=e.o,y=e.c,g=e.U,m=e.W,f=e._,j=e.h,w=e.t},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={key:0},k={key:1},C={key:0,class:"mr-5"},b={key:1,class:"mr-5"},_={key:2,class:"mr-5"},S={key:3,class:"mr-5"},D={key:4,class:"mr-5"};e("default",d({name:"ad-index",setup:()=>({Edit:o,Delete:c}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.search()},methods:{async search(){try{let e=await r(this.cur,this.keywords);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.search()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let l=e.id;this.$router.push({name:"ad-edit",params:{id:l}})},async handleDel(e){let l=e.id;try{200===(await u(l)).code&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.search())}catch(t){console.log(t)}}}},[["render",function(e,o,c,r,u,d){const x=t,v=p("router-link"),E=a,z=s,$=n,T=i;return h(),y("div",null,[g(E,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:m((()=>[g(v,{to:"/ad/add"},{default:m((()=>[g(x,{type:"primary",round:""},{default:m((()=>[f("新增")])),_:1})])),_:1})])),_:1}),g($,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:d.handleSelectionChange},{default:m((()=>[g(z,{type:"selection"}),g(z,{prop:"id",label:"编号",width:"60"}),g(z,{prop:"title",label:"标题",width:"120"}),g(z,{prop:"mark",label:"标识",width:"180"}),g(z,{prop:"platform",label:"平台"},{default:m((e=>[e.row.platform.includes("1")?(h(),y("span",l,"PC")):j("",!0),e.row.platform.includes("2")?(h(),y("span",k,"H5")):j("",!0)])),_:1}),g(z,{prop:"position",label:"位置"},{default:m((e=>[e.row.position.includes("1")?(h(),y("span",C,"首页")):j("",!0),e.row.position.includes("2")?(h(),y("span",b,"频道页")):j("",!0),e.row.position.includes("3")?(h(),y("span",_,"列表")):j("",!0),e.row.position.includes("4")?(h(),y("span",S,"详情")):j("",!0),e.row.position.includes("5")?(h(),y("span",D,"单页")):j("",!0)])),_:1}),g(z,{prop:"createdAt",label:"发布时间",width:"160"},{default:m((e=>[f(w(e.row.createdAt),1)])),_:1}),g(z,{prop:"status",label:"状态"},{default:m((e=>[f(w(1==e.row.status?"显示":"隐藏"),1)])),_:1}),g(z,{fixed:"right",width:"92",label:"操作"},{default:m((e=>[g(x,{icon:r.Edit,circle:"",onClick:l=>d.toEdit(e.row)},null,8,["icon","onClick"]),g(x,{icon:r.Delete,circle:"",onClick:l=>d.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),g(E,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:m((()=>[g(T,{background:"",layout:"prev, pager, next",onCurrentChange:d.handleCurrentChange,"pager-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}]]))}}}));
//# sourceMappingURL=index-legacy2.js.map
