import{f as i}from"./utils-64e0d91e.js";import{m as p}from"./queryTopFeatures-2ffbb486.js";import{cv as a}from"./index-8b2f21d4.js";import"./normalizeUtils-2528a9ea.js";import"./normalizeUtilsCommon-197b6403.js";import"./query-b6502c76.js";import"./pbfQueryUtils-07f9e999.js";import"./pbf-a9812452.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function y(o,t,r){const m=i(o);return(await p(m,a.from(t),{...r})).data.count}export{y as executeForTopCount};