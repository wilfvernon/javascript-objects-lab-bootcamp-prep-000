var recipes = {eggs: 2};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}
  
function deleteFromObjectByKey(object, key){
  var deleted = object
  delete deleted[key]
  return deleted
}

function