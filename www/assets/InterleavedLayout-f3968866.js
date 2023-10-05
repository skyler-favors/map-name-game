import{y as l,u as o,i as a,c as p,l as c,p as _,o as y,m as F,T as m,h as w,a as b,b as g,d as v,A as E,O as H,x as A,g as T,w as L,E as I,L as $,B as M,F as O,I as k,U as D,j as B,V as C,M as G,S as V,k as j,q as U,v as q,z as J,C as K,D as N,G as S,H as P}from"./BufferView-b77e86e6.js";import{e as f}from"./types-1305598a.js";import{bH as Q}from"./index-15bfda31.js";class h{constructor(e,t){this.layout=e,this.buffer=typeof t=="number"?new ArrayBuffer(t*e.stride):t;for(const i of e.fields.keys()){const s=e.fields.get(i);this[i]=new s.constructor(this.buffer,s.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new h(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,i=0,s=e.count){const r=this.stride;if(r%4==0){const d=new Uint32Array(e.buffer,t*r,s*r/4);new Uint32Array(this.buffer,i*r,s*r/4).set(d)}else{const d=new Uint8Array(e.buffer,t*r,s*r);new Uint8Array(this.buffer,i*r,s*r).set(d)}return this}}class u{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach(t=>this._fields.set(t[0],{...t[1],constructor:W(t[1].constructor)})))}vec2f(e,t){return this._appendField(e,o,t),this}vec2f64(e,t){return this._appendField(e,F,t),this}vec3f(e,t){return this._appendField(e,a,t),this}vec3f64(e,t){return this._appendField(e,m,t),this}vec4f(e,t){return this._appendField(e,p,t),this}vec4f64(e,t){return this._appendField(e,w,t),this}mat3f(e,t){return this._appendField(e,c,t),this}mat3f64(e,t){return this._appendField(e,b,t),this}mat4f(e,t){return this._appendField(e,_,t),this}mat4f64(e,t){return this._appendField(e,g,t),this}vec4u8(e,t){return this._appendField(e,A,t),this}f32(e,t){return this._appendField(e,l,t),this}f64(e,t){return this._appendField(e,y,t),this}u8(e,t){return this._appendField(e,v,t),this}u16(e,t){return this._appendField(e,T,t),this}i8(e,t){return this._appendField(e,B,t),this}vec2i8(e,t){return this._appendField(e,C,t),this}vec2i16(e,t){return this._appendField(e,U,t),this}vec2u8(e,t){return this._appendField(e,E,t),this}vec4u16(e,t){return this._appendField(e,$,t),this}u32(e,t){return this._appendField(e,M,t),this}_appendField(e,t,i){if(this._fields.has(e))return void Q(!1,`${e} already added to vertex buffer layout`);const s=t.ElementCount*f(t.ElementType),r=this._stride;this._stride+=s,this._fields.set(e,{size:s,constructor:t,offset:r,optional:i})}createBuffer(e){return new h(this,e)}createView(e){return new h(this,e)}clone(){const e=new u;return e._stride=this._stride,e._fields=new Map,this._fields.forEach((t,i)=>e._fields.set(i,t)),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach(t=>e=Math.max(e,f(t.constructor.ElementType))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function ee(){return new u}class te{constructor(e){this.fields=new Array,e.fields.forEach((t,i)=>{const s={...t,constructor:x(t.constructor)};this.fields.push([i,s])}),this.stride=e.stride}}const R=[l,o,a,p,c,_,y,F,m,w,b,g,v,E,H,A,T,L,I,$,M,O,k,D,B,C,G,V,j,U,q,J,K,N,S,P];function x(n){return`${n.ElementType}_${n.ElementCount}`}function W(n){return z.get(n)}const z=new Map;R.forEach(n=>z.set(x(n),n));export{ee as H,te as I};
