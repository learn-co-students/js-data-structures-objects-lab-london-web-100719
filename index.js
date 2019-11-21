// Write your solution in this file!
document.body.style.backgroundColor = '#1d2020'

let driver = {}
// updateDriverWithKeyAndValue()- this function should take in three arguments: a driver Object, a key and a value. This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.

function updateDriverWithKeyAndValue(obj, key, val) {
  let newObj = {...obj};
  newObj[key] = val;
  return newObj;
}

// destructivelyUpdateDriverWithKeyAndValue() - this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.

function destructivelyUpdateDriverWithKeyAndValue(obj,key, val) {
  let newObj = {}
  newObj[key] =  val
  return Object.assign(obj, newObj)
}

// deleteFromDriverByKey() - this function should take in a driver Object and a key. It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.

function deleteFromDriverByKey(obj, key) {
  let newObj = {...obj}
  delete newObj[key]
  return newObj
}

// destructivelyDeleteFromDriverByKey() - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in. Be sure and consider whether dot-notation or bracket-notation might affect your solution.

function destructivelyDeleteFromDriverByKey(obj, key) {
delete obj[key]
return obj
}