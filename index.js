var recipes = {eggs: 2};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
  
}

function destructivelyUpdateObjectsWithKeyAndValue(object, key, value){
  return object[key] = value;
}
  
