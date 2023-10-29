import{C as e,r as a,q as t,f as l,p as o,w as s,x as r,L as i,y as c,t as n,K as d}from"./element-plus.js";import{G as u,E as p,v as h,H as m,i as f}from"./@element-plus.js";import{s as g,a as y}from"./article.js";import{f as w}from"./category.js";import{a as C,t as k}from"./index.js";import{_ as j}from"./@qiun.js";import{j as b,o as S,c as _,a as x,l as v,a1 as $,a3 as E,m as q,k as V,t as D}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const z={class:"content-wrap"},F={class:"search row justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20"},U=["href"],I={style:{"margin-top":"20px"}};const P=j({name:"article-index",setup:()=>({Edit:u,Delete:p,View:h,Search:m,InfoFilled:f}),data:()=>({keywords:"",cid:0,cur:1,category:[],tableData:[],multipleSelection:[],count:0,loading:!0,params:{keywords:"",categorySelected:[]}}),computed:{},created(){let{cur:e=1,cid:a=0,keywords:t=""}=this.$route.query;this.cur=+e,this.params={categorySelected:+a,keywords:t},this.queryCategory(),this.search()},watch:{$route(e,a){if(console.log(e),"article-index"==e.name){let{cur:a,cid:t,keywords:l}=e.query;this.cur=+a,this.cid=+t,this.params.keywords=l,this.search()}}},methods:{clearSearch(e){e&&this.$refs.form.resetFields(),this.$router.replace({name:"article-index",query:{cur:1,cid:0,keywords:""}})},doSearch(){this.$router.replace({name:"article-index",query:{cur:this.cur,cid:this.cid,keywords:this.params.keywords}}),this.search()},async search(){try{let e=await g(this.cur,this.params.keywords,this.cid);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count,this.cur=e.data.current,this.loading=!1)}catch(e){console.log(e)}},handleCurrentChange(e){this.loading=!0,this.cur=+e,this.doSearch()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},async queryCategory(){try{let e=await w();if(200===e.code){let a=C(k(e.data)),t=C(e.data);this.cateList=t,this.category=[...a]}}catch(e){console.log(e)}},handleChange(e){this.cid=e[e.length-1]},toEdit(e){let a=e.id;this.$router.push({name:"article-edit",params:{id:a}})},cancelEvent(){},async delSome(){let e=this.multipleSelection.map((e=>e.id));200===(await y(e.join(","))).code&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.search())},async handleDel(e){let a=e.id;try{200===(await y(a)).code&&(this.$message({message:"文章删除成功 ^_^",type:"success"}),this.search())}catch(t){console.log(t)}}},onBeforeUnmount(){}},[["render",function(u,p,h,m,f,g){const y=e,w=a,C=t,k=l,j=o,P=b("router-link"),T=s,A=r,L=i,B=c,G=n,H=d;return S(),_("div",z,[x("div",F,[v(j,{inline:!0,model:u.params,ref:"form"},{default:$((()=>[v(w,{class:"mt-10",label:"栏目筛选",prop:"categorySelected"},{default:$((()=>[v(y,{class:"w-auto ml-5","show-all-levels":!1,modelValue:u.params.categorySelected,"onUpdate:modelValue":p[0]||(p[0]=e=>u.params.categorySelected=e),options:u.category,onChange:g.handleChange},null,8,["modelValue","options","onChange"])])),_:1}),v(w,{class:"mt-10",label:"标题",prop:"keywords"},{default:$((()=>[v(C,{class:"mr-10 w-auto",placeholder:"请输入文章标题","suffix-icon":m.Search,modelValue:u.params.keywords,"onUpdate:modelValue":p[1]||(p[1]=e=>u.params.keywords=e),clearable:"",onClear:g.clearSearch},null,8,["suffix-icon","modelValue","onClear"])])),_:1}),v(w,{class:"mt-10"},{default:$((()=>[v(k,{type:"primary",onClick:g.doSearch,round:""},{default:$((()=>[E("搜索")])),_:1},8,["onClick"]),v(k,{onClick:p[2]||(p[2]=e=>g.clearSearch("form")),round:""},{default:$((()=>[E("清空")])),_:1})])),_:1})])),_:1},8,["model"]),v(P,{class:"mt-10",to:"/article/add"},{default:$((()=>[v(k,{type:"primary",round:""},{default:$((()=>[E("新增")])),_:1})])),_:1})]),q((S(),V(A,{ref:"multipleTable",data:u.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:g.handleSelectionChange},{default:$((()=>[v(T,{type:"selection"}),v(T,{prop:"id",label:"编号",width:"60",fixed:""}),v(T,{prop:"title",label:"标题"},{default:$((e=>[x("a",{class:"block",href:"/article-".concat(e.row.id,".html"),target:"_blank"},D(e.row.title),9,U)])),_:1}),v(T,{prop:"name",label:"栏目",width:"80"}),v(T,{prop:"updatedAt",label:"更新时间",width:"160"}),v(T,{prop:"status",label:"状态",width:"60"},{default:$((e=>[E(D(0==e.row.status?"显示":"隐藏"),1)])),_:1}),v(T,{fixed:"right",label:"操作",width:"150"},{default:$((e=>[v(k,{icon:m.View,circle:"",onClick:a=>u.handleClick(e.row)},null,8,["icon","onClick"]),v(k,{icon:m.Edit,circle:"",onClick:a=>g.toEdit(e.row)},null,8,["icon","onClick"]),v(k,{icon:m.Delete,circle:"",onClick:a=>g.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[H,u.loading]]),v(G,{type:"flex",class:"mt-20",justify:"space-between"},{default:$((()=>[x("div",I,[E(" 批量操作： "),v(L,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:m.InfoFilled,"icon-color":"#626AEF",title:"此操作将永久删除, 是否继续?",onConfirm:g.delSome,onCancel:g.cancelEvent},{reference:$((()=>[v(k,null,{default:$((()=>[E("删除")])),_:1})])),_:1},8,["icon","onConfirm","onCancel"])]),v(B,{background:"",layout:"prev, pager, next",onCurrentChange:g.handleCurrentChange,"page-size":20,total:u.count,currentPage:u.cur,"onUpdate:currentPage":p[3]||(p[3]=e=>u.cur=e),"hide-on-single-page":""},null,8,["onCurrentChange","total","currentPage"])])),_:1})])}],["__scopeId","data-v-0451ebe4"]]);export{P as default};