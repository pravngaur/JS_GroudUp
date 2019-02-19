/**
 * ES6 introduces the new data structure - Maps, this is the key value pair setup.
 * Earlier, we used to do the same with objects, storing keys and values as object properties. But now we can use maps.
 *
 * There are few key advantages of using maps over objects:
 * 1) With objects, limitation is to use only strings as keys but with maps we can use any primitive type, objects and functions as keys.
 * 2) Maps are iterable.
 * 3) It is really easy to get the size of  the map.
 * 
 */

 //Lets use some code examples to understand the maps.

 let mapTestSetter = (keys, values) => {
    let mapInstance;
    if(keys && values && Array.isArray(keys) && Array.isArray(values) && 
    keys.length === values.length && keys.length > 0){
        mapInstance = new Map();
        for(i = 0; i<= (keys.length-1); i++){
            mapInstance.set(keys[i], values[i]);
        }
    }
    return mapInstance;
 }
 var mapInstance = mapTestSetter(['firstName','age','lastName'], ['Praveen', 32, 'Gaur']);


 /**
  * @description
  * Example for itertaing through a map object.
 * @param {Map} mapInstance - map object
 * 
 */
 let mapTestIterator = (mapInstance) => {
    if(mapInstance &&  mapInstance instanceof Map){
        console.log(`This is the map iterator function, following are the map elements: `);
        mapInstance.forEach((value, key, map) => {
            console.log(`Key is : ${key}, value is ${value}`);
        });
    }
 }
 mapTestIterator(mapInstance);

 /**
  * @description
  * Example for elelment lookup in Map
  * @param {Map} mapInstance 
  * @param {*} key - any primitive/object/function
  */
 let mapTestKeyLookup = (mapInstance, key) => {
    if(mapInstance &&  mapInstance instanceof Map && mapInstance.has(key)){
        console.log(`Map has the key: ${key} & value is ${mapInstance.get(key)}`)
    }else{
        console.log(`This map instance does not has any key names ${key}`);
    }
 }
 mapTestKeyLookup(mapInstance,'firstName');
 mapTestKeyLookup(mapInstance,'firstName1');

 /**
  * @description
  * Function to show how to remove elements from the Map.
  * @param {Map} mapInstance 
  * @param {*} key - any primitive/object/function
  */
 let mapTestKeyRemove = (mapInstance, key) => {
    if(mapInstance && mapInstance instanceof Map && mapInstance.has(key)){
        mapInstance.delete(key);
        console.log('Key is removed successfully from the map.s')
    }
 }
mapTestKeyRemove(mapInstance, 'firstName');
 /**
  * @description
  * Function to show how to add elements from the Map.
  * @param {Map} mapInstance 
  * @param {*} key - any primitive/object/function
  * @param {*} value - any primitive/object/function
  */
 let mapTestKeyAdd = (mapInstance, key, value) => {
    if(mapInstance && mapInstance instanceof Map ){
        mapInstance.set(key, value);
        console.log('Element is successfully added to the map.')
    }
 }
 var keyObject = {'key':'address'};
 mapTestKeyAdd(mapInstance, keyObject, 'Khurja');