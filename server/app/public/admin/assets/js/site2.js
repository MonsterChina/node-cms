import{h as e,A as i}from"./index.js";let t=()=>e({url:"".concat(i.BASE_API,"/api/site/find"),method:"get"}),a=({id:t,name:a,domain:o,email:d,icp:s,police:c,address:p,copyright:n,code:r,json:m})=>e({url:"".concat(i.BASE_API,"/api/site/updateInfo"),method:"post",data:{id:t,name:a,domain:o,email:d,icp:s,police:c,address:p,copyright:n,code:r,json:m}}),o=({id:t,title:a,keywords:o,description:d})=>e({url:"".concat(i.BASE_API,"/api/site/updateSeo"),method:"post",data:{id:t,title:a,keywords:o,description:d}}),d=()=>e({url:"".concat(i.BASE_API,"/api/site/runEnv"),method:"get"});export{o as a,d as r,t as s,a as u};