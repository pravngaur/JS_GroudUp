/**
 * Execution context  is the container where the variables live for a given function, each function call initiates a new execution context.
 * By default we have the default execution context, which is also called Global exe context or window context.
 * When one function calls another function, execution stack is created - where one context lives on top of the previous one & has the access to the previous context.
 * 
 */

/**
 * Example 1: 
 * You have the name variable defined in the global execution context.
 * then with the call to function_first(), another context is created which sits on top of the global context.
 * with the call to function_second(), another context is created which sits on top of the context of function_first.
 * with the call to function_third(), another context is created which sits on top of the context of function_second.
 */

 /**
  * Important point to note: 'this' always refers to the global context inside a method.
  * while in a object declaration, this referes to the current object itself.
  * 
  */
var name = 'Praveen Gaur';

var function_first = function(){
 var a = 'Inside first function';
 var final = a + name;
 console.log(final);
 function_second();
}

var function_second = function(){
   var a = 'Inside second function';
   var final = a + name;
   console.log(final);
   function_third();
}

var function_third = function(){
   var a = 'Inside third function';
   var final = a + name;
   console.log(final);
}

function_first();

/**
 * Hoisting:
 * Hoisting is the phenomenon where the properties are created for variable and function declarations at the creation phase.
 * variable properties  are assigned undefined value while the method properties points to the methods only.
 * variable properties  are assigned actual values during the execution phase.
 * which is why developers can use the variables and methods in their code before the line at which variables & methods are actually defined because during the creation phase, these variables are already created in memory but are not assined any value.
 */


// Variable hoisting in action
 function hoistingDemo_variable(){
    console.log(name);// this prints undefined as the value is not initialized yet but the variable itself is assigned to a VO property.
    var name = 'Praveen Gaur';
    console.log(name);// this prints a value
}
hoistingDemo_variable();



/**
 * Function hoisting in action: hoisting for functions only works for declarations but not for expressions. Because the expressions are meant to be evaluated at the time of execution.
 * 
 */

hoistingDemo_method_1('praveen');
function hoistingDemo_method_1(name){
    console.log('Developer\'s name is ' + name);
}
hoistingDemo_method_1('praveen');

hoistingDemo_method_2('praveen');//this will throw an error
var hoistingDemo_method_2 = function(name){
    console.log('Developer\'s name is ' + name);
}
hoistingDemo_method_2('praveen');

// Example 1 & 2 combined:
hoistingDemo_method_3();// this will work, as the Declaration type method is called before the declaration
function hoistingDemo_method_3(){
    console.log('inside the method' );
    printName("praveen");//this won't,  as the Expression type method is called before the declaration
    var printName = function(name){
        console.log('Developer\'s name is' + name);
    }
    printName("praveen");//this will work, as the Expression type method is called after the declaration
}


