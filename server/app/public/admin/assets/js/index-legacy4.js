System.register(["./element-plus-legacy.js","./@element-plus-legacy.js","./article-legacy.js","./category-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,t,c,s,o,r,i,n,d,u,h,p,g,y,m,f,w,C,k,j,S,b,_,x,v,$,D,V,q,E,T;return{setters:[e=>{l=e.I,t=e.r,c=e.q,s=e.f,o=e.p,r=e.C,i=e.D,n=e.F,d=e.t,u=e.L},e=>{h=e.F,p=e.D,g=e.v,y=e.G},e=>{m=e.s,f=e.a},e=>{w=e.f},e=>{C=e._,k=e.a,j=e.t},e=>{S=e.af,b=e.o,_=e.c,x=e.a,v=e.U,$=e.W,D=e._,V=e.a1,q=e.X,E=e.t,T=e.F},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent="[data-v-5d3bc020] .el-form-item{margin-bottom:0}\n",document.head.appendChild(a);const U={class:"search row justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20"},z={style:{"margin-top":"20px"}};e("default",C({name:"article-index",setup:()=>({Edit:h,Delete:p,View:g,Search:y}),data:()=>({keywords:"",cid:0,cur:1,category:[],tableData:[],multipleSelection:[],count:0,loading:!0,params:{keywords:"",categorySelected:[]}}),computed:{},created(){let{cur:e=1,cid:a=0,keywords:l=""}=this.$route.query;this.cur=+e,this.params={categorySelected:+a,keywords:l},this.queryCategory(),this.search()},watch:{$route(e,a){if(console.log(e),"article-index"==e.name){let{cur:a,cid:l,keywords:t}=e.query;this.cur=+a,this.cid=+l,this.params.keywords=t,this.search()}}},methods:{clearSearch(e){e&&this.$refs.form.resetFields(),this.$router.replace({name:"article-index",query:{cur:1,cid:0,keywords:""}})},doSearch(){this.$router.replace({name:"article-index",query:{cur:this.cur,cid:this.cid,keywords:this.params.keywords}}),this.search()},async search(){try{let e=await m(this.cur,this.params.keywords,this.cid);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count,this.loading=!1)}catch(e){console.log(e)}},handleCurrentChange(e){this.loading=!0,this.cur=+e,this.doSearch()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},async queryCategory(){try{let e=await w();if(200===e.code){let a=k(j(e.data)),l=k(e.data);this.cateList=l,this.category=[...a]}}catch(e){console.log(e)}},handleChange(e){this.cid=e[e.length-1]},toEdit(e){let a=e.id;this.$router.push({name:"article-edit",params:{id:a}})},delSome(){let e=this.multipleSelection.map((e=>e.id));this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{200===(await f(e.join(","))).code&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.search())})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},async handleDel(e){let a=e.id;try{200===(await f(a)).code&&(this.$message({message:"文章删除成功 ^_^",type:"success"}),this.search())}catch(l){console.log(l)}}},onBeforeUnmount(){}},[["render",function(e,a,h,p,g,y){const m=l,f=t,w=c,C=s,k=o,j=S("router-link"),F=r,B=i,P=n,I=d,L=u;return b(),_(T,null,[x("div",U,[v(k,{inline:!0,model:e.params,ref:"form"},{default:$((()=>[v(f,{class:"mt-10",label:"栏目筛选",prop:"categorySelected"},{default:$((()=>[v(m,{class:"w-auto ml-5","show-all-levels":!1,modelValue:e.params.categorySelected,"onUpdate:modelValue":a[0]||(a[0]=a=>e.params.categorySelected=a),options:e.category,onChange:y.handleChange},null,8,["modelValue","options","onChange"])])),_:1}),v(f,{class:"mt-10",label:"标题",prop:"keywords"},{default:$((()=>[v(w,{class:"mr-10 w-auto",placeholder:"请输入文章标题","suffix-icon":p.Search,modelValue:e.params.keywords,"onUpdate:modelValue":a[1]||(a[1]=a=>e.params.keywords=a),clearable:"",onClear:y.clearSearch},null,8,["suffix-icon","modelValue","onClear"])])),_:1}),v(f,{class:"mt-10"},{default:$((()=>[v(C,{type:"primary",onClick:y.doSearch,round:""},{default:$((()=>[D("搜索")])),_:1},8,["onClick"]),v(C,{onClick:a[2]||(a[2]=e=>y.clearSearch("form")),round:""},{default:$((()=>[D("清空")])),_:1})])),_:1})])),_:1},8,["model"]),v(j,{class:"mt-10",to:"/article/add"},{default:$((()=>[v(C,{type:"primary",round:""},{default:$((()=>[D("新增")])),_:1})])),_:1})]),V((b(),q(B,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:y.handleSelectionChange},{default:$((()=>[v(F,{type:"selection"}),v(F,{prop:"id",label:"编号",width:"60",fixed:""}),v(F,{prop:"title",label:"标题"}),v(F,{prop:"name",label:"栏目",width:"80"}),v(F,{prop:"updatedAt",label:"更新时间",width:"160"}),v(F,{prop:"status",label:"状态",width:"60"},{default:$((e=>[D(E(0==e.row.status?"显示":"隐藏"),1)])),_:1}),v(F,{fixed:"right",label:"操作",width:"150"},{default:$((a=>[v(C,{icon:p.View,circle:"",onClick:l=>e.handleClick(a.row)},null,8,["icon","onClick"]),v(C,{icon:p.Edit,circle:"",onClick:e=>y.toEdit(a.row)},null,8,["icon","onClick"]),v(C,{icon:p.Delete,circle:"",onClick:e=>y.handleDel(a.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[L,e.loading]]),v(I,{type:"flex",class:"mt-20",justify:"space-between"},{default:$((()=>[x("div",z,[D(" 批量操作： "),v(C,{onClick:y.delSome},{default:$((()=>[D("删除")])),_:1},8,["onClick"])]),v(P,{background:"",layout:"prev, pager, next",onCurrentChange:y.handleCurrentChange,"pager-size":10,total:e.count,currentPage:e.cur,"onUpdate:currentPage":a[3]||(a[3]=a=>e.cur=a),"hide-on-single-page":""},null,8,["onCurrentChange","total","currentPage"])])),_:1})],64)}],["__scopeId","data-v-5d3bc020"]]))}}}));
//# sourceMappingURL=index-legacy4.js.map
