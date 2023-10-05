import{t as m,w as d,m as u,z as y,N as h,O as b}from"./index-15bfda31.js";import c from"./FeatureLayerView2D-a6dd1307.js";import"./Container-54d8fada.js";import"./definitions-0a086491.js";import"./enums-b14466b3.js";import"./Texture-883f5263.js";import"./LayerView-6963c098.js";import"./AttributeStoreView-2fc02948.js";import"./TiledDisplayObject-2731c918.js";import"./color-34a435e3.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-8e2e2001.js";import"./VertexArrayObject-163e1eff.js";import"./ProgramTemplate-055769ff.js";import"./GeometryUtils-e8e70eb8.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-8827fc6a.js";import"./featureConversionUtils-2143b43a.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-63a2a7e0.js";import"./ExpandedCIM-580d1f7d.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-1719eb33.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-326a5890.js";import"./floatRGBA-f2126a37.js";import"./util-84035865.js";import"./BitmapTileContainer-b429ce59.js";import"./Bitmap-6f9faf2e.js";import"./TileContainer-a9a4b2f9.js";import"./CircularArray-ef508845.js";import"./BufferPool-f244b0da.js";import"./FeatureContainer-e0a0bfe9.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-e3becfea.js";import"./RefreshableLayerView-93c82580.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends c{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var l;const i=this.layer.sublayers.some(p=>p.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((l=this.tileRenderer)==null?void 0:l.updating),a=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),a}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new b().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const se=n;export{se as default};
