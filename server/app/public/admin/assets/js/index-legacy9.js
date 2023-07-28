System.register(["./element-plus-legacy.js","./@element-plus-legacy.js","./friendlink-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var t,a,n,i,s,c,o,r,u,d,g,h,p,y,f,j,m,C,k,b;return{setters:[e=>{t=e.f,a=e.t,n=e.C,i=e.D,s=e.F},e=>{c=e.F,o=e.D,r=e.v,u=e.G},e=>{d=e.l,g=e.a},e=>{h=e._},e=>{p=e.af,y=e.o,f=e.c,j=e.U,m=e.W,C=e._,k=e.t,b=e.F},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",h({name:"friendlink-index",setup:()=>({Edit:c,Delete:o,View:r,Search:u}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.list()},methods:{async list(){try{let e=await d(this.cur);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.list()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let l=e.id;this.$router.push({name:"friendlink-edit",params:{id:l}})},async handleDel(e){let l=e.id;try{200===(await g(l)).code&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.list())}catch(t){console.log(t)}}}},[["render",function(e,l,c,o,r,u){const d=t,g=p("router-link"),h=a,w=n,S=i,_=s;return y(),f(b,null,[j(h,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:m((()=>[j(g,{to:"/friendlink/add"},{default:m((()=>[j(d,{type:"primary",round:""},{default:m((()=>[C("新增")])),_:1})])),_:1})])),_:1}),j(S,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:u.handleSelectionChange},{default:m((()=>[j(w,{type:"selection"}),j(w,{prop:"id",width:"60",label:"编号"}),j(w,{prop:"title",width:"120",label:"标题"}),j(w,{prop:"link",width:"260",label:"链接"}),j(w,{prop:"sort",label:"排序"}),j(w,{prop:"createdAt",label:"发布时间"},{default:m((e=>[C(k(e.row.createdAt),1)])),_:1}),j(w,{fixed:"right",width:"92",label:"操作"},{default:m((e=>[j(d,{icon:o.Edit,circle:"",onClick:l=>u.toEdit(e.row)},null,8,["icon","onClick"]),j(d,{icon:o.Delete,circle:"",onClick:l=>u.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),j(h,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:m((()=>[j(_,{background:"",layout:"prev, pager, next",onCurrentChange:u.handleCurrentChange,"pager-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})],64)}]]))}}}));
//# sourceMappingURL=index-legacy9.js.map
