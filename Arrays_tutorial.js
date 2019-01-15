/**
 * Arrays in JS are special type of objects.
 * Arrays can be defined:
 * 1) using the new keyword
 * 2) Initializing them directly
 */
var declaration_types = function(){
    var arr1 = ['Praveen', 'gaur', 23];
    var arr2 = new Array('Praveen', 'gaur', 23);
    console.log(arr1[0])
    console.log(arr1[0])
}
 
/**
 * 1) Elements of an array could of different types.
 * 2) Arrays are mutable in natuire
 * 3) Arrays can grow dynamically
 * 4) You can have n-dimensional arrays
 */
var arrays_nature = function(){
    var test_array = new Array();
    /**
     * or we can do:
     * test_array = [];
     * this is how you declare an empty array
     */
    test_array = [1,2,3];
    test_array[5]  = 4;
    test_array[4] = 'Praveen Gaur'
    
    //2-Dimensional arrays
    test_array[8] = [7];
    test_array[9] = ['Praveen Gaur'];
    console.log(test_array);
    console.log(test_array[3]);//this will print undefined
}

/**
 * Mutability:
 * 
 * One thing to note here is that the Arrays and objects in Vanila JS are mutable. 
 * 
 * To make arrays immutable, one can use special techniques, like the ones mentioned in https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/
 * Or there are dedicated JS libraries for the same purpose
 * Or you can write your own JS library like: https://vincent.billey.me/pure-javascript-immutable-array/
 * 
 *
 */

 /**
  * Arrays of fixed length:
  * 
  * By default arrays of JS are not fixed lenth. Creating an object with contructor by passing the length, is also of no use.
  * You can use either the freeze or seal methods, as explained https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
  * 
  */

  gnerics
  custom sort
  