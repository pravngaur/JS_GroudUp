/**
 * TODO:
 * 1) Get the understanding of all the Object class methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * 2) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 * 3) How to declare the immutable properties in the object.
 * 4) How to define setter and getter? How to define the private properties - so that these are accessible through Getters only
 */

/**
 * JS objects are just like array, apart from the following differences:
 * - The objects are not accessed by a number but by a String literal called as key.
 * - The order of element does not mean anything in objects.
 * 
 */


 //Declaring an object, there are two ways of doing it, just like Arrays
 // First way
var person = {
    name: 'Praveen Gaur',
    age: 32,
    married: true,
    retirementAge: undefined,
    death: null
};

/**
 * Another way of declaring an object:
 * var person = new Object();
 * person = {
    name: 'Praveen Gaur',
    age: 32,
    married: true,
    retirementAge: undefined,
    death: null
};

 */

/**
 * Accessing an object elements: there are 3 ways to access the object elements:
 * 1) person.name
 * 2) person['name']
 * 3) var keyName = 'name'
 *    person[keyName]
 *  */

 var accessObject = function(){
    console.log(person.name);
    console.log(person['name']);
    var keyName = 'name';
    console.log(person[keyName]);

 }

 /**
  * An object can also have the functions defined.
  * 
  */
 
  //Declaring our object first, this contains both the primitive properties & the functions
  var person_wrapper = {
    name: undefined,
    age: undefined,
    isMarried: undefined,
    initializePerson: function(name, age, isMarried){
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }

  }

  //Now accessing the object's function
  console.log(person_wrapper);
  person_wrapper.initializePerson('Praveen', 32, true);
  console.log(person_wrapper);