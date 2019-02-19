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

const executor = (resolve, reject)=> {
    let num = Math.random();
    if(num >= .5){
      resolve(num);
    }else{
      reject(new Error(`oops!!, the number is ${num}`));
    }
  }
  const promise = new Promise(executor);
  promise.then((resolveValue)=>{
    console.log(1);
    console.log(`Ho Ho, the number is ${resolveValue}`);
  });

  promise.then((resolveValue)=>{//binding the multiple callback(s) to the same promise
    console.log(2);
    console.log(`Ho Ho, the number is ${resolveValue}`);
  });
  
  promise.catch((errorValue)=>{
    console.log(`Oh Ho, it's an ${errorValue}`);
  });
  
  