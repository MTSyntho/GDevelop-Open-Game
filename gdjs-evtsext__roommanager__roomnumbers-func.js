gdjs.evtsExt__RoomManager__roomNumbers = {};

gdjs.evtsExt__RoomManager__roomNumbers.conditionTrue_0 = {val:false};
gdjs.evtsExt__RoomManager__roomNumbers.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RoomManager__roomNumbers.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.getVariableChildCount(runtimeScene.getGame().getVariables().get("_RoomManager__RoomsNumber")); }}}

}


};

gdjs.evtsExt__RoomManager__roomNumbers.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__RoomManager__roomNumbers.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
