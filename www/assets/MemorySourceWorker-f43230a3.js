import{a as I,c8 as v,c9 as S,c7 as M,cb as b,c6 as w,Y as D}from"./index-15bfda31.js";import{e as R,n as Q,t as Z}from"./featureConversionUtils-2143b43a.js";import{t as A,n as k}from"./objectIdUtils-789e911a.js";import{m as C}from"./FeatureStore-822fb54c.js";import{f as _,g as E}from"./projectionSupport-02c712cc.js";import{e as P}from"./QueryEngine-32b51910.js";import{i as G,o as $,a as z}from"./clientSideDefaults-4b748b09.js";import{y as B,u as g,d as x,c as T,h as q}from"./sourceUtils-1261dde1.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BoundsStore-e2f7f0c2.js";import"./PooledRBush-1174f763.js";import"./timeSupport-034f0048.js";import"./normalizeUtils-06f22fe0.js";import"./normalizeUtilsCommon-7f371846.js";import"./utils-01f4694e.js";import"./json-48e3ea08.js";import"./WhereClause-7a1c91fe.js";import"./executionError-c92d3b85.js";import"./QueryEngineCapabilities-42e44ded.js";import"./quantizationUtils-326a5890.js";import"./utils-2803e185.js";import"./generateRendererUtils-b96f53c5.js";const L=w,W={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:w},U={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function H(m){return D(m)?m.z!=null:!!m.hasZ}function V(m){return D(m)?m.m!=null:!!m.hasM}class Ie{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:a}=e,i=this._inferLayerProperties(a,e.fields),d=e.fields||[],p=e.hasM!=null?e.hasM:!!i.hasM,f=e.hasZ!=null?e.hasZ:!!i.hasZ,c=!e.spatialReference&&!i.spatialReference,u=c?L:e.spatialReference||i.spatialReference,y=c?W:null,r=e.geometryType||i.geometryType,l=!r;let o=e.objectIdField||i.objectIdField,s=e.timeInfo;if(!l&&(c&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!r))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!o)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(i.objectIdField&&o!==i.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${o}" doesn't match the field name "${i.objectIdField}", found in the provided fields`}),o=i.objectIdField),o&&!i.objectIdField){let n=null;d.some(h=>h.name===o&&(n=h,!0))?(n.type="esriFieldTypeOID",n.editable=!1,n.nullable=!1):d.unshift({alias:o,name:o,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const n of d){if(n.name==null&&(n.name=n.alias),n.alias==null&&(n.alias=n.name),!n.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:n});if(n.name===o&&(n.type="esriFieldTypeOID"),!v.jsonValues.includes(n.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${n.name}"`,{field:n})}const F={};for(const n of d)if(n.type!=="esriFieldTypeOID"&&n.type!=="esriFieldTypeGlobalID"){const h=S(n);h!==void 0&&(F[n.name]=h)}if(this._fieldsIndex=new M(d),this._createDefaultAttributes=G(F,o),s){if(s.startTimeField){const n=this._fieldsIndex.get(s.startTimeField);n?(s.startTimeField=n.name,n.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const n=this._fieldsIndex.get(s.endTimeField);n?(s.endTimeField=n.name,n.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const n=this._fieldsIndex.get(s.trackIdField);n?s.trackIdField=n.name:(s.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:s}}),s=null)}const j={warnings:t,featureErrors:[],layerDefinition:{...U,drawingInfo:$(r),templates:z(F),extent:y,geometryType:r,objectIdField:o,fields:d,hasZ:f,hasM:p,timeInfo:s},assignedObjectIds:{}};if(this._queryEngine=new P({fields:d,geometryType:r,hasM:p,hasZ:f,objectIdField:o,spatialReference:u,featureStore:new C({geometryType:r,hasM:p,hasZ:f}),timeInfo:s,cacheSpatialQueries:!0}),!a||!a.length)return this._nextObjectId=A,j;const O=k(o,a);return this._nextObjectId=O+1,await _(a,u),this._loadInitialFeatures(j,a)}async applyEdits(e){const{spatialReference:t,geometryType:a}=this._queryEngine;return await Promise.all([B(t,a),_(e.adds,t),_(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let a,i,d=null,p=null,f=null;for(const c of e){const u=c.geometry;if(u!=null&&(d||(d=b(u)),p||(p=u.spatialReference),a==null&&(a=H(u)),i==null&&(i=V(u)),d&&p&&a!=null&&i!=null))break}if(t&&t.length){let c=null;t.some(u=>{const y=u.type==="esriFieldTypeOID",r=!u.type&&u.name&&u.name.toLowerCase()==="objectid";return c=u,y||r})&&(f=c.name)}return{geometryType:d,spatialReference:p,objectIdField:f,hasM:i,hasZ:a}}async _loadInitialFeatures(e,t){const{geometryType:a,hasM:i,hasZ:d,objectIdField:p,spatialReference:f,featureStore:c}=this._queryEngine,u=[];for(const l of t){if(l.uid!=null&&(e.assignedObjectIds[l.uid]=-1),l.geometry&&a!==b(l.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const o=this._createDefaultAttributes(),s=x(this._fieldsIndex,o,l.attributes,!0,e.warnings);s?e.featureErrors.push(s):(this._assignObjectId(o,l.attributes,!0),l.attributes=o,l.uid!=null&&(e.assignedObjectIds[l.uid]=l.attributes[p]),l.geometry!=null&&(l.geometry=E(l.geometry,l.geometry.spatialReference,f)),u.push(l))}c.addMany(R([],u,a,d,i,p));const{fullExtent:y,timeExtent:r}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=y,r){const{start:l,end:o}=r;e.layerDefinition.timeInfo.timeExtent=[l,o]}return e}async _applyEdits(e){const{adds:t,updates:a,deletes:i}=e,d={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(d,t),a&&a.length&&this._applyUpdateEdits(d,a),i&&i.length){for(const c of i)d.deleteResults.push(T(c));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:p,timeExtent:f}=await this._queryEngine.fetchRecomputedExtents();return{extent:p,timeExtent:f,featureEditResults:d}}_applyAddEdits(e,t){const{addResults:a}=e,{geometryType:i,hasM:d,hasZ:p,objectIdField:f,spatialReference:c,featureStore:u}=this._queryEngine,y=[];for(const r of t){if(r.geometry&&i!==b(r.geometry)){a.push(g("Incorrect geometry type."));continue}const l=this._createDefaultAttributes(),o=x(this._fieldsIndex,l,r.attributes);if(o)a.push(o);else{if(this._assignObjectId(l,r.attributes),r.attributes=l,r.uid!=null){const s=r.attributes[f];e.uidToObjectId[r.uid]=s}if(r.geometry!=null){const s=r.geometry.spatialReference??c;r.geometry=E(q(r.geometry,s),s,c)}y.push(r),a.push(T(r.attributes[f]))}}u.addMany(R([],y,i,p,d,f))}_applyUpdateEdits({updateResults:e},t){const{geometryType:a,hasM:i,hasZ:d,objectIdField:p,spatialReference:f,featureStore:c}=this._queryEngine;for(const u of t){const{attributes:y,geometry:r}=u,l=y&&y[p];if(l==null){e.push(g(`Identifier field ${p} missing`));continue}if(!c.has(l)){e.push(g(`Feature with object id ${l} missing`));continue}const o=Q(c.getFeature(l),a,d,i);if(r!=null){if(a!==b(r)){e.push(g("Incorrect geometry type."));continue}const s=r.spatialReference??f;o.geometry=E(q(r,s),s,f)}if(y){const s=x(this._fieldsIndex,o.attributes,y);if(s){e.push(s);continue}}c.add(Z(o,a,d,i,p)),e.push(T(l))}}_assignObjectId(e,t,a=!1){const i=this._queryEngine.objectIdField;a&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}export{Ie as default};
