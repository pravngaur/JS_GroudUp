/**
 * ============================================ HEADER ===============================================
 * 
 * There are two main differences between var vs let & const.
 * 1) Hoisting does not work for let & const but for var only. i.e. let and const are accessible in the code which is written after the var declaration oterwise, you will get an error.
 * As opposed to the var(s), where if you use the variable before it is declared then it will give you undefined as value.
 * Hoisting is the process where all the variables in the execution context gets initialized with undefined.
 * Having said that, hoisting is still in action with let and const but you can not access the variables before they are defined, that is termed as 'Temporary death zone'
 * 
 * 2) var are accessible with in the same function but the let and const are accessible within the lexical scope.
 * 
 * ============================================ HEADER ===============================================
 */


 /**
  * @description
  * This fumction explains the first difference i.e. hoisting behavior.
  * hoistingTest method evaluates the hoisting behavior of let and const. Also compares it with that of the var.
  * var supports hoisting, while let and const do not.
  * 
  */
 var hoistingTest = function(){
    console.log("printitng var before declaration: " + var_1);// this will print undefined as the value of var_1
    var var_1 = 'VAR TEST';
    console.log("printitng var after declaration: " + var_1);// this will print VAR TEST as the value of var_1

    console.log("printitng let after declaration: " + let_1);// this will throw an error, as the let is being used before it is declared.
    let let_1 = 'LET TEST';
    console.log("printitng let after declaration: " + let_1);// this will print LET TEST as the value of let_1

    console.log("printitng let after declaration: " + const_1);// this will throw an error, as the const is being used before it is declared.
    const const_1 = 'CONST TEST';
    console.log("printitng let after declaration: " + const_1);// this will print CONST TEST as the value of let_1
}

hoistingTest();//calling the hoisting test function

 /**
  * @description
  * const behavior: all the constants should be initialized at the time of declaration. Otherwise error will be thrown.
  * constBehavior_1 will not be compile as the const declaration is missing the value initialization.
  */
 var constBehavior_1 = function(){
     const testing;//this will throw an error: Uncaught SyntaxError: Missing initializer in const declaration. This is a compile time error.
     console.log(testing);
     testing = "const testing";
     console.log(testing);
 }
/**
 * @description
 * constBehavior_2 will work just fine.
 */
 var constBehavior_2 = function(){
    const testing = "const testing";
    console.log(testing);
}

constBehavior_2();

/**
 * @description
 * Explaining the second difference - function vs lexical scope.
 * var has the function scope. On the other hand, let and const have the lexical scope.
 * 
 */

 // var version
var varScopingTest = function(){
    console.log(test);//this will give undefined, but will not break or throw an exception.
    if(1==1){
        var test = "praveen";
    }
}
varScopingTest();

// let version - throws error
var varScopingTest = function(){
    console.log(test);//this will give throw an exception. Uncaught ReferenceError: test is not defined
    if(1==1){
        let test = "praveen";// as the let is available in the lexical scope, test variable is available in the scope of if block.
    }
}
varScopingTest();

// let version - throws error
var varScopingTest = function(){
    let test = "praveen"
    if(1==1){
        console.log(test);//this will work, as the if block is inside the lexical scope of the varScopingTest function.
    }
}
varScopingTest();

/**
 * Practical use of let and const is in data privacy.
 * The variables that developers do not want to be exposed to the rest of the code but are required for specific operations, should be protected.
 * Earlier in ES5, we used to write IIFEs for the same but with ES6, we can do it by simply creating an extra block.
 */

 var dataPrivacyTest = function(){
     var openToAll = 123;
     {//new scope created for protecting the private variables
         let privateVariable = 456;// privateVariable is accessible with in the newly created lexical scope only.
         console.log(privateVariable);// do the business logic on private variables.
     }
     //console.log(privateVariable);// will throw an error.
     console.log(openToAll);
 }
 dataPrivacyTest();