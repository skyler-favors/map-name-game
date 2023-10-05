import{Q as o,E as s,a5 as b,c as u,V as c,a6 as p,a7 as h,A as v,S as f,a8 as A,a9 as g,aa as x,ab as F,ac as L,v as P,ad as V,ae as w}from"./arcadeUtils-14ad1d2b.js";import{t as m,e as y}from"./executionError-c92d3b85.js";import"./index-15bfda31.js";import"./arcadeTimeUtils-605da938.js";import"./number-b78dfa32.js";import"./featureConversionUtils-2143b43a.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";function l(a,e){return a&&a.domain?a.domain.type==="coded-value"||a.domain.type==="codedValue"?v.convertObjectToArcadeDictionary({type:"codedValue",name:a.domain.name,dataType:w[a.field.type],codedValues:a.domain.codedValues.map(t=>({name:t.name,code:t.code}))},f(e)):v.convertObjectToArcadeDictionary({type:"range",name:a.domain.name,dataType:w[a.field.type],min:a.domain.min,max:a.domain.max},f(e)):null}function G(a){a.mode==="async"&&(a.functions.domain=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,3,e,t),s(n[0]))return l(b(n[0],u(n[1]),n[2]===void 0?void 0:n[2]),e);if(c(n[0]))return await n[0]._ensureLoaded(),l(p(u(n[1]),n[0],null,n[2]===void 0?void 0:n[2]),e);throw new m(e,y.InvalidParameter,t)})},a.functions.subtypes=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),s(n[0])){const r=h(n[0]);return r?v.convertObjectToArcadeDictionary(r,f(e)):null}if(c(n[0])){await n[0]._ensureLoaded();const r=n[0].subtypes();return r?v.convertObjectToArcadeDictionary(r,f(e)):null}throw new m(e,y.InvalidParameter,t)})},a.functions.domainname=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,4,e,t),s(n[0]))return A(n[0],u(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=p(u(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return g(r,n[2])}throw new m(e,y.InvalidParameter,t)})},a.signatures.push({name:"domainname",min:2,max:4}),a.functions.domaincode=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,4,e,t),s(n[0]))return x(n[0],u(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=p(u(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return F(r,n[2])}throw new m(e,y.InvalidParameter,t)})},a.signatures.push({name:"domaincode",min:2,max:4})),a.functions.text=function(e,t){return a.standardFunctionAsync(e,t,(i,d,n)=>{if(o(n,1,2,e,t),!c(n[0]))return L(n[0],n[1]);{const r=P(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal)}})},a.functions.gdbversion=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),s(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new m(e,y.InvalidParameter,t)})},a.functions.schema=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),c(n[0]))return await n[0].load(),v.convertObjectToArcadeDictionary(n[0].schema(),f(e));if(s(n[0])){const r=V(n[0]);return r?v.convertObjectToArcadeDictionary(r,f(e)):null}throw new m(e,y.InvalidParameter,t)})}}export{G as registerFunctions};
