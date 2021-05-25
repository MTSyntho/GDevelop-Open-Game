var gdjs;(function(i){class l{constructor(e){this._loadedJsons={};this._resources=e}setResources(e){this._resources=e}preloadJsons(e,o){const s=this._resources.filter(function(r){return r.kind==="json"&&!r.disablePreload});if(s.length===0)return o(s.length);let n=0;const t=function(r){r&&console.error("Error while preloading a json resource:"+r),n++,n===s.length?o(s.length):e(n,s.length)};for(let r=0;r<s.length;++r)this.loadJson(s[r].name,t)}loadJson(e,o){const a=this._resources.find(function(t){return t.kind==="json"&&t.name===e});if(!a){o(new Error(`Can't find resource with name: "`+e+'" (or is not a json resource).'),null);return}if(this._loadedJsons[e]){o(null,this._loadedJsons[e]);return}const s=this,n=new XMLHttpRequest;n.responseType="json",n.open("GET",a.file),n.onload=function(){if(n.status!==200){o(new Error("HTTP error: "+n.status+"("+n.statusText+")"),null);return}s._loadedJsons[e]=n.response,o(null,n.response)},n.onerror=function(){o(new Error("Network error"),null)},n.onabort=function(){o(new Error("Request aborted"),null)},n.send()}isJsonLoaded(e){return!!this._loadedJsons[e]}getLoadedJson(e){return this._loadedJsons[e]||null}}i.JsonManager=l})(gdjs||(gdjs={}));
//# sourceMappingURL=jsonmanager.js.map