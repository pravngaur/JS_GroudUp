function primitiveTypes(){
    var firstName  = "Praveen";
    var lastName = "Gaur";
    var age = 31;
    var fullAge;
    /**
     * always use === in order to check the type of the variable as well
     * 
     *  */ 
    
    if(fullAge === null){
        console.log("null")
    }
    if(fullAge === undefined){
        console.log("unde")
    }
    
}

/**
 * Type coercion means the changing the type of the variables. JS does it automatically unlike other programming languages like 
 * JAVA.
 * 
 * String: All the variables types when concatinated with String, gets converted to String type.
 * Undefined: All primitives when operated with undefined, produces NaN
 * Boolean: Boolean becomes 0 or 1 & that is how behaves in numerical operations.
 * Null: becomes 0 & that is how behaves in numerical operations.
 * 
 * There are five types of primitive types in JS:
 * Null: Null 
 * String
 * Number
 * Boolean
 * Undefined
 * Null
 * 
 */
function typeCoercion(){
    var stringType = 'praveen';
    var numberType = 32;
    var undefinedType = undefined;
    var nullType = null;
    var booleanType = true;
    //Not doing for String as we know, any operation of String with other primitive type will convert it to String

    //1 number with undefined
    console.log('number with undefined: ');
    console.log(numberType + undefinedType);

    //2 number with null
    console.log('number with null: ');
    console.log(numberType + nullType);

    //3 number with boolean
    console.log('number with boolean: ');
    console.log(numberType + booleanType);

    //4 undefined with null
    console.log('undefined with null: ');
    console.log(undefinedType + nullType);

    //5 undefined with boolean
    console.log('undefined with boolean: ');
    console.log(undefinedType + booleanType);

    //6 null with boolean
    console.log('null with boolean: ');
    console.log(nullType + booleanType);

    console.log('null * boolean: ');
    console.log(nullType * booleanType);
    console.log(null / undefined);
    
}

/**
 * Null, 0, NaN, undefines, '' always results in false inside a if condition
 * 
 * All other values apart from the FALSY values are considered as TRUTHY while using inside a expression
 */
function falsyValues(){
    if(null){
        console.log('non falsy')
    }else if (undefined) {
        console.log('non falsy')
    }else if (NaN) {
        console.log('non falsy')
    }else if (0) {
        console.log('non falsy')
    }else if ('') {
        console.log('non falsy')
    } else {
        console.log('Above all are falsy values')
    }
}

/**
 * Function expressions & statements:
 * There are two ways to define the functions, the above mentioned methods are defined as statements.
 * Below is a expression way of doing the same thing.
 */
var expressionFunction = function(name, age){
    return name + ' is ' + age + ' years old.';
}
