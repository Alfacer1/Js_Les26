
class A {
    read() {
      console.log("Method read from class A");
    }
  }
  
  class B extends A {
    close() {
      console.log("Method close from class B");
    }
  }
  
  const instanceB = new B();
  
  console.log("read" in instanceB);  
  console.log("close" in instanceB); 
  
  console.log(instanceB.hasOwnProperty("read"));  
  console.log(instanceB.hasOwnProperty("close")); 
  
  console.log(Object.keys(instanceB));
  