/**
 * 
 * It's all about method borrowing. apply, bind & call all allows method borrowing i.e. methods defined on one object to be used on other objects.
 * We have see simple method borrowing earlier, this is same but with additional advantages.
 * 
 * 
 */

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