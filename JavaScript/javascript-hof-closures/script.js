/*
A closure is the combination of a function bundled together (enclosed) with references
 to its surrounding state (the lexical environment). 
 In other words, a closure gives you access to an outer 
 function’s scope from an inner function. In JavaScript,
  closures are created every time a function is created, 
  at function creation time.
*/

function outer(arg1) {
  let var1 = 10;
  let x = 10;
  arguments; //here argumments are the keyword not a variable
  //and we cannot capture the arguments in the inner function
  //closure in javascript does not support arguments capturing in the next nested function\
  //but we can access them like this let arg_1=argument[0]; let arg_2=argument[1];
  //by assing all the arguments to some variable we can assing that in inner function
  function inner(arg2) {
    let var2 = 20;
    let x = 20;
    console.log(arg1, " ", var1, " ", arg2, " ", var2, " value of x ", x);
    //here above the x will be 20 because the x=20 shadow the x=10
    //current scope get more priority
    //now in inner function the outer scope x can be accessed and accessing it wont be possible
    //becuase the inner has x that has shadowed outer scope x
  }
  return inner;
}
//scope of arg1 andd var1 are from the function outer
//and the scope of arg1 and var1 is from statring of outer function to ending of outer function

let x = outer("param1");
//console.log(typeof x)//function
x("param2");

//the meaning of the closures scopes is that
//when ever the curr_function is define whatever scopes of the variable or any scopes that
//exists at its defining time(curr_function defining time) it will be existed till that end of that curr_function
//till that curr_function lasts in the memeory
//that scopes that are present at the time of its birth place are captured
//by that function and lasts till that function is present in the memeory

//and the functions are infintily nested(can be nested infinte time)
//every level by level the scope of memebers gets captured by the current function

console.log("like here some observations regarding the arguments in closures");
//here argumments are the keyword not a variable
//and we cannot capture the arguments in the inner function
//closure in javascript does not support arguments capturing in the next nested function\
//but we can access them like this let arg_1=argument[0]; let arg_2=argument[1];
//by assing all the arguments to some variable we can assing that in inner function
function Outer() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  function Inner() {
    console.log(arr); //by like this we can access the arguments of the outer scope
    //inside the inner scope
    console.log(arguments); //it will print the argumnet of the inner function scope
    //not the outer function scope
    //untill and unless we assing that outer functions arguments to some
    //of the varibles we cant access them
    //we must capture them to print or manipulate them(arguments) in nested function
  }
  return Inner;
}

let fun = Outer("qubais", "hameed", "imad");
fun();


//try out writing nested function and working with closures