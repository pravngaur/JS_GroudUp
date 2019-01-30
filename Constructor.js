/**
 * Function Constructors & the new keyword:
 * 
 * 
 * Function constructors in JS are like the classes in JAVA, they are used to define the skeleton of your objects.
 * New instances(objects) are created from the constructors using the new keyword. which creates a new empty JS object & calls the contructor function on this new object.
 * When the new object is created & is used to call the function constructor, a new execution context is created & the this keyword is assigned to the new object.
 * 
 */

 
  /**
   * @description
   * This is a function constructor, for creating the Human objects.
   * While creating the instances, this function will be called along with passing the values. The new object which is created
   * using the new keywoard will be reffred by the 'this' keywoard.
   * 
   * @param {String} name 
   * @param {Number} age 
   * @param {String} religion 
   * @param {String} job 
   */
  var Human = function(name, age, nationality, job){
      this.name = name;
      this.age = age;
      this.nationality = nationality;
      this.job = job;
      this.explainObject = function(){
          console.log(this.name);
      }
  }
 Human.prototype

  //creating the instances of Human type

  var praveen = new Human('Praveen Gaur', 32, 'Indian', 'developer');
  var neha = new Human('Neha Bhambhani', 30, 'Indian', 'teacher');
  var rakesh = new Human('Rakesh Sharma', 61, 'Indian', 'retired');

/**
 * In JS, inheritance is provided by the prototype chaining.
 * The prototype property of the object contains the method defined by this object and the functions and variables defined by its parents.
 * 
 * 
 *  */

 /**
  * @description
  * Extending the Human object by using the prototype functionality
  * @param {Human} obj2 - Human object to compare
  */

  Human.prototype.isEqual = function(obj2){
      var isEqual = false;
      if(obj2 && typeof obj2 === 'Human'){
        this.age === obj2.age;
        this.name === obj2.name;
        this.nationality === obj2.nationality;
        this.job === obj2.job;
        isEqual = true;
      }
      return isEqual;
  }
praveen.isEqual(neha);
  

/**
 * There is one more way of handling the inheritance in JS, using the object.create method:
 */

 var protoObject = {
     surname: "Gaur",
     calculateAge: function(){
         console.log(this.birthYear);
         return (new Date()).getFullYear() - this.birthYear;
     },
     explainObject: function(){
         console.log(this.firstName + " " + this.surname + " is " + this.calculateAge() + " years old.");
     }
 }

 var madhu = Object.create(protoObject);
 madhu.birthYear = 1956;
 madhu.firstName = 'Madhu';
 madhu.explainObject();


 /**
  * There is a big difference in Object.create & function constructors:
  * 
  * 1) Objects created using function constructors gets the prototype property from the function-constructor's prototype.
  * 2) While the Object.create sets the newly created object's prototype property to the object in first argument.
  *
  * In both the types, this referres to the newly created object.
  * 
  */

