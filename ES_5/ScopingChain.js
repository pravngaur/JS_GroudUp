
/**
 * Scoping:
 * 
 * Scoping defines where you will be able to access a given variable and function.
 * 
 * - Scoping in JS is driven by the way code is written lexically. Lexically means {} - the code inside the {} will have access to var and func defined with in the braces.
 * - Each function creates a new scope. So, developer will be able to access the var and func which are defines with in the same function, only exception is the global scope - which is available to all other scopes. As technically, everything else is written inside the global scope.
 * - Unlike Java, JS does not have scope defined for if/else/for/while or any other type of blocks but for functions only.
 * 
 * 
 * 
 * 
 */

 /**
  * Example: 1
  * 
  * func_1 is having access to var_global,func_2 & func_3, since all these functions and variables are defined in global scope.
  * Infact, all three functions have access to each other and var_global.
  * But they do not have access to the variables and functions defined within each other, since the lexical scope is different.
  * Hence, when you try to call sub_function from func_2, it will give you an error as it is not in the scope of func_1
  * 
  *   */
 var var_global = 'global';
 func_1();
 function func_1(){
     var var_1 = 'var_1';
     func_2();
     var sub_function = function(){
         return var_1;
     }
 }

 function func_2(){
    var var_2 = 'var_2';
    func_3(var_2 + sub_function());
}

function func_3(compositeString){
    var var_3 = 'var_3';
    console.log(var_global + compositeString + var_3);
}

/**
 * On the same lines, look at the example:2
 * 
 */
var var_a = 'a';
console.log(var_a);
func_2();
function func_2(){
    var var_a = 'b';
    console.log(var_a);
    func_3();
}

function func_3(){
    console.log(var_a);// this will give you undefined, remember HOISTING !!
    var var_a = 'c';
    console.log(var_a);// this will give you 'c', remember HOISTING !!
}