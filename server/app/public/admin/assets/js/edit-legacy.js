System.register(["./element-plus-legacy.js","./ad-legacy.js","./@element-plus-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,t,s,r,u,o,d,m,i,n,p,c,g,f,y,b,h,V,_,j,U,v,w,k,x;return{setters:[e=>{l=e.q,t=e.r,s=e.u,r=e.v,u=e.w,o=e.a,d=e.x,m=e.y,i=e.A,n=e.B,p=e.f,c=e.p},e=>{g=e.d,f=e.u},e=>{y=e.B},e=>{b=e._},e=>{h=e.af,V=e.o,_=e.c,j=e.U,U=e.W,v=e.a,w=e._,k=e.X,x=e.h},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"mr-10 ml-10 mb-20"};e("default",b({name:"ad-edit",data:()=>({params:{id:0,title:"",mark:"",imgUrl:"",link:"",platform:"",position:[1,2],createdAt:new Date,updatedAt:new Date,status:"1"},disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}],mark:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),components:{Plus:y},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let e=await g(this.params.id);if(200===e.code){let a=e.data;a.position=a.position.split(","),a.platform=a.status.toString(),a.status=a.status.toString(),a.updatedAt=new Date(a.createdAt),this.params=a}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},beforeUpload(e){if(e.size/1024/1024>2)return this.$message("上传文件必须小于1M"),!1},upload(e){200===e.code&&(this.params.imgUrl=e.data.path)},async update(){try{let e={...this.params};e.position=e.position.toString(),(await f(e)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,g,f,y,b,A){const $=l,C=t,S=s,q=r,z=u,D=h("Plus"),P=o,B=d,R=m,H=i,M=n,W=p,X=c;return V(),_("div",a,[j(X,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:"mt-20"},{default:U((()=>[v("div",null,[j(C,{label:"广告名称",prop:"title"},{default:U((()=>[j($,{modelValue:e.params.title,"onUpdate:modelValue":g[0]||(g[0]=a=>e.params.title=a),placeholder:"请输入汉字"},null,8,["modelValue"])])),_:1}),j(C,{label:"广告链接"},{default:U((()=>[j($,{modelValue:e.params.link,"onUpdate:modelValue":g[1]||(g[1]=a=>e.params.link=a)},null,8,["modelValue"])])),_:1}),j(C,{label:"广告标识",prop:"mark"},{default:U((()=>[j($,{modelValue:e.params.mark,"onUpdate:modelValue":g[2]||(g[2]=a=>e.params.mark=a),disabled:""},null,8,["modelValue"])])),_:1}),j(C,{label:"广告平台"},{default:U((()=>[j(S,{modelValue:e.params.platform,"onUpdate:modelValue":g[3]||(g[3]=a=>e.params.platform=a),label:"1"},{default:U((()=>[w("PC")])),_:1},8,["modelValue"]),j(S,{modelValue:e.params.platform,"onUpdate:modelValue":g[4]||(g[4]=a=>e.params.platform=a),label:"2"},{default:U((()=>[w("H5")])),_:1},8,["modelValue"])])),_:1}),j(C,{label:"广告位置"},{default:U((()=>[j(z,{modelValue:e.params.position,"onUpdate:modelValue":g[5]||(g[5]=a=>e.params.position=a),onChange:A.handleAttr},{default:U((()=>[j(q,{label:"1"},{default:U((()=>[w("首页")])),_:1}),j(q,{label:"2"},{default:U((()=>[w("频道页")])),_:1}),j(q,{label:"3"},{default:U((()=>[w("列表页")])),_:1}),j(q,{label:"4"},{default:U((()=>[w("文章页")])),_:1}),j(q,{label:"5"},{default:U((()=>[w("单页")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),j(C,{class:"row",label:"广告图片"},{default:U((()=>[j(B,{class:"avatar-uploader",action:"/api/upload","on-success":A.upload,"show-file-list":!1,"before-upload":A.beforeUpload},{default:U((()=>[j(P,{class:"avatar-uploader-icon"},{default:U((()=>[j(D)])),_:1})])),_:1},8,["on-success","before-upload"]),j(H,{placement:"right",width:400,trigger:"hover"},{reference:U((()=>[e.params.imgUrl?(V(),k(R,{key:0,class:"avatar-uploader-icon pointer ml-10",src:e.params.imgUrl},null,8,["src"])):x("",!0)])),default:U((()=>[e.params.imgUrl?(V(),k(R,{key:0,style:{width:"100%"},src:e.params.imgUrl},null,8,["src"])):x("",!0)])),_:1}),j($,{class:"ml-10 flex-1",modelValue:e.params.imgUrl,"onUpdate:modelValue":g[6]||(g[6]=a=>e.params.imgUrl=a)},null,8,["modelValue"])])),_:1}),j(C,{label:"发布时间"},{default:U((()=>[j(M,{modelValue:e.params.createdAt,"onUpdate:modelValue":g[7]||(g[7]=a=>e.params.createdAt=a),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),j(C,{label:"是否显示"},{default:U((()=>[j(S,{modelValue:e.params.status,"onUpdate:modelValue":g[8]||(g[8]=a=>e.params.status=a),label:"1"},{default:U((()=>[w("发布")])),_:1},8,["modelValue"]),j(S,{modelValue:e.params.status,"onUpdate:modelValue":g[9]||(g[9]=a=>e.params.status=a),label:"2"},{default:U((()=>[w("不发布")])),_:1},8,["modelValue"])])),_:1})]),j(C,null,{default:U((()=>[j(W,{type:"primary",onClick:g[10]||(g[10]=e=>A.submit("params"))},{default:U((()=>[w("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
//# sourceMappingURL=edit-legacy.js.map
