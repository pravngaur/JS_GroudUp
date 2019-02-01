/**
 * ===========================================HEADER=======================================================
 * It's all about method borrowing. apply, bind & call all allows method borrowing i.e. methods defined on one object to be used on other objects.
 * We have see simple method borrowing earlier, this is same but with additional advantages.
 * ===========================================HEADER========================================================
 * 
 */

 //******************* SIMPPLE METHOD BORROWING : START ************************** */

 /**
  * @description
  * Example 1: simple method borrowing
  * Important point here is that within the object definitions, this refers to the object which is calling the given function.
  */

  //defining praveen object with describePerson method declaration.
  var praveen = {
      name: 'Praveen Gaur',
      age: 32,
      job: 'Developer',
      describePerson: function(){
          console.log("Hi i'\m " + this.name + ", " + this.age +" years old & i'\m a " + this.job);
      }
  }
  praveen.describePerson();//calling describePerson on praveen object

  //defining another object zafar, same properties as of praveen but missing the method declaration.
  var zafar = {
    name: 'Mohammed zafar',
    age: 34,
    job: 'Developer',
  }
  
  zafar.describePersonFunction = praveen.describePerson;// method borrowing in action, zafar does not has describePerson, hence borrowing it from praveen object.
  zafar.describePersonFunction(); // calling the borrowed function. this does it's magic, since describePerson is called by zafar object, this refers to zafar.

//******************* SIMPPLE METHOD BORROWING : END ************************** */


//******************* METHOD BORROWING USING Call : START ************************** */
  /**
   * @description
   * Example 2: Using the call method.
   * 
   * call is also used for method borrowing only, but with slightly different context.
   * Use can use the call method or the above way of borrowing, both will yeild the same result.
   */
  var praveen = {
    name: 'Praveen Gaur',
    age: 32,
    job: 'Developer',
    describePerson: function(timeOfTheDay){
        console.log("Hi i'\m " + this.name + ", " + this.age +" years old & i'\m a " + this.job);
        console.log(timeOfTheDay + " everyone !!");
    }
  }
  praveen.describePerson();//calling describePerson on praveen object

  //now assuming the name, age and job details are coming from a form and hence the objects have to be created dynamically.

  for(i = 0; i<= 5; i++){
      var name, age, job;
      name = i + "_name";
      age = i + "_age";
      job = i + "_job";
      var object = {
          name: name,
          age: age,
          job: job
      };
     praveen.describePerson.call(object, 'Good morning');//while using the call method, first argument should always the this object.
  }

  //******************* METHOD BORROWING USING Call : END ************************** */

  //******************* METHOD BORROWING USING bind : START ************************** */
  /**
   * @description
   * Example 3: Using bind
   * 
   * Bind also allows the function borrowing, but:
   * 1) It does not call the method but creates a copy of the given method, with value of this variable set.
   * 2) If your function expects some arguments, you do not need to specify while creating the method copy(using bind). These arguments can be supplied while calling the method copy.
   * What it allows is to provide you access to the functions on a given object but not calling it. Developers can create the methods out of thin air and have the liberty to call when required - by passing the additional arguments on the newly created copy of the method.
   * 
   * calculationHelper object allows an array to be added or multipled. addition or multiplication is decided based on a property, mode.
   * Method helper() expects an array, upon which operation to be performed. This is a dynamic argument & array is not part of object declaration.
   *  
   * Using the mode, we created the dedicated copies of helper method which either do addition or mutiplication.
   * object_1 & object_2 has the mode property set & that lets creation of additionHelper & multiplyHelper methods. Which later are used by passing the arrays as runtime argument.
 */

 var calculationHelper = {
    mode: 'addition',
     helper:function(arrayProperty){
         if(this.mode && this.mode === 'addition' && arrayProperty && arrayProperty.length > 0){
            var result = 0;
            arrayProperty.forEach(element => {
                result = result + element;
            });
            return result;
         }
         else if(this.mode && this.mode === 'multiply' && arrayProperty && arrayProperty.length > 0){
            var result = 1;
            arrayProperty.forEach(element => {
                result = result * element;
            });
            return result;
         }
     }
 }

 var object_1 = {
   mode: 'addition'
 }
 var object_2 = {
   mode: 'multiply'
}

var additionHelper = calculationHelper.helper.bind(object_1);
var multiplyHelper = calculationHelper.helper.bind(object_2);

additionHelper([1,2,3,4]);
multiplyHelper([1,2,3,4]);

//******************* METHOD BORROWING USING bind : END ************************** */

/**
 * Another cool example, where we do not care about the this variable :)
 * 
 */

 /**
  * @description
  * this function checks if a given citizen has reached full age or not.
  * different countries, have different age limits. Hence it accepts two arguments:
  * 1) Allowed age for a given country
  * 2) age of the person
  */

  function isFullAge(countryAgeLimit, personAge){
    if(countryAgeLimit && personAge && typeof countryAgeLimit === "number" && typeof personAge === "number"){
        if(personAge >= countryAgeLimit) {
            return true;
        }else{
            return false;
        }
    }
    return Error;
  }

  //using the bind method to create the country specific versions of the same method.

  var isFullAgeJapan = isFullAge.bind(this, 20);//we really do not care about the value of this.
  var isFullAgeIndia = isFullAge.bind(this, 18);

  isFullAgeIndia(21);
  isFullAgeIndia(17);