import{r as S,w as _,b as w,d as T,e as O,f as k,o as y,c as h,a as x,t as F,g as L,F as V}from"./@vue.js";const D=t=>t+"_"+(Date.now()+Math.floor(Math.random()*1e6)),m=()=>{const t=typeof window<"u"?window:global;return t&&"tinymce"in t?t.tinymce:null};function b(t){return t?t.getContent():""}function C(t,a){!a||a.setContent(t)}function A(t,a){if(!!a){if(a.resetContent)return a.resetContent(t);a.setContent(t),a.setDirty(!1),a.undoManager.clear()}}function v(t,a=!0){!t||t.mode.set(a?"readonly":"design")}function B(t,a,u){return new Promise((r,o)=>{let{images_upload_url:n,images_upload_credentials:l,custom_images_upload_header:c,custom_images_upload_param:f,custom_images_upload_callback:g}=t||{},i,p;i=new XMLHttpRequest,i.withCredentials=!!l,i.open("POST",n||""),c&&Object.keys(c).forEach(e=>{i.setRequestHeader(e,c[e])}),i.upload.onprogress=function(e){u(e.loaded/e.total*100)},i.onload=function(){if(i.status===403){o({message:"HTTP Error: "+i.status,remove:!0});return}if(i.status<200||i.status>=300){o("HTTP Error: "+i.status);return}let e=JSON.parse(i.responseText);if(!e){o("Invalid JSON: "+i.responseText);return}let s=typeof g=="function"?g(e):e.location;if(!s){o("Failed Path: location image path is error/empty");return}r(s)},i.onerror=function(){o("Image upload failed due to a XHR Transport error. Code: "+i.status)},p=new FormData,p.append("file",a.blob(),a.filename()),f&&Object.keys(f).forEach(e=>{p.append(e,f[e])}),i.send(p)})}function M(t){return"body{font-size: 14px;} img{padding: 0 2px;} "+(t||"")}const H=()=>{let t={status:{},loadedCallbacks:{}};const a=(o,n)=>{const l=document.createElement("script");l.id=D("tiny-script"),l.type="application/javascript",l.src=o,l.referrerPolicy="origin";const c=()=>{l.removeEventListener("load",c),n()};l.addEventListener("load",c),(document.head||document.body).appendChild(l)},u=o=>{!t.loadedCallbacks[o]||(t.loadedCallbacks[o].forEach(n=>{typeof n.handler=="function"&&n.handler.call(n.scope)}),t.loadedCallbacks[o]=void 0)};return{load:(o,n,l)=>{if(n&&(t.loadedCallbacks[o]||(t.loadedCallbacks[o]=[]),t.loadedCallbacks[o].push({handler:n,scope:l||globalThis})),t.status[o]==="LOADED"){u(o);return}t.status[o]!=="LOADING"&&(t.status[o]="LOADING",a(o,()=>{t.status[o]="LOADED",u(o)}))}}},N=H(),P=["id"],$={key:0},I={name:"Vue3Tinymce"},E=Object.assign(I,{props:{modelValue:String,setting:{type:Object,default:()=>({})},setup:Function,disabled:Boolean,scriptSrc:String,debug:Boolean},emits:["update:modelValue","init","change"],setup(t,{expose:a,emit:u}){const r=t;let o=!0;const n=S({editor:null,id:D("tinymce"),err:""}),l=()=>{var e;return String((e=r.modelValue)!=null?e:"")},c=e=>u("update:modelValue",e),f=(e,s,d)=>{!r.debug||console.log(`\u6765\u81EA\uFF1A${e.type} | 
 ${s} 
 ${d||"--"}`)},g=(e,s)=>{s||(s=n.editor);const d=b(s);f(e,d),c(d),u("change",d)},i=e=>{C(l(),e),r.disabled&&e.mode.get()!=="readonly"&&v(e),e.on("change input undo redo",s=>{g(s,e)}),u("init",e)},p=()=>{var e;if(m()===null){n.err="tinymce is null";return}r.debug&&console.warn("vue3-tinymce \u8FDB\u5165debug\u6A21\u5F0F");let s={...r.setting,selector:`#${n.id}`,content_style:M((e=r.setting)==null?void 0:e.content_style),setup:d=>{n.editor=d,r.setup&&r.setup(d),d.on("init",()=>i(d))}};r.setting.custom_images_upload&&(s.images_upload_handler=(...d)=>B.apply(null,[r.setting,...d])),m().init(s),o=!1};return _(()=>r.modelValue,(e,s)=>{if(!(!n.editor||!n.editor.initialized)&&!(s===e||e===b(n.editor))){if(f({type:"propsChanged to setContent"},e,s),e===null)return A("",n.editor);C(l(),n.editor)}}),_(()=>r.disabled,e=>{!n.editor||!n.editor.initialized||v(n.editor,e)}),a({id:n.id,editor:n.editor}),w(()=>{var e;if(m()!==null){p();return}const s=(e=r.scriptSrc)!=null?e:"https://cdn.bootcdn.net/ajax/libs/tinymce/6.1.2/tinymce.min.js";N.load(s,p)}),T(()=>{o||p()}),O(()=>{var e;!n.editor||(e=m())==null||e.remove(`#${n.id}`)}),k(()=>{var e;!n.editor||(e=m())==null||e.remove(`#${n.id}`)}),(e,s)=>(y(),h(V,null,[x("div",{id:n.id,class:"tiny-textarea"},null,8,P),n.err?(y(),h("p",$,F(n.err),1)):L("",!0)],64))}});E.install=function(t){t.component("Vue3Tinymce",E)};export{E as _};