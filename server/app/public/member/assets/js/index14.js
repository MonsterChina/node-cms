import{q as e,r as a,f as t,p as s,w as r,x as o,y as l,t as i}from"./element-plus.js";import{G as c,E as n,v as d,H as u}from"./@element-plus.js";import{s as p,a as m}from"./tag.js";import{_ as h}from"./@qiun.js";import{j as g,o as f,c as y,a as j,l as w,a1 as k,a3 as C}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const b={class:"content-wrap"},S={class:"search row justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20"};const _=h({name:"tag-index",setup:()=>({Edit:c,Delete:n,View:d,Search:u}),data:()=>({tableData:[],multipleSelection:[],count:0,cur:1,params:{keywords:""}}),computed:{},created(){let{cur:e=1,keywords:a=""}=this.$route.query;this.cur=+e,this.keywords=a,this.search()},watch:{$route(e,a){if("tag-index"==e.name){let{cur:a,keywords:t}=e.query;this.cur=+a,this.keywords=t,this.search()}}},methods:{clearSearch(e){e&&this.$refs.form.resetFields(),this.$router.replace({name:"tag-index",query:{cur:1,cid:0,keywords:""}}),this.search()},doSearch(){this.$router.replace({name:"tag-index",query:{cur:this.cur,keywords:this.params.keywords}}),this.search()},async search(){try{let e=await p(this.cur,this.params.keywords);200===e.code?(this.tableData=[...e.data.list],this.count=e.data.count):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=+e,this.doSearch()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let a=e.id;this.$router.push({name:"tag-edit",params:{id:a}})},async handleDel(e){let a=e.id;try{let e=await m(a);200==e.code?(this.$message({message:"删除成功 ^_^",type:"success"}),this.search()):this.$message({message:e.msg,type:"error"})}catch(t){console.log(t)}}}},[["render",function(c,n,d,u,p,m){const h=e,_=a,x=t,$=s,v=g("router-link"),D=r,q=o,E=l,z=i;return f(),y("div",b,[j("div",S,[w($,{inline:!0,model:c.params,ref:"form"},{default:k((()=>[w(_,{class:"mt-10",label:"标题",prop:"keywords"},{default:k((()=>[w(h,{class:"mr-10 w-auto",placeholder:"请输入内容","suffix-icon":u.Search,clearable:"",onClear:m.clearSearch,modelValue:c.params.keywords,"onUpdate:modelValue":n[0]||(n[0]=e=>c.params.keywords=e)},null,8,["suffix-icon","onClear","modelValue"])])),_:1}),w(_,{class:"mt-10"},{default:k((()=>[w(x,{type:"primary",onClick:m.search,round:""},{default:k((()=>[C("搜索")])),_:1},8,["onClick"]),w(x,{onClick:n[1]||(n[1]=e=>m.clearSearch("form")),round:""},{default:k((()=>[C("清空")])),_:1})])),_:1})])),_:1},8,["model"]),w(v,{class:"mt-10",to:"/tag/add"},{default:k((()=>[w(x,{type:"primary",round:""},{default:k((()=>[C("新增")])),_:1})])),_:1})]),w(q,{ref:"multipleTable",data:c.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:m.handleSelectionChange},{default:k((()=>[w(D,{type:"selection"}),w(D,{prop:"id",label:"编号"}),w(D,{prop:"name",label:"名称"}),w(D,{prop:"path",label:"标识"}),w(D,{fixed:"right",width:"92",label:"操作"},{default:k((e=>[w(x,{icon:u.Edit,circle:"",onClick:a=>m.toEdit(e.row)},null,8,["icon","onClick"]),w(x,{icon:u.Delete,circle:"",onClick:a=>m.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),w(z,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:k((()=>[w(E,{background:"",layout:"prev, pager, next",onCurrentChange:m.handleCurrentChange,"page-size":10,total:c.count,currentPage:c.cur,"onUpdate:currentPage":n[2]||(n[2]=e=>c.cur=e),"hide-on-single-page":""},null,8,["onCurrentChange","total","currentPage"])])),_:1})])}],["__scopeId","data-v-f1e1745d"]]);export{_ as default};