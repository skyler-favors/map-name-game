import{N as n}from"./index-15bfda31.js";import{T as i}from"./color-34a435e3.js";import{i as l,c as a,p as o}from"./WGLContainer-8e2e2001.js";const c=(s,e)=>s.key.level-e.key.level!=0?s.key.level-e.key.level:s.key.row-e.key.row!=0?s.key.row-e.key.row:s.key.col-e.key.col;class u extends l{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(c),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,t=super.createRenderParams(e);return t.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,t.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),t}prepareRenderPasses(e){const r=super.prepareRenderPasses(e);return r.push(e.registerRenderPass({name:"stencil",brushes:[a],drawPhase:i.DEBUG|i.MAP|i.HIGHLIGHT,target:()=>this.getStencilTarget()})),n("esri-tiles-debug")&&r.push(e.registerRenderPass({name:"tileInfo",brushes:[o],drawPhase:i.DEBUG,target:()=>this.children})),r}getStencilTarget(){return this.children}setStencilReference(e){let r=1;for(const t of this.children)t.stencilRef=r++}}export{u as i};
