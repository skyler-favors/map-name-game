import{cv as i,b0 as a}from"./index-15bfda31.js";import{f as e}from"./utils-01f4694e.js";import{p as n}from"./queryTopFeatures-c7d35f76.js";import"./normalizeUtils-06f22fe0.js";import"./normalizeUtilsCommon-7f371846.js";import"./query-6521c192.js";import"./pbfQueryUtils-47bb6df3.js";import"./pbf-94467490.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function w(o,r,m){const p=e(o),t=await n(p,i.from(r),{...m});return{count:t.data.count,extent:a.fromJSON(t.data.extent)}}export{w as executeForTopExtents};
