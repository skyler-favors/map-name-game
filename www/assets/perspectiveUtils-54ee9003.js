import{t as l,v as a,w as R,bd as S,ek as d,dk as E,aM as H,el as $,em as y,en as h,eo as p,W as g,ep as x,U as c,aH as J}from"./index-8b2f21d4.js";import{c as N}from"./normalizeUtilsSync-12011b14.js";import{e as u}from"./mat3f64-221ce671.js";let n=class extends S{constructor(o){super(o)}get bounds(){const o=this.coords;return o==null||o.extent==null?null:d(o.extent)}get coords(){var t;const o=(t=this.element.georeference)==null?void 0:t.coords;return E(o,this.spatialReference).geometry}get normalizedCoords(){return H.fromJSON(N(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};l([a()],n.prototype,"spatialReference",void 0),l([a()],n.prototype,"element",void 0),l([a()],n.prototype,"bounds",null),l([a()],n.prototype,"coords",null),l([a()],n.prototype,"normalizedCoords",null),l([a()],n.prototype,"normalizedBounds",null),n=l([R("esri.layers.support.MediaElementView")],n);const r=J(),s=u(),i=u(),m=u();function q(e,o,t){return $(r,o[0],o[1],1),y(r,r,h(s,t)),r[2]===0?p(e,r[0],r[1]):p(e,r[0]/r[2],r[1]/r[2])}function A(e,o,t){return f(i,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),f(m,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),g(e,x(i,i),m),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function f(e,o,t,z,b,C,k,v,j){c(e,o,z,C,t,b,k,1,1,1),$(r,v,j,1),x(s,e);const[w,B,M]=y(r,r,h(s,s));return c(s,w,0,0,0,B,0,0,0,M),g(e,s,e)}export{q as h,n as i,A as j};
