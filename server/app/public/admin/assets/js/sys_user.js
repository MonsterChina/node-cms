import{h as a,A as t}from"./index.js";let s=s=>a({url:"".concat(t.BASE_API,"/api/sysUser/list?cur=").concat(s,"&pageSize=10"),method:"get"}),e=s=>a({url:"".concat(t.BASE_API,"/api/sysUser/create"),method:"post",data:s}),c=s=>a({url:"".concat(t.BASE_API,"/api/sysUser/delete?id=").concat(s),method:"get"}),o=s=>a({url:"".concat(t.BASE_API,"/api/sysUser/update"),method:"post",data:s}),r=s=>a({url:"".concat(t.BASE_API,"/api/sysUser/detail?id=").concat(s),method:"get"});export{c as a,e as c,r as d,s as l,o as u};
