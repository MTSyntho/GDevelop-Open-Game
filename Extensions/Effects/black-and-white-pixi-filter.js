var gdjs;(function(r){const l=GlobalPIXIModule.PIXI;r.PixiFiltersTools.registerFilterCreator("BlackAndWhite",{makePIXIFilter:function(a,t){const e=new l.filters.ColorMatrixFilter;return e.blackAndWhite(!1),e},update:function(a,t){},updateDoubleParameter:function(a,t,e){const i=a;t==="opacity"&&(i.alpha=r.PixiFiltersTools.clampValue(e,0,1))},updateStringParameter:function(a,t,e){},updateBooleanParameter:function(a,t,e){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=black-and-white-pixi-filter.js.map
