/**
 * ================================================  HEADER  ====================================
 * There are some new features and methods which are been introduced with ES6, will cover all those:
 * 1) String Literal Templates
 * 2) startsWith function
 * 3) endsWith function
 * 4) includes function
 * 5) repeat function
 * 
 * I am not going to details of methods(2-5), that you can check onlie.
 * ================================================  HEADER  ====================================
 */

 
 /**
  * @description
  * This method will explain the newly introduced String literal templates - that makes creating string(s) from different variable super easy!!
  */

  
  var literalTemplateTest = function(){
      let param_1 = 'praveen';
      let param_2 = ' gaur';
      let param_3 = '32';
      //assembling this string is quite a task. This is the ES5 way of doing things.
      console.log("Hi, i'\m " + param_1 + ' ' + param_2 + ' & i am '+ param_3 + 'years old.');

      // Now, lets look at the ES6 way :)
      console.log(`Hi, i am ${param_1} ${param_2} and i am years ${param_3} years old.`);// wow, this is cool !!!


  }

