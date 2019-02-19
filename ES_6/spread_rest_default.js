/**
 * 
 * Spread opereator:
 * This operator is denoted by 3 dots. It accepts an array and transforms it in the inidividual arguments.
 * 
 */

 var spredTest = function(param1, param2, param3){
    return param1 + param2 + param3;
 }

 var arrayTest = [1,2,3,4];
 spredTest(...arrayTest);

 /**
  * Rest operator is reverse of spread operator but is denoted in the same way, using the three dots...
  * When ... is used, if it is recieving an array then it coverts it in to individual elements but if it recieving element, then it creates an array.
  * 
  * Rest operator is really useful when the number of arguments are not certain and are identified at the run time.
  */

  var isFullAge = (...years) => {
    if(years && years.length > 0){
        years.forEach((element) => {
            if(element && element >= 18){
                console.log(`this person is full age and his age is ${element}`);
            }else{
                console.log(`this person is not full age and his age is ${element}`);
            }
        })
    }
  }
  isFullAge(1,18,23,12);

  /**
   * Taking it little further: suppose if you want to add an argument which is mandatory, and rest of the arguments are optional.
   * the way you can do it is to pass the mandatory arguments first and then followed by the rest of the args.
   * 
   * passing the age limit as an argument rather than hard coding it.
   */

  var isFullAge = (limit, ...years) => {
    if(years && years.length > 0){
        years.forEach((element) => {
            if(element && element >= limit){
                console.log(`this person is full age and his age is ${element}`);
            }else{
                console.log(`this person is not full age and his age is ${element}`);
            }
        })
    }
  }
  isFullAge(18, 1,18,23,12);

  /**
   * Lets have some fun: Doing the same using the closures & rest parameters.
   * 
   */
  
  var isFullAge = (limit) => {
      return function(...years){
        if(years && years.length > 0){
            years.forEach((element) => {
                if(element && element >= limit){
                    console.log(`this person is full age and his age is ${element}`);
                }else{
                    console.log(`this person is not full age and his age is ${element}`);
                }
            })
        }
    }
  }
  isFullAge(18)(12,13,18,19);

  /**
   * Default parameters: JS allows functions to be called without passing all the arguments. The ones which are passed are 
   * assigned to the variables, rest of the variables are set to undefined.
   */

   //Example:
   var assignmentTest = (firstName, age, nationality, familyName) => {
        console.log(`Hi i am ${firstName} ${familyName}, ${age} years old. I am a ${nationality}`);
   }
   assignmentTest('Praveen', 32, "Indian", "Gaur");//passing with all the arguments.
   assignmentTest('Praveen', 32, );//passing with limited args, this will leave nationality & familyName set to undefined.

   //There is one simple way in ES6 to set the default value of params - used when the value not passed explicitely.
   //Following is how it is done.
   var assignmentTest = (firstName, age, nationality = "Indian", familyName = "Gaur") => {
    console.log(`Hi i am ${firstName} ${familyName}, ${age} years old. I am a ${nationality}`);
   }
   assignmentTest('Praveen', 32, "Indian", "Gaur");
   assignmentTest('Praveen', 32, );