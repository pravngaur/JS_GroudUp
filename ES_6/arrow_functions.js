/**
 * ===================================== INTRO ========================================================
 * 
 * Arrow functions are the cool new way of declaring the functions, with the less code written.
 * - The function keyword is not required anymore.
 * - Declaration starts with the arguments.
 * - Followed by => 
 * - And then the normal way, {method_body}
 * 
 * One important thing: 'this' behavior
 * In the function calls(when the method is called with a object), this refers to the calling object. But at all other method calls, this refers to the global window object.
 * Same is in case of the function constructors, this refers to the object upon which the method is called.
 * this is always created for a new method call, contained with the execution context.
 *
 * The change that has happened with the arrow functions: they share the this keywoard with the lexical scope whcich they are in.
 * 
 * ===================================== INTRO ========================================================
 * 
 */

 /**
  * Simple example: 1
  */

  var simpleArrowFunction = (param_1, param_2)=>{
      console.log(param_1);
      console.log(param_2);
      return param_1 + param_2;
  }

  console.log(simpleArrowFunction(1,2));

  /**
   * Example to depict the this behavior
   */
//ES5 way
var thisBehavior_5 = {
    name: 'praveen gaur',
    job: 'developer',
    describe: function(){
        console.log(this.name + " is a " + this.job + ".");// this here will refer to the thisBehavior_5 object as the this is assigned to the object calling the method.
        function changeJob(newJob){
            console.log(this.name + " who was a " + this.job + ", is now a " + newJob);// this.name & this.job will return undefined as this refers to the global context where name and job are not defined.
        }
        
        changeJob('Reader');// calling method like a normal function, sets this variable to the global execution context. 
    }
}
thisBehavior_5.describe();

//ES5 hack
var thisBehavior_5_hack = {
    name: 'praveen gaur',
    job: 'developer',
    describe: function(){
        var self = this;// capturing this in a variable to be used later on, this is a hack to make the inner function work
        console.log(this.name + " is a " + this.job + ".");// 
        function changeJob(newJob){
            console.log(self.name + " who was a " + self.job + ", is now a " + newJob);// 
        }
        
        changeJob('Reader');// 
    }
}
thisBehavior_5_hack.describe();

//ES6 way

let thisBehavior_6 = {
    name: 'praveen gaur',
    job: 'developer',
    describe: function(){
        console.log(`${this.name} is a ${this.job}.`);
        let changeJob = (newJob) => {
            console.log(`${this.name} who was a ${this.job}, is now a ${newJob}.`);// now this refers to the this in the lexical block of changeJob function
            //which is describe function in which this refers to thisBehavior_6_hack object.
        }
        changeJob('Reader');
    }
}
thisBehavior_6.describe();

/**
 * we need to use arrow functions with caution, have a look at the below example where we changed describe function to new arrow style.
 * which resulted in this starts pointing to the global execution context rather than to the thisBehavior_6_fail object.
 */
let thisBehavior_6_fail = {
    name: 'praveen gaur',
    job: 'developer',
    describe: () => {
        console.log(`${this.name} is a ${this.job}.`);
        let changeJob = (newJob) => {
            console.log(`${this.name} who was a ${this.job}, is now a ${newJob}.`);// now this refers to the this in the lexical block of changeJob function
            //which is describe function in which this refers to thisBehavior_6_hack object.
        }
        changeJob('Reader');
    }
}
thisBehavior_6_fail.describe();