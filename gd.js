var gdjs;(function(t){let l;(function(n){const e=!0})(l=t.evtTools||(t.evtTools={})),t.objectsTypes=new Hashtable,t.behaviorsTypes=new Hashtable,t.callbacksFirstRuntimeSceneLoaded=[],t.callbacksRuntimeSceneLoaded=[],t.callbacksRuntimeScenePreEvents=[],t.callbacksRuntimeScenePostEvents=[],t.callbacksRuntimeScenePaused=[],t.callbacksRuntimeSceneResumed=[],t.callbacksRuntimeSceneUnloading=[],t.callbacksRuntimeSceneUnloaded=[],t.callbacksObjectDeletedFromScene=[],t.rgbToHex=function(e,n,c){return""+((1<<24)+(e<<16)+(n<<8)+c).toString(16).slice(1)},t.hexToRGBColor=function(e){var n=parseInt(e.replace("#",""),16);return[n>>16&255,n>>8&255,n&255]},t.rgbToHexNumber=function(e,n,c){return(e<<16)+(n<<8)+c},t.hexNumberToRGB=e=>({r:e>>16&255,g:e>>8&255,b:e&255,a:255}),t.random=function(e){return e<=0?0:Math.floor(Math.random()*(e+1))},t.randomInRange=function(e,n){return e+t.random(n-e)},t.randomFloat=function(e){return e<=0?0:Math.random()*e},t.randomFloatInRange=function(e,n){return e+t.randomFloat(n-e)},t.randomWithStep=function(e,n,c){return c<=0?e+t.random(n-e):e+t.random(Math.floor((n-e)/c))*c},t.toRad=function(e){return e/180*Math.PI},t.toDegrees=function(e){return e*180/Math.PI},t.registerObject=function(e,n){t.objectsTypes.put(e,n)},t.registerBehavior=function(e,n){t.behaviorsTypes.put(e,n)},t.registerFirstRuntimeSceneLoadedCallback=function(e){t.callbacksFirstRuntimeSceneLoaded.push(e)},t.registerRuntimeSceneLoadedCallback=function(e){t.callbacksRuntimeSceneLoaded.push(e)},t.registerRuntimeScenePreEventsCallback=function(e){t.callbacksRuntimeScenePreEvents.push(e)},t.registerRuntimeScenePostEventsCallback=function(e){t.callbacksRuntimeScenePostEvents.push(e)},t.registerRuntimeScenePausedCallback=function(e){t.callbacksRuntimeScenePaused.push(e)},t.registerRuntimeSceneResumedCallback=function(e){t.callbacksRuntimeSceneResumed.push(e)},t.registerRuntimeSceneUnloadingCallback=function(e){t.callbacksRuntimeSceneUnloading.push(e)},t.registerRuntimeSceneUnloadedCallback=function(e){t.callbacksRuntimeSceneUnloaded.push(e)},t.registerObjectDeletedFromSceneCallback=function(e){t.callbacksObjectDeletedFromScene.push(e)},t.registerGlobalCallbacks=function(){console.warn("You're calling gdjs.registerGlobalCallbacks. This method is now useless and you must not call it anymore.")},t.clearGlobalCallbacks=function(){t.callbacksFirstRuntimeSceneLoaded.length=0,t.callbacksRuntimeSceneLoaded.length=0,t.callbacksRuntimeScenePreEvents.length=0,t.callbacksRuntimeScenePostEvents.length=0,t.callbacksRuntimeScenePaused.length=0,t.callbacksRuntimeSceneResumed.length=0,t.callbacksRuntimeSceneUnloading.length=0,t.callbacksRuntimeSceneUnloaded.length=0,t.callbacksObjectDeletedFromScene.length=0},t.getObjectConstructor=function(e){return e!==void 0&&t.objectsTypes.containsKey(e)?t.objectsTypes.get(e):(console.warn('Object type "'+e+'" was not found.'),t.objectsTypes.get(""))},t.getBehaviorConstructor=function(e){return e!==void 0&&t.behaviorsTypes.containsKey(e)?t.behaviorsTypes.get(e):(console.warn('Behavior type "'+e+'" was not found.'),t.behaviorsTypes.get(""))},t.staticArray=function(e){return e._staticArray=e._staticArray||[],e._staticArray},t.staticArray2=function(e){return e._staticArray2=e._staticArray2||[],e._staticArray2},t.staticObject=function(e){return e._staticObject=e._staticObject||{},e._staticObject},t.objectsListsToArray=function(e){var n=t.staticArray(t.objectsListsToArray);e.values(n);for(var c=[],a=0;a<n.length;++a)for(var r=n[a],o=0;o<r.length;++o)c.push(r[o]);return c},t.copyArray=function(e,n){for(var c=e.length,a=0;a<c;++a)n[a]=e[a];n.length=c},t.makeUuid=function(){if(typeof crypto=="undefined"||!crypto.getRandomValues){const a=r=>r?(r^Math.random()*16>>r/4).toString(16):(""+1e7+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a);return a()}if(!t.makeUuid.hex){t.makeUuid.hex=[];for(var e=0;e<256;e++)t.makeUuid.hex[e]=(e<16?"0":"")+e.toString(16)}const n=t.makeUuid.hex;var c=crypto.getRandomValues(new Uint8Array(16));return c[6]=c[6]&15|64,c[8]=c[8]&63|128,n[c[0]]+n[c[1]]+n[c[2]]+n[c[3]]+"-"+n[c[4]]+n[c[5]]+"-"+n[c[6]]+n[c[7]]+"-"+n[c[8]]+n[c[9]]+"-"+n[c[10]]+n[c[11]]+n[c[12]]+n[c[13]]+n[c[14]]+n[c[15]]}})(gdjs||(gdjs={})),console.warn=console.warn||console.log,console.error=console.error||console.log;
//# sourceMappingURL=gd.js.map