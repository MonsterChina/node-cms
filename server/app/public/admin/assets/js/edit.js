import{q as a,r as e,u as l,v as s,w as t,a as r,x as o,y as m,A as d,B as i,f as p,p as u}from"./element-plus.js";import{d as n,u as c}from"./ad.js";import{B as f}from"./@element-plus.js";import{_ as g}from"./index.js";import{af as b,o as h,c as V,U as _,W as j,a as U,_ as y,X as w,h as k}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const v={class:"mr-10 ml-10 mb-20"};const x=g({name:"ad-edit",data:()=>({params:{id:0,title:"",mark:"",imgUrl:"",link:"",platform:"",position:[1,2],createdAt:new Date,updatedAt:new Date,status:"1"},disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}],mark:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),components:{Plus:f},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let a=await n(this.params.id);if(200===a.code){let e=a.data;e.position=e.position.split(","),e.platform=e.status.toString(),e.status=e.status.toString(),e.updatedAt=new Date(e.createdAt),this.params=e}}catch(a){console.error(a)}},handleAttr(a){console.log("e--\x3e",a)},beforeUpload(a){if(a.size/1024/1024>2)return this.$message("上传文件必须小于1M"),!1},upload(a){200===a.code&&(this.params.imgUrl=a.data.path)},async update(){try{let a={...this.params};a.position=a.position.toString(),(await c(a)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(a){console.log(a)}},submit(a){this.$refs[a].validate((a=>{if(!a)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(n,c,f,g,x,A){const $=a,C=e,q=l,z=s,D=t,P=b("Plus"),S=r,B=o,R=m,H=d,M=i,W=p,X=u;return h(),V("div",v,[_(X,{ref:"params",model:n.params,rules:n.paramsRules,"label-width":"84px",class:"mt-20"},{default:j((()=>[U("div",null,[_(C,{label:"广告名称",prop:"title"},{default:j((()=>[_($,{modelValue:n.params.title,"onUpdate:modelValue":c[0]||(c[0]=a=>n.params.title=a),placeholder:"请输入汉字"},null,8,["modelValue"])])),_:1}),_(C,{label:"广告链接"},{default:j((()=>[_($,{modelValue:n.params.link,"onUpdate:modelValue":c[1]||(c[1]=a=>n.params.link=a)},null,8,["modelValue"])])),_:1}),_(C,{label:"广告标识",prop:"mark"},{default:j((()=>[_($,{modelValue:n.params.mark,"onUpdate:modelValue":c[2]||(c[2]=a=>n.params.mark=a),disabled:""},null,8,["modelValue"])])),_:1}),_(C,{label:"广告平台"},{default:j((()=>[_(q,{modelValue:n.params.platform,"onUpdate:modelValue":c[3]||(c[3]=a=>n.params.platform=a),label:"1"},{default:j((()=>[y("PC")])),_:1},8,["modelValue"]),_(q,{modelValue:n.params.platform,"onUpdate:modelValue":c[4]||(c[4]=a=>n.params.platform=a),label:"2"},{default:j((()=>[y("H5")])),_:1},8,["modelValue"])])),_:1}),_(C,{label:"广告位置"},{default:j((()=>[_(D,{modelValue:n.params.position,"onUpdate:modelValue":c[5]||(c[5]=a=>n.params.position=a),onChange:A.handleAttr},{default:j((()=>[_(z,{label:"1"},{default:j((()=>[y("首页")])),_:1}),_(z,{label:"2"},{default:j((()=>[y("频道页")])),_:1}),_(z,{label:"3"},{default:j((()=>[y("列表页")])),_:1}),_(z,{label:"4"},{default:j((()=>[y("文章页")])),_:1}),_(z,{label:"5"},{default:j((()=>[y("单页")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),_(C,{class:"row",label:"广告图片"},{default:j((()=>[_(B,{class:"avatar-uploader",action:"/api/upload","on-success":A.upload,"show-file-list":!1,"before-upload":A.beforeUpload},{default:j((()=>[_(S,{class:"avatar-uploader-icon"},{default:j((()=>[_(P)])),_:1})])),_:1},8,["on-success","before-upload"]),_(H,{placement:"right",width:400,trigger:"hover"},{reference:j((()=>[n.params.imgUrl?(h(),w(R,{key:0,class:"avatar-uploader-icon pointer ml-10",src:n.params.imgUrl},null,8,["src"])):k("",!0)])),default:j((()=>[n.params.imgUrl?(h(),w(R,{key:0,style:{width:"100%"},src:n.params.imgUrl},null,8,["src"])):k("",!0)])),_:1}),_($,{class:"ml-10 flex-1",modelValue:n.params.imgUrl,"onUpdate:modelValue":c[6]||(c[6]=a=>n.params.imgUrl=a)},null,8,["modelValue"])])),_:1}),_(C,{label:"发布时间"},{default:j((()=>[_(M,{modelValue:n.params.createdAt,"onUpdate:modelValue":c[7]||(c[7]=a=>n.params.createdAt=a),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),_(C,{label:"是否显示"},{default:j((()=>[_(q,{modelValue:n.params.status,"onUpdate:modelValue":c[8]||(c[8]=a=>n.params.status=a),label:"1"},{default:j((()=>[y("发布")])),_:1},8,["modelValue"]),_(q,{modelValue:n.params.status,"onUpdate:modelValue":c[9]||(c[9]=a=>n.params.status=a),label:"2"},{default:j((()=>[y("不发布")])),_:1},8,["modelValue"])])),_:1})]),_(C,null,{default:j((()=>[_(W,{type:"primary",onClick:c[10]||(c[10]=a=>A.submit("params"))},{default:j((()=>[y("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{x as default};
//# sourceMappingURL=edit.js.map
