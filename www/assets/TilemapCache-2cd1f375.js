import{bK as A,ax as D,fP as z,aa as T,fQ as S,a as m,bC as q,t as d,v as y,br as L,dv as x,m as P,z as C,fR as M,n as _,fS as U,fT as E,dk as I,w as k,fU as j,fV as N,eL as R}from"./index-15bfda31.js";import{E as F}from"./ByteSizeUnit-d4757d40.js";function H(e,t=!1){return e<=A?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}class w{constructor(t){this._validateJSON(t);const{location:a,data:i}=t;this.location=Object.freeze(D(a));const l=this.location.width,n=this.location.height;let o=!0,r=!0;const c=Math.ceil(l*n/32),s=H(c);let h=0;for(let f=0;f<i.length;f++){const v=f%32;i[f]?(r=!1,s[h]|=1<<v):o=!1,v===31&&++h}r?(this._availability="unavailable",this.byteSize=40):o?(this._availability="available",this.byteSize=40):(this._availability=s,this.byteSize=40+z(s))}getAvailability(t,a){if(this._availability==="unavailable"||this._availability==="available")return this._availability;const i=(t-this.location.top)*this.location.width+(a-this.location.left),l=i%32,n=i>>5,o=this._availability;return n<0||n>o.length?"unknown":o[n]&1<<l?"available":"unavailable"}static fromDefinition(t,a){const i=t.service.request||T,{row:l,col:n,width:o,height:r}=t,c={query:{f:"json"}};return a=a?{...c,...a}:c,i(J(t),a).then(s=>s.data).catch(s=>{if(s&&s.details&&s.details.httpStatus===422)return{location:{top:l,left:n,width:o,height:r},valid:!0,data:S(o*r,0)};throw s}).then(s=>{if(s.location&&(s.location.top!==l||s.location.left!==n||s.location.width!==o||s.location.height!==r))throw new m("tilemap:location-mismatch","Tilemap response for different location than requested",{response:s,definition:{top:l,left:n,width:o,height:r}});return w.fromJSON(s)})}static fromJSON(t){return Object.freeze(new w(t))}_validateJSON(t){if(!t||!t.location)throw new m("tilemap:missing-location","Location missing from tilemap response");if(t.valid===!1)throw new m("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new m("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new m("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new m("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function $(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function J(e){var i;let t;if((i=e.service.tileServers)!=null&&i.length){const l=e.service.tileServers;t=`${l&&l.length?l[e.row%l.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const a=e.service.query;return a&&(t=`${t}?${a}`),t}var u;let p=u=class extends L{constructor(e){super(e),this._pendingTilemapRequests={},this.request=T,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new x(2*F.MEGABYTES),this.addHandles([P(()=>{const{layer:e}=this;return[e==null?void 0:e.parsedUrl,e==null?void 0:e.tileServers,e==null?void 0:e.apiKey,e==null?void 0:e.customParameters]},()=>this._initializeTilemapDefinition(),C)])}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,t,a,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new m("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,t,a,l);if(n)return Promise.resolve(n);const o=i&&i.signal;return i={...i,signal:null},new Promise((r,c)=>{M(o,()=>c(j()));const s=$(l);let h=this._pendingTilemapRequests[s];if(!h){h=w.fromDefinition(l,i).then(v=>(this._tilemapCache.put(s,v,v.byteSize),v));const f=()=>delete this._pendingTilemapRequests[s];this._pendingTilemapRequests[s]=h,h.then(f,f)}h.then(r,c)})}getAvailability(e,t,a){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const i=this._tilemapFromCache(e,t,a,this._tmpTilemapDefinition);return i?i.getAvailability(t,a):"unknown"}fetchAvailability(e,t,a,i){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new m("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:a})):this.fetchTilemap(e,t,a,i).catch(l=>l).then(l=>{if(l instanceof w){const n=l.getAvailability(t,a);if(n==="unavailable")throw new m("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:a});return n}if(_(l))throw l;return"unknown"})}fetchAvailabilityUpsample(e,t,a,i,l){i.level=e,i.row=t,i.col=a;const n=this.layer.tileInfo;n.updateTileInfo(i);const o=this.fetchAvailability(e,t,a,l).catch(r=>{if(_(r))throw r;if(n.upsampleTile(i))return this.fetchAvailabilityUpsample(i.level,i.row,i.col,i,l);throw r});return this._fetchAvailabilityUpsamplePrefetch(i.id,e,t,a,l,o),o}async _fetchAvailabilityUpsamplePrefetch(e,t,a,i,l,n){if(!this._prefetchingEnabled||e==null)return;const o=`prefetch-${e}`;if(this.hasHandles(o))return;const r=new AbortController;n.then(()=>r.abort(),()=>r.abort());let c=!1;const s=N(()=>{c||(c=!0,r.abort())});if(this.addHandles(s,o),await U(10,r.signal).catch(()=>{}),c||(c=!0,this.removeHandles(o)),E(r))return;const h=new R(e,t,a,i),f={...l,signal:r.signal},v=this.layer.tileInfo;for(let O=0;u._prefetches.length<u._maxPrefetch&&v.upsampleTile(h);++O){const b=this.fetchAvailability(h.level,h.row,h.col,f);u._prefetches.push(b);const g=()=>{u._prefetches.removeUnordered(b)};b.then(g,g)}}_initializeTilemapDefinition(){var i;if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:I({...e.query,...a,token:t??((i=e.query)==null?void 0:i.token)}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,a,i){i.level=e,i.row=t-t%this.size,i.col=a-a%this.size;const l=$(i);return this._tilemapCache.get(l)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,a,i)=>!!e._tilemapFromCache(t,a,i,e._tmpTilemapDefinition)}}};p._maxPrefetch=4,p._prefetches=new q({initialSize:u._maxPrefetch}),d([y({constructOnly:!0})],p.prototype,"layer",void 0),d([y({constructOnly:!0})],p.prototype,"minLOD",void 0),d([y({constructOnly:!0})],p.prototype,"maxLOD",void 0),d([y({constructOnly:!0})],p.prototype,"request",void 0),d([y({constructOnly:!0})],p.prototype,"size",void 0),p=u=d([k("esri.layers.support.TilemapCache")],p);export{p as T};
