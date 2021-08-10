console.log(typeof 123); //number
console.log(typeof 12.3); //number
console.log(typeof "a"); //string both single characters and number of character all are string
console.log(typeof "qubaisuddin"); //string
console.log(typeof null); //object(object datatype) if its null than also its an object
console.log(typeof true); //boolean
console.log(typeof undefined); //type of undefined is also undefined
/*
below are the datatypes that observed
1->number
2->string
3->boolean
4->object
5->function
6->undefined
*/


//here we can create function
/*   
function fun_name(){
    return val;
}
*/

//here in javscript we can assign function to a variable
//and that variable can act as a function
//the function can treated as r value which can assing to l value
let a = function () {
  return 1; //and it returns 1
};
/*
b=20;
console.log(b())//here we will get runtime error we wont get any compile
//time error because no compilation stage in javascript and after this runtime error
//the next lines of code in javscript wont be get executed
*/
console.log(a, " ", typeof a); //the reprsentation of that complete function gets printed
//and in the typeof it will print as function because there is also a datatype in javascript
//as called as function and object both are considered as the datatypes in javascript
//a is a function here we get output as a conplete
//function in a browser i mean complete function body param everything
//and its type is function
//its basicaly we are treating it as a function as a variable
//we can pass variables as an argument in the function param

//here the abnve line code can be represented as
console.log(
  function a() {
    return 10;
  },
  " ",
  typeof function a() {
    return 10;
  },
  " ",
  a() //here a because on the stack we only have above written function a rendered
);
console.log(a(), " ", typeof a()); //a() is a function call so here we get 1 and in type of also
//function call so here we get number
console.log(a); //its just same as a, (20+3)==20+3

console.log("this is alos string", "this is also stirng"); //we can create string
//with single quotes and as well as the double quotes both are strings
