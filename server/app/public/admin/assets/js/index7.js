import{q as e,r as a,f as t,p as s,I as l,J as o,L as r,t as i}from"./element-plus.js";import{G as n,E as c,v as p,H as d}from"./@element-plus.js";import{s as m,a as u}from"./frag.js";import{_ as h}from"./@qiun.js";import{j as f,o as g,c as j,a as y,l as C,a1 as w,a3 as b,t as k}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const _={class:"pd-20 bg-fff"},S={class:"search row justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20"};const v=h({name:"frag-index",setup:()=>({Edit:n,Delete:c,View:p,Search:d}),data:()=>({params:{keywords:""},tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.search()},methods:{clearSearch(e){e&&this.$refs.form.resetFields(),this.search()},async search(){try{let e=await m(this.cur,this.params.keywords);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.search()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let a=e.id;this.$router.push({name:"frag-edit",params:{id:a}})},async handleDel(e){let a=e.id;try{let e=await u(a);200===e.code?(this.$message({message:"文章删除成功 ^_^",type:"success"}),this.search()):this.$message({message:e.msg,type:"success"})}catch(t){console.log(t)}}}},[["render",function(n,c,p,d,m,u){const h=e,v=a,x=t,D=s,E=f("router-link"),$=l,z=o,V=r,T=i;return g(),j("div",_,[y("div",S,[C(D,{inline:!0,model:n.params,ref:"form"},{default:w((()=>[C(v,{class:"mt-10",label:"标题",prop:"keywords"},{default:w((()=>[C(h,{class:"mr-10 w-auto",placeholder:"请输入内容","suffix-icon":d.Search,clearable:"",onClear:u.search,modelValue:n.params.keywords,"onUpdate:modelValue":c[0]||(c[0]=e=>n.params.keywords=e)},null,8,["suffix-icon","onClear","modelValue"])])),_:1}),C(v,{class:"mt-10"},{default:w((()=>[C(x,{type:"primary",onClick:u.search,round:""},{default:w((()=>[b("搜索")])),_:1},8,["onClick"]),C(x,{onClick:c[1]||(c[1]=e=>u.clearSearch("form")),round:""},{default:w((()=>[b("清空")])),_:1})])),_:1})])),_:1},8,["model"]),C(E,{class:"mt-10",to:"/frag/add"},{default:w((()=>[C(x,{type:"primary",round:""},{default:w((()=>[b("新增")])),_:1})])),_:1})]),C(z,{ref:"multipleTable",data:n.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:u.handleSelectionChange},{default:w((()=>[C($,{type:"selection"}),C($,{prop:"id",width:"60",label:"编号"}),C($,{prop:"name",label:"名称"}),C($,{prop:"mark",label:"标识"}),C($,{prop:"createdAt",label:"发布时间"},{default:w((e=>[b(k(e.row.createdAt),1)])),_:1}),C($,{fixed:"right",width:"92",label:"操作"},{default:w((e=>[C(x,{icon:d.Edit,circle:"",onClick:a=>u.toEdit(e.row)},null,8,["icon","onClick"]),C(x,{icon:d.Delete,circle:"",onClick:a=>u.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),C(T,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:w((()=>[C(V,{background:"",layout:"prev, pager, next",onCurrentChange:u.handleCurrentChange,"page-size":10,total:n.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}],["__scopeId","data-v-1eee1360"]]);export{v as default};
