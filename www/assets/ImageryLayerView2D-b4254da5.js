import{t as s,v as o,w as f,bd as T,n as _,s as P,G as b,k as I,aO as B,dG as z,m as w,fb as R,ac as A,bc as U,a as V,aF as C,aI as E,g as M,dO as $,V as S}from"./index-8b2f21d4.js";import{d as O,f as N,h as j}from"./RasterVFDisplayObject-233aba44.js";import{f as G,d as J}from"./LayerView-f5a5dd29.js";import{o as L}from"./GraphicsView2D-430779b9.js";import{n as H}from"./HighlightGraphicContainer-634cbc67.js";import{M as W,m as K,f as Q}from"./dataUtils-924a204f.js";import{a as X}from"./BitmapContainer-4fbad83b.js";import{h as Y}from"./Container-1f2e7ced.js";import{l as Z}from"./Bitmap-a750d61c.js";import{v as ee}from"./ExportStrategy-e9cfda86.js";import{q as te}from"./rasterProjectionHelper-bf65c598.js";import{T as q}from"./color-a2a7d330.js";import{i as ie}from"./WGLContainer-b4d3e0a3.js";import{p as re}from"./popupUtils-8d4f36fa.js";import{a as ae}from"./RefreshableLayerView-fd08049c.js";import"./VertexArrayObject-21e5f1d1.js";import"./Texture-c93644f0.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./ExpandedCIM-96ffcc64.js";import"./BidiEngine-9a40f2f4.js";import"./OptimizedGeometry-33b2eb0d.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./utils-08e7b3c7.js";import"./GeometryUtils-08253b45.js";import"./definitions-b33f5173.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-456038c2.js";import"./floatRGBA-fcc6d016.js";import"./normalizeUtilsSync-12011b14.js";import"./normalizeUtilsCommon-197b6403.js";import"./projectionSupport-ce2854a5.js";import"./json-48e3ea08.js";import"./AttributeStoreView-a81a2ecf.js";import"./TiledDisplayObject-60b8a26e.js";import"./visualVariablesUtils-db30660e.js";import"./util-b28f57a9.js";import"./Matcher-f3c68087.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-0459760b.js";import"./earcut-7b82c9f6.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-7f8d0b0f.js";import"./ComputedAttributeStorage-899451f8.js";import"./featureConversionUtils-2010756d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./arcadeTimeUtils-fcd55b27.js";import"./executionError-c92d3b85.js";import"./normalizeUtils-2528a9ea.js";import"./utils-64e0d91e.js";import"./BaseGraphicContainer-aedf59b0.js";import"./FeatureContainer-4cabc712.js";import"./TileContainer-100e4407.js";import"./vec3f32-ad1dc57f.js";import"./ProgramTemplate-7fc77c6e.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";let h=class extends T{constructor(){super(...arguments),this.attached=!1,this.container=new Y,this.updateRequested=!1,this.type="imagery",this._bitmapView=new X}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{_(t)||P.getLogger(this).error(t)})}hitTest(e){return new b({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new ee({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:t.extent}}).catch(e=>{_(e)||P.getLogger(this).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(t)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),r=W(i,t);return r!=null?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(e,t,i,r){var c;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const a=await this.layer.fetchImage(e,t,i,r);if(a.imageBitmap)return a.imageBitmap;const n=await this.layer.applyRenderer(a.pixelData,{signal:r.signal}),l=new Z(n.pixelBlock,(c=n.extent)==null?void 0:c.clone(),a.pixelData.pixelBlock);return l.filter=p=>this.layer.applyFilter(p),l}};s([o()],h.prototype,"attached",void 0),s([o()],h.prototype,"container",void 0),s([o()],h.prototype,"layer",void 0),s([o()],h.prototype,"strategy",void 0),s([o()],h.prototype,"timeExtent",void 0),s([o()],h.prototype,"view",void 0),s([o()],h.prototype,"updateRequested",void 0),s([o()],h.prototype,"updating",null),s([o()],h.prototype,"type",void 0),h=s([f("esri.views.2d.layers.imagery.ImageryView2D")],h);const se=h;class oe extends ie{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[O],target:()=>this.children,drawPhase:q.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===q.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends T{constructor(e){super(e),this._loading=null,this.update=I((t,i)=>this._update(t,i).catch(r=>{_(r)||P.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:a}=e.state,n=new B({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[l,c]=e.state.size;this._loading=this.fetchPixels(n,l,c,i);const p=await this._loading;this._addToDisplay(p,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(e.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=e,n=new N(a);n.offset=[0,0],n.symbolizerParameters=t,n.rawPixelData=e,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=a.width*t.symbolTileSize,n.height=a.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};s([o()],y.prototype,"fetchPixels",void 0),s([o()],y.prototype,"container",void 0),s([o()],y.prototype,"_loading",void 0),s([o()],y.prototype,"updating",null),y=s([f("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const ne=y;let d=class extends z{constructor(){super(...arguments),this.attached=!1,this.container=new oe,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:l,width:c,height:p}=K(e,t,i,n,a);if(a!=null&&!a.intersects(e))return{extent:l,pixelBlock:null};const m={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(m)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===m.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,c,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=m;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?Q(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new ne({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(w(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),R),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const e=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new b({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams)}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,a=this._dataParameters.bbox===e.bbox;return t&&i&&r&&a}async _getProjectedFullExtent(e){try{return await te(this.layer.fullExtent,e)}catch{try{const i=(await A(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?B.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([o()],d.prototype,"attached",void 0),s([o()],d.prototype,"container",void 0),s([o()],d.prototype,"layer",void 0),s([o()],d.prototype,"timeExtent",void 0),s([o()],d.prototype,"type",void 0),s([o()],d.prototype,"view",void 0),s([o()],d.prototype,"updating",null),d=s([f("esri.views.2d.layers.imagery.VectorFieldView2D")],d);const le=d,he=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,r){const{layer:a}=this;if(!i)throw new V("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:n}=a,l=re(a,r);if(!n||l==null)throw new V("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const c=await l.getRequiredFields(),p=new C;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=c,p.outSpatialReference=i.spatialReference;const{resolution:m,spatialReference:g}=this.view,x=this.view.type==="2d"?new E(m,m,g):new E(.5*m,.5*m,g),{returnTopmostRaster:u,showNoDataRecords:D}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:D,signal:r!=null?r.signal:null};return a.queryVisibleRasters(p,k).then(F=>F)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return s([o()],t.prototype,"layer",void 0),s([o()],t.prototype,"suspended",void 0),s([o(U)],t.prototype,"timeExtent",void 0),s([o()],t.prototype,"view",void 0),t=s([f("esri.views.layers.ImageryLayerView")],t),t};let v=class extends he(ae(G(J))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new M,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new L({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new H(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([w(()=>this.layer.blendMode??"normal",e=>this.subview&&(this.subview.container.blendMode=e),R),w(()=>this.layer.effect??null,e=>this.subview&&(this.subview.container.effect=e),R),w(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},$),w(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},$),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),w(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(e=this.subview)==null||e.destroy(),this.subview=null,(t=this._highlightView)==null||t.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:S.isCollection(e)?e.at(0):e)instanceof b))return{remove:()=>{}};let i=[];return Array.isArray(e)||S.isCollection(e)?i=e.map(r=>r.clone()):e instanceof b&&(i=[e.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var i,r;if(!this.view)return;const e=(i=this.layer.renderer)==null?void 0:i.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:a}=this.subview;if(a===t)return this._attachSubview(this.subview),void(a==="flow"?this.subview.redrawOrRefetch():a==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=t==="imagery"?new se({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new j({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){e!=null&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};s([o()],v.prototype,"pixelData",null),s([o()],v.prototype,"subview",void 0),v=s([f("esri.views.2d.layers.ImageryLayerView2D")],v);const ut=v;export{ut as default};