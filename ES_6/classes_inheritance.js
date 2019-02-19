/**
 * Classes are the new ES6 way implementing inheritance.
 * Earlier in ES5, we used to accomplish inheritance using the prototype property on the function constructors. Or we can use
 * the Object.create and pass the object itself.
 * 
 */

 //Creating the objects of a type - ES5 way
 var constructor_es5 = function(name, age, job){
     this.name = name;
     this.age = age;
     this.job = job;
 }

 constructor_es5.prototype.describeObject = function(){//this adds the describeObject to the prototype chain.
     console.log("Hi, this person is a " + this.job + 
     ", he is " + this.age + " years old, goes by the name of " + this.name + ".");
 }

 var es5_object = new constructor_es5('Praveen Gaur', 32, 'Developer');
 es5_object.describeObject();

 //Creating the objects of a type - ES6 way

 class ES6_class {
     constructor (name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }

    describeObject(){
        console.log(`Hi, this person is a ${this.job}  
        , he is ${this.age} years old, goes by the name of ${this.name}.`);
    }

    static giveClassIntro(){
        console.log('Hi, this is ES6 class introduction.');
    }
 }

 var es6_object = new ES6_class('Praveen Gaur', 32, 'Developer');
 es6_object.describeObject();
 ES6_class.giveClassIntro();


 //==================================================  INHERITANCE START =========================================
 /**
  * With the object creation been done, lets look at the inheritance.
  * For this, we will use the person & athelete example.
  * Doing the inheritance the ES5 way
  */

// *************************************** ES 5 Inheritance *****************************************************
  var Person = function(name, age, job){//Person function constructor to create Person type objects
    this.name = name;
    this.age = age;
    this.job = job;   
  }

  Person.prototype.declareInstance = function(){// adding declareInstance function to Person prototype
      console.log("Hi this is a person type object, having name as " + this.name + 
      " , he is " + this.age + " years old and he is a " + this.job);
  }

  Person.prototype.yearOfBirth = function(){// adding yearOfBirth function to Person prototype
    let year = new Date().getFullYear() - this.age;
    console.log("Person named " + this.name + " was born in " + year);
  }

  var Athelete = function(name, age, job, olympicsParticipation, medalsInOlympics){//Athelete function constructor to create Athelete type objects
      //Using the call function, passing the newly created object as the first arg. So that
      //Person constructor is used just as a function call to set the values on the passed object.  
      Person.call(this, name, age, job);
      this.olympicsParticipation = olympicsParticipation;
      this.medalsInOlympics = medalsInOlympics;
  }

  //This is where the real magic(inheritance) is happening - assigning the **********************
  var protoInstance = Object.create(Person.prototype);
  Athelete.prototype = protoInstance;

  Athelete.prototype.isMedalWon = function(){//isMedalWon is available to the Athelete types only but not to Person type objects.
      if(this.medalsInOlympics && this.medalsInOlympics > 0){
          return true;
      }
      return false;
  }

  // This prototype shadowing, when declareInstance is called on Athelete type - this method is called
  // But on the person type objects - the method attached to Person prototype will be called.
  Athelete.prototype.declareInstance = function(){
    console.log("Hi this is a Athelete type object");
  }

  var atheleteInstance = new Athelete('Praveen', 32, 'Runner', 3, 5);
  console.log(atheleteInstance.isMedalWon());
  atheleteInstance.declareInstance();
  atheleteInstance.yearOfBirth();

  // *************************************** ES 6 Inheritance *****************************************************

  /**
   * ES 6 uses the keywoards which are borrowed from JAVA, like super, extend and class
  */

  class Person_6_super {
      constructor(name, age, job){
          this.name = name;
          this.job = job;
          this.age = age;
      }

      declareInstance(){// adding declareInstance function to Person prototype
        console.log(`Hi this is a person type object, having name as ${this.name} , he is ${this.age} years old and he is a ${this.job}`);
      }
  
        yearOfBirth(){// adding yearOfBirth function to Person prototype
            let year = new Date().getFullYear() - this.age;
            console.log(`Person named ${this.name}, was born in ${year}`);
        }
  }

  class Asthelete_6_sub extends Person_6_super {
    constructor(name, age, job, olympicsParticipation, medalsInOlympics){
        super(name, age, job);
        this.medalsInOlympics = medalsInOlympics;
        this.olympicsParticipation = olympicsParticipation;
    }

    declareInstance(){// adding declareInstance function to Person prototype
      console.log(`Hi this is a athelete type object, having name as ${this.name} , he is ${this.age} years old and he is a ${this.job}.
      He has participated in ${this.olympicsParticipation} olympics & won ${this.medalsInOlympics} medals.`);
    }

    yearOfBirth(){// adding yearOfBirth function to Person prototype
        let year = new Date().getFullYear() - this.age;
        console.log(`Person named ${this.name}, was born in ${year}`);
    }

    isMedalWon(){//isMedalWon is available to the Athelete types only but not to Person type objects.
        if(this.medalsInOlympics && this.medalsInOlympics > 0){
            return true;
        }
        return false;
    }
}
var atheleteInstance_6 = new Asthelete_6_sub('Praveen', 32, 'Runner', 3, 5);
  console.log(atheleteInstance_6.isMedalWon());
  atheleteInstance_6.declareInstance();
  atheleteInstance_6.yearOfBirth();