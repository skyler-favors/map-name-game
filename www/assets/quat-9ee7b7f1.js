import{e as S}from"./mat3f64-221ce671.js";import{e as y}from"./quatf64-3363c48e.js";import{bR as I,bS as T,bT as Y,bU as L,bV as O,bW as W,bX as X,bY as Z,bZ as D,b_ as H,b$ as J,c0 as R,c1 as U,c2 as g,c3 as V,c4 as k,aH as w,aJ as _,c5 as B}from"./index-15bfda31.js";function C(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function A(n,o,c){c*=.5;const r=Math.sin(c);return n[0]=r*o[0],n[1]=r*o[1],n[2]=r*o[2],n[3]=Math.cos(c),n}function F(n,o){const c=2*Math.acos(o[3]),r=Math.sin(c/2);return r>I()?(n[0]=o[0]/r,n[1]=o[1]/r,n[2]=o[2]/r):(n[0]=1,n[1]=0,n[2]=0),c}function j(n,o,c){const r=o[0],e=o[1],a=o[2],t=o[3],u=c[0],i=c[1],h=c[2],M=c[3];return n[0]=r*M+t*u+e*h-a*i,n[1]=e*M+t*i+a*u-r*h,n[2]=a*M+t*h+r*i-e*u,n[3]=t*M-r*u-e*i-a*h,n}function G(n,o,c){c*=.5;const r=o[0],e=o[1],a=o[2],t=o[3],u=Math.sin(c),i=Math.cos(c);return n[0]=r*i+t*u,n[1]=e*i+a*u,n[2]=a*i-e*u,n[3]=t*i-r*u,n}function K(n,o,c){c*=.5;const r=o[0],e=o[1],a=o[2],t=o[3],u=Math.sin(c),i=Math.cos(c);return n[0]=r*i-a*u,n[1]=e*i+t*u,n[2]=a*i+r*u,n[3]=t*i-e*u,n}function N(n,o,c){c*=.5;const r=o[0],e=o[1],a=o[2],t=o[3],u=Math.sin(c),i=Math.cos(c);return n[0]=r*i+e*u,n[1]=e*i-r*u,n[2]=a*i+t*u,n[3]=t*i-a*u,n}function Q(n,o){const c=o[0],r=o[1],e=o[2];return n[0]=c,n[1]=r,n[2]=e,n[3]=Math.sqrt(Math.abs(1-c*c-r*r-e*e)),n}function p(n,o,c,r){const e=o[0],a=o[1],t=o[2],u=o[3];let i,h,M,l,f,b=c[0],m=c[1],q=c[2],$=c[3];return h=e*b+a*m+t*q+u*$,h<0&&(h=-h,b=-b,m=-m,q=-q,$=-$),1-h>I()?(i=Math.acos(h),M=Math.sin(i),l=Math.sin((1-r)*i)/M,f=Math.sin(r*i)/M):(l=1-r,f=r),n[0]=l*e+f*b,n[1]=l*a+f*m,n[2]=l*t+f*q,n[3]=l*u+f*$,n}function nn(n){const o=B,c=o(),r=o(),e=o(),a=Math.sqrt(1-c),t=Math.sqrt(c);return n[0]=a*Math.sin(2*Math.PI*r),n[1]=a*Math.cos(2*Math.PI*r),n[2]=t*Math.sin(2*Math.PI*e),n[3]=t*Math.cos(2*Math.PI*e),n}function on(n,o){const c=o[0],r=o[1],e=o[2],a=o[3],t=c*c+r*r+e*e+a*a,u=t?1/t:0;return n[0]=-c*u,n[1]=-r*u,n[2]=-e*u,n[3]=a*u,n}function rn(n,o){return n[0]=-o[0],n[1]=-o[1],n[2]=-o[2],n[3]=o[3],n}function v(n,o){const c=o[0]+o[4]+o[8];let r;if(c>0)r=Math.sqrt(c+1),n[3]=.5*r,r=.5/r,n[0]=(o[5]-o[7])*r,n[1]=(o[6]-o[2])*r,n[2]=(o[1]-o[3])*r;else{let e=0;o[4]>o[0]&&(e=1),o[8]>o[3*e+e]&&(e=2);const a=(e+1)%3,t=(e+2)%3;r=Math.sqrt(o[3*e+e]-o[3*a+a]-o[3*t+t]+1),n[e]=.5*r,r=.5/r,n[3]=(o[3*a+t]-o[3*t+a])*r,n[a]=(o[3*a+e]+o[3*e+a])*r,n[t]=(o[3*t+e]+o[3*e+t])*r}return n}function en(n,o,c,r){const e=.5*Math.PI/180;o*=e,c*=e,r*=e;const a=Math.sin(o),t=Math.cos(o),u=Math.sin(c),i=Math.cos(c),h=Math.sin(r),M=Math.cos(r);return n[0]=a*i*M-t*u*h,n[1]=t*u*M+a*i*h,n[2]=t*i*h-a*u*M,n[3]=t*i*M+a*u*h,n}function cn(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const an=T,tn=Y,un=L,hn=j,Mn=O,sn=W,ln=X,z=Z,fn=z,E=D,bn=E,d=H,mn=J,qn=R;function $n(n,o,c){const r=U(o,c);return r<-.999999?(g(s,pn,o),V(s)<1e-6&&g(s,gn,o),k(s,s),A(n,s,Math.PI),n):r>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(g(s,o,c),n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=1+r,d(n,n))}const s=w(),pn=_(1,0,0),gn=_(0,1,0);function dn(n,o,c,r,e,a){return p(P,o,e,a),p(x,c,r,a),p(n,P,x,2*a*(1-a)),n}const P=y(),x=y();function Pn(n,o,c,r){const e=xn;return e[0]=c[0],e[3]=c[1],e[6]=c[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-o[0],e[5]=-o[1],e[8]=-o[2],d(n,v(n,e))}const xn=S();Object.freeze(Object.defineProperty({__proto__:null,add:un,calculateW:Q,conjugate:rn,copy:an,dot:sn,equals:qn,exactEquals:mn,fromEuler:en,fromMat3:v,getAxisAngle:F,identity:C,invert:on,len:fn,length:z,lerp:ln,mul:hn,multiply:j,normalize:d,random:nn,rotateX:G,rotateY:K,rotateZ:N,rotationTo:$n,scale:Mn,set:tn,setAxes:Pn,setAxisAngle:A,slerp:p,sqlerp:dn,sqrLen:bn,squaredLength:E,str:cn},Symbol.toStringTag,{value:"Module"}));export{mn as K,rn as S,en as k,A as v,F as x,j as y};