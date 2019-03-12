/**
 * ==================================== Asynchronus JS. ===================================================
 * JS is a single thread language, and traditionally we execute the code synchronusly.
 * But if there is some thing which you need to process but should not block the user experince or if the rest of the code
 * does not depend on this thing, then better you execute this code asynchronusly.
 * Which means that this piece of code will be put in message-queue and the thread goes with the execution of the rest of the code.
 * Once the EXECUTION-STACK is empty i.e. it is done with execution all of the code, then the event loop will pick 
 * the first message from the message queue and will start processing.
 * All such messages(code peices to be executed asynchronusly) waiting in the MSG-Q, will be executed in the order
 * they were inserted in the queue.
 * ==================================== Asynchronus JS. ===================================================
 */

/**
 * Promises is the elegent way of doing the asynchronus tasks.
 * Promises, ensures to execute the code and return the value(both in success and failure) at some point in time in future. But it promises to execute asynchronusly.
 */

 //Example 1: Simple Promise example, resolving and rejecting on consdition basis
 const roomCleaning = (resolve, reject)=> {
    let num = Math.random();
    if(num >= .5){//Mimicing the success - room cleaned successfully
      resolve(num);
    }else{
      reject(new Error(num));//Mimicing the failure - room not cleaned
    }
  }
  const promise_1 = new Promise(roomCleaning);
  promise_1.then((resolveValue)=>{//Success handler, Football
    console.log(`Success handler - room claened successfully, football time!!`);
    console.log(`resolveValue: ${resolveValue}`);
  });

  promise_1.catch((errorValue)=>{//Failure handler, laundry
    console.log(`Error handler - room not claened, has to do laundry`);
    console.log(`error: ${errorValue}`);
  });
 

 /**
  * 
  * Example 2_1.1: 
  * multiple handler attached to the same promise - all handlers will be executed in the same order as registered with the Promise.
  * 
  * Note: If all the error handlers will be executed or just one depends upon how you have written the code.
  * If you register the handler like:
  * 
  *  promise_1.catch//first error handler
  *  promise_1.catch//second error handler
  * 
  * then all the registered handler will be executed
  */  

const roomCleaning = (resolve, reject)=> {
    let num = Math.random();
    if(num >= .5){
      resolve(num);
    }else{
      reject(new Error(`oops!!, the number is ${num}`));
    }
  }
  const promise_1 = new Promise(roomCleaning);
  promise_1.then((resolveValue)=>{
    console.log(`Resolve handler 1, value is ${resolveValue}`);
    console.log(`room claened successfully, football time!!`);
  });

  promise_1.then((resolveValue)=>{//binding the multiple callback(s) to the same promise
    console.log(`Resolve handler 2, value is ${resolveValue}`);
    console.log(`After footbal, i will go for swimming!!`);
  });
  
  promise_1.catch((errorValue)=>{
    console.log(`Error handler 1, value is ${errorValue}`);
    console.log(`Room not claened, has to do laundry`);
  });
  promise_1.catch((errorValue)=>{
    console.log(`Error handler 2, value is ${errorValue}`);
    console.log(`After laundry, i need to clean my room anyway !!`);
  });

  /**
  * 
  * Example 2_1.2: 
  *
  * If you register the handler like:
  * promise_1.catch(//handler code).catch(//handler code).catch(//handler code)
  *
  *  Then:
  * 1)  only the first catch handler will be executed.
  * 2)  All the resolve handlers will be executed - as usual.
  */

