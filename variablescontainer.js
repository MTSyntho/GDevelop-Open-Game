var gdjs;(function(l){const n=class{constructor(r){this._variablesArray=[];this._variables=new Hashtable,r!==void 0&&this.initFrom(r)}initFrom(r,e){e===void 0&&(e=!1),e||(n._deletedVars=n._deletedVars||[],this._variables.keys(n._deletedVars));const t=this;let i=0;for(let a=0;a<r.length;++a){const s=r[a];if(!s.name)continue;const u=t.get(s.name);if(u.reinitialize(s),!e){i<t._variablesArray.length?t._variablesArray[i]=u:t._variablesArray.push(u),++i;const d=n._deletedVars.indexOf(s.name);d!==-1&&(n._deletedVars[d]=void 0)}}if(!e){this._variablesArray.length=i;for(let a=0,s=n._deletedVars.length;a<s;++a){const u=n._deletedVars[a];u!==void 0&&this._variables.get(u).setUndefinedInContainer()}}}add(r,e){const t=this._variables.get(r);if(this._variables.put(r,e),t){const i=this._variablesArray.indexOf(t);i!==-1&&(this._variablesArray[i]=e)}}remove(r){const e=this._variables.get(r);e&&e.setUndefinedInContainer()}get(r){let e=this._variables.get(r);return e?e.isUndefinedInContainer()&&e.reinitialize():(e=new l.Variable,this._variables.put(r,e)),e}getFromIndex(r){if(r>=this._variablesArray.length){let e=new l.Variable;return this._variables.put("",e),e}else{let e=this._variablesArray[r];return e.isUndefinedInContainer()&&e.reinitialize(),e}}has(r){const e=this._variables.get(r);return e&&!e.isUndefinedInContainer()}};let o=n;o._deletedVars=[],o.badVariablesContainer={_variables:new Hashtable,_variablesArray:[],has:function(){return!1},getFromIndex:function(){return n.badVariable},get:function(){return n.badVariable},remove:function(){},add:function(){},initFrom:function(){}},o.badVariable={_type:"number",_bool:!1,_children:{},_childrenArray:[],_str:"",_undefinedInContainer:!0,_value:0,reinitialize:()=>{},addChild:()=>l.VariablesContainer.badVariable,castTo:()=>{},clearChildren:()=>{},clone:()=>l.VariablesContainer.badVariable,getChildrenCount:()=>0,replaceChildren:()=>{},replaceChildrenArray:()=>{},getType:function(){return"number"},isPrimitive:function(){return!0},setValue:()=>{},getValue:()=>0,getChild:()=>l.VariablesContainer.badVariable,getChildAt:()=>l.VariablesContainer.badVariable,hasChild:function(){return!1},isStructure:function(){return!1},isNumber:function(){return!0},removeChild:function(){},setNumber:function(){},setString:function(){},setBoolean:function(){},getAsString:function(){return"0"},getAsNumber:function(){return 0},getAsBoolean:function(){return!1},getAllChildren:function(){return{}},getAllChildrenArray:function(){return[]},pushVariableCopy:()=>{},pushValue:()=>{},removeAtIndex:function(){},add:function(){},sub:function(){},mul:function(){},div:function(){},concatenate:function(){},concatenateString:function(){},setUndefinedInContainer:function(){},isUndefinedInContainer:function(){return!0}},l.VariablesContainer=o})(gdjs||(gdjs={}));
//# sourceMappingURL=variablescontainer.js.map
