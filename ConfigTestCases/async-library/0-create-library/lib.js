/*! For license information please see lib.js.LICENSE.txt */
var r,e,t,a,o,n={847:(r,e,t)=>{t.a(r,(async r=>{t.d(e,{a:()=>a});const a=await Promise.resolve(42);r()}),1)}},p={};function c(r){var e=p[r];if(void 0!==e)return e.exports;var t=p[r]={exports:{}};return n[r](t,t.exports,c),t.exports}r="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t=r=>{r&&(r.forEach((r=>r.r--)),r.forEach((r=>r.r--?r.r++:r())))},a=r=>!--r.r&&r(),o=(r,e)=>r?r.push(e):a(e),c.a=(n,p,c)=>{var i,s,f,u=c&&[],v=n.exports,b=!0,h=!1,l=(e,t,a)=>{h||(h=!0,t.r+=e.length,e.map(((e,o)=>e[r](t,a))),h=!1)},m=new Promise(((r,e)=>{f=e,s=()=>(r(v),t(u),u=0)}));m[e]=v,m[r]=(r,e)=>{if(b)return a(r);i&&l(i,r,e),o(u,r),m.catch(e)},n.exports=m,p((n=>{if(!n)return s();var p,c;i=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[r])return n;if(n.then){var p=[];n.then((r=>{c[e]=r,t(p),p=0}));var c={};return c[r]=(r,e)=>(o(p,r),n.catch(e)),c}}var i={};return i[r]=r=>a(r),i[e]=n,i})))(n);var f=new Promise(((r,t)=>{(p=()=>r(c=i.map((r=>r[e])))).r=0,l(i,p,t)}));return p.r?f:c})).then(s,f),b=!1},c.d=(r,e)=>{for(var t in e)c.o(e,t)&&!c.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},c.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e);var i=c(847),s=(i=await i).a;export{s as a};