const executor = (resolve, reject)=> {
    let num = Math.random();
    if(num >= .5){
      resolve(num);
    }else{
      reject(new Error(`oops!!, the number is ${num}`));
    }
  }
  const promise_1 = new Promise(executor);
  promise_1.then((resolveValue)=>{
    console.log(`Resolve handler 1`);
    console.log(`Ho Ho, the number is ${resolveValue}`);
  }).then((resolveValue)=>{//binding the multiple callback(s) to the same promise
    console.log(`Resolve handler 2`);
    console.log(`Ho Ho, the number is ${resolveValue}`);
  }).catch((errorValue)=>{
    console.log(`Error handler 1`);
    console.log(`Oh Ho, it's an ${errorValue}`);
  }).catch((errorValue)=>{
    console.log(`Error handler 2`);
    console.log(`Oh Ho, it's an ${errorValue}`);
  });

  /** 
   * Example: 3
   * 
   * A promise can be:
   * - Fulfilled
   * - Rejected
   * - Or can return another Promise
   * 
   * In the example above, promise_1 is either resolving or rejecting.
   * In this example, will see a promise returning another promise.
  */
 
 const executor = (resolve, reject)=> {
    let num = Math.random();
    if(num >= .5){
      resolve(num);
    }else{
      reject(new Error(`oops!!, the number is ${num}`));
    }
  }

  const promise_1 = new Promise(executor);
  promise_1.then((resolveValue)=>{
    console.log(`promise_1: promise Ho Ho, the number is ${resolveValue}`);//1
    return new Promise((resolve, reject) => {//lets call it promise_2
        console.log(`promise_2: calling resolve`);//2
        resolve('resolveValue');
        console.log(`promise_2: resolve called`);//3
    })
  }).then((value)=>{
    console.log(`inside the resole handler of promise_2, the number is ${value}`);//5
  })
    
  
  promise_1.then((resolveValue)=>{//binding the multiple callback(s) to the same promise
    console.log(`Ho Ho, the number is ${resolveValue}`);//4
  });
  
  promise_1.catch((errorValue)=>{
    console.log(`Oh Ho, it's an ${errorValue}`);
  });
  //----------------

  const roomCleaning = (resolve, reject)=> {
    let num = Math.random();
    if(num >= .5){//Mimicing the success - room cleaned successfully
      resolve(num);
    }else{
      reject(new Error(num));//Mimicing the failure - room not cleaned
    }
  }
  const promise_1 = new Promise(roomCleaning);
  promise_1.then((resolveValue)=>{//Success handler, Football
    console.log(`Success handler - room claened successfully, football time!!. Resolve Value: ${resolveValue}`);
      //New Promise to handle the additional tasks - which are dependent on this one.
      //music concert vs dog cleaning.
      new Promise((resolve, reject)=>{
        let num = Math.random();
        if(num >= .5){//Mimicing the success - go to concert
          resolve(num);
        }else{
          reject(num);//Mimicing the error - dog cleaning
        }
      })
    
  }).then((resolveValue) => {
    console.log(`Success handler - i am in music concert!!. Resolve Value: ${resolveValue}`);
  }).catch((errorValue) => {
    console.log(`Error handler - no goal, cleaning the dog :( ${errorValue}`);
  })

  promise_1.catch((errorValue)=>{//Failure handler, laundry
    console.log(`Error handler - room not claened, has to do laundry. errorValue: ${errorValue}`);
     
     //New Promise to handle the additional tasks - which are dependent on this one.
     //music concert vs dog cleaning.
    new Promise((resolve, reject)=>{
      let num = Math.random();
      if(num >= .5){//Mimicing the success - go to concert
        resolve(num);
      }else{
        reject(num);//Mimicing the error - dog cleaning
      }
    })
  }).then((resolveValue) => {
    console.log(`Success handler - i am in music concert!!. Resolve Value: ${resolveValue}`);
  }).catch((errorValue) => {
    console.log(`Error handler - no goal, cleaning the dog :( ${errorValue}`);
  })

