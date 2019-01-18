/**
 * - This refers to the execution context of a given function.
 * - This keywoard is assigned to every execution context but is not given any value until the function is called.
 * - Function call: in any function call, this refers to the global context.
 * - Method call: a function defined with in a object is referred as method. For a method call, this refers to the particular 
 * object that has called this function.
 * 
 */

 var global_var = 'global_var';
 var global_function = function(){
     return('Inside global_function');
 }

 function function_call(){
     console.log(this.global_var);
     console.log(this.global_function());
 }

 var method_call_demo = {
     name: undefined,
     age: undefined,
     city: undefined,
     setProperties: function(name, age, city){
        this.age = age;
        this.name = name;
        this.city = city;
     },
     getProperties: function(){
        var returnObject = {
            name: this.name,
            age: this.age,
            city: this.city
        }
        return returnObject;
     }
 }

 function_call();
 method_call_demo.setProperties('praveen', 32, 'Khurja');
 var returnObject = method_call_demo.getProperties();
 console.log(returnObject.age);
 console.log(returnObject.name);
 console.log(returnObject.city);
