/**
 * =========================================== HEADER==============================================================
 
 * Closures:
 * Simply put, closures are the variables preserved in the function. These variables are accessible in a given function because these variables and functions are defined in the outer scope.
 * More importantly, these variables are preserved even when the outer function is completed and it's execution context is gone. This is because of the fact that the VariableObject lives on the memory even if the execution context is gone.
 
 * =========================================== HEADER==============================================================
 */

/**
 * 
 * Example 1: Before going in to more tricky stuff, one simple example:
 * @description
 * addTo is the outer function, which hosts returningFunction and returns it.
 * while called it returns returningFunction. 
 * returningFunction uses the outer variable which is in lexical scope of addTo function.
 * 
 * When you debug the response of addTo function i.e. closuresTest. Do console.dir(closuresTest)
 * This will return you all the details of the object. Look at the scopes section of the object, there you would see 
 * 2 scopes, one is closure which will have the referenced variables and functions defined in the lexical scope of addTo function.
 * The other scope is the global scope.
 * 
 * @param {Number} outer
 * @returns {Object} returningFunction - inner function
 * 
 *  */
function addTo(outer){

    var returningFunction = function(inner){
        console.log(outer + inner);
    }
  return returningFunction;
}

var closuresTest = addTo(2);

/**
 * @description
 * Closure Example 2:
 * This is inline to the upper example, but has one more inner function. 
 * addTo returns prettyResponse inner function, which has reference to returningFunction & outer variable.
 * Closure scope will have all the variables & functions which are required for inner function to execute.
 * If you do console.dir(closuresTest) this time then along with outer variable, you would also get returningFunction in the closure scope.
 */

function addTo(outer){

    var returningFunction = function(inner){
        console.log(outer + inner);
    }

    var prettyResponse = function(inner){
        console.log("The result of this calculation is : " + returningFunction(inner));
    }
    return prettyResponse;
}

var closuresTest = addTo(2);


/**
 * @description
 * Example 3: Putting closures to the practical use.
 * carRegistry method allows the cars to be registered on the name of a given customer.
 * The car themselves could be of different make and models, the outer method is responsible to create the car stubs, the inner function registerToOwner is used to register the car on a given customer.
 * 
 */

 var Car = function(model, make, yearOfManufacturing, color){
     this.model = model;
     this.make = make;
     this.yearOfManufacturing = yearOfManufacturing;
     this.color = color;
     this.owner = undefined;
 }

 var Owner = function(name, age, address, aadhaarNumber){
    this.name = name;
    this.age = age;
    this.address = address;
    this.aadhaarNumber = aadhaarNumber;
}
 
 var carRegistry = function(carObject){
    var registerToOwner = function(ownerObject){
        if(carObject && ownerObject && carObject instanceof Car && ownerObject instanceof Owner){
            
            carObject.owner = ownerObject;
            
        }
    }
    return registerToOwner;
 }
 var santro = new Car('Santro', 'Hyundai', 2013, 'Silver');
 var praveen = new Owner('Praveen Gaur', 32, 'Khurja', 123456789);
 carRegistry(santro)(praveen);
 console.log(santro.ownerObject.name);
 
 