//----------------


  /**
   * Error Handling:
   * Promises offers the abolity to handle the exceptions:
   * - Where ever the exception has happened - either in the executor or in then, the closest catch is executed.
   * - In error scenario, reject does not has to be called explicitely, in case of any exception JS will execute the closest catch.
   * - Once the exception is handled successfully, the next then is executed - in the same order as it is inserted in the task-queue.
   * - Unhandled exceptions - browser triggers an event 'unhandledrejection', which you can handle on the window object.
   */

   /**
    * Example 4_1: Throwing error from executor
    * Using the reject explicitely
    */
   const executor = (resolve, reject)=> {
    let num = Math.random();
    if(num >= .5){
      //resolve(num);
      reject(new Error(`oops!!, the number is ${num}`));
    }else{
      reject(new Error(`oops!!, the number is ${num}`));
    }
  }
  const promise_1 = new Promise(executor);
  promise_1.then((resolveValue)=>{
    console.log(`Resolve handler 1`);
    console.log(`Ho Ho, the number is ${resolveValue}`);
  });

  promise_1.catch((errorValue)=>{
    console.log(`Error handler 1`);
    console.log(`Oh Ho, it's an ${errorValue}`);
  });
  promise_1.catch((errorValue)=>{
    console.log(`Error handler 2`);
    console.log(`Oh Ho, it's an ${errorValue}`);
  });

  /**
    * Example 4_2.1: Error happening in executor. Catching error without using reject explicitely
    * NOTE:
    */
  const executor = (resolve, reject)=> {
    let num = Math.random();
    if(num >= .5){
      throw new Error(`oops!!, the number is ${num}`);
    }else{
      throw new Error(`oops!!, the number is ${num}`);
    }
  }
  const promise_1 = new Promise(executor);
  promise_1.then((resolveValue)=>{
    console.log(`Resolve handler 1`);
    console.log(`Ho Ho, the number is ${resolveValue}`);
  });

  promise_1.catch((errorValue)=>{
    console.log(`Error handler 1`);
    console.log(`Oh Ho, it's an ${errorValue}`);
  });
  promise_1.catch((errorValue)=>{
    console.log(`Error handler 2`);
    console.log(`Oh Ho, it's an ${errorValue}`);
  });

  /**
    * Example 4_2.2: Error happening in resolve handler. Catching error without using reject explicitely
    * When exception is thrown from the resolve handler - the catch is not executing. This is because we have registered the catch like 
    * promise_1.catch
    * This way somehow JS does not handle the exceptions happened in resolve handler but in executor function only.
    * 
    * ===
    * But if you write the code the way suggested in 4_2.3 then it will work
    */
  const executor = (resolve, reject)=> {
    let num = Math.random();
    if(num >= .5){
      resolve(num);
    }else{
      throw new Error(`oops!!, the number is ${num}`);
    }
  }
  const promise_1 = new Promise(executor);
  promise_1.then((resolveValue)=>{
    throw new Error(`oops!!, the number is ${resolveValue}`);
  });

  promise_1.catch((errorValue)=>{
    console.log(`Error handler 1`);
    console.log(`Oh Ho, it's an ${errorValue}`);
  });
  promise_1.catch((errorValue)=>{
    console.log(`Error handler 2`);
    console.log(`Oh Ho, it's an ${errorValue}`);
  });

   /**
    * Example 4_2.3: Error happening in resolve handler. Catching error without using reject explicitely
    * 
    * But if you write the code like: promise_1.then().catch().catch(). Then:
    * 
    * 1) The exceptions happened in the resolve handler will also be handled.
    * 2) Only the first catch handler will be executed, unless you do not rethrow the error from first catch - in that case the second available catch is executed.
    * 3) 
    */
const executor = (resolve, reject)=> {
    let num = Math.random();
    if(num >= .5){
      resolve(num);
    }else{
      throw new Error(`oops!!, the number is ${num}`);
    }
  }
  const promise_1 = new Promise(executor);
  promise_1.then((resolveValue)=>{
    console.log('Inside resolver handler 1');
  }).then((resolveValue)=>{
    console.log('Inside resolver handler 2');
    throw new Error(`oops!!, the number is ${resolveValue}`);
  }).catch((errorValue)=>{
    console.log(`Error handler 1`);
    console.log(`Oh Ho, it's an ${errorValue}`);
  }).catch((errorValue)=>{
    console.log(`Error handler 2`);
    console.log(`Oh Ho, it's an ${errorValue}`);
  });

   /**
    * Example 4_3: Unhandled errors, Promises with out catch handler
    * Though it is a result of bad coding practices. But if that happens that browser gives an event that can be captured to take the proper 
    * action. Event is unhandledrejection
    *
    */
const executor = (resolve, reject)=> {
    let num = Math.random();
    if(num >= .5){
      throw new Error(`oops!!, the number is ${num}`);
    }else{
      throw new Error(`oops!!, the number is ${num}`);
    }
  }
  const promise_1 = new Promise(executor);
  promise_1.then((resolveValue)=>{
    console.log('Inside resolver handler 1');
  }).then((resolveValue)=>{
    console.log('Inside resolver handler 2');
    throw new Error(`oops!!, the number is ${resolveValue}`);
  });

  window.addEventListener('unhandledrejection', function(event) {//Global handling for unhandled promises.
    // the event object has two special properties:
    alert('Global promise handler' + event.promise); // Error: Whoops! - the unhandled error object
    alert('Global promise handler' + event.reason); // Error: Whoops! - the unhandled error object
  });
  