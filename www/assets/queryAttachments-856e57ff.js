import{ct as h,cu as f,aa as p}from"./index-15bfda31.js";import{t as d}from"./query-6521c192.js";import{l}from"./AttachmentInfo-10bd33e0.js";import"./normalizeUtils-06f22fe0.js";import"./normalizeUtilsCommon-7f371846.js";import"./utils-01f4694e.js";import"./pbfQueryUtils-47bb6df3.js";import"./pbf-94467490.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function z(n,t){const o={};for(const a of t){const{parentObjectId:e,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:i}=r,u=h(f(`${n.path}/${e}/attachments/${i}`)),m=l.fromJSON(r);m.set({url:u,parentObjectId:e,parentGlobalId:s}),o[e]?o[e].push(m):o[e]=[m]}}return o}function G(n,t,o){let a={query:d({...n.query,f:"json",...y(t)})};return o&&(a={...o,...a,query:{...o.query,...a.query}}),p(n.path+"/queryAttachments",a).then(e=>e.data.attachmentGroups)}async function S(n,t,o){const{objectIds:a}=t,e=[];for(const s of a)e.push(p(n.path+"/"+s+"/attachments",o));return Promise.all(e).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{G as executeAttachmentQuery,S as fetchAttachments,z as processAttachmentQueryResult};