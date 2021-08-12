let str = "string"; //3 levels from null in __proto__ chain
let num = 123; //3 levels from null in __proto__ chain
let bool = true; //3 levels from null in __proto__ chain
//let arr=[1,2,3,4]  //3 levels from null in __proto__ chain
let obj = {
  a: 10, //only Objects are 2 levels from null in __proto__ chain
};
let fun = function () {
    let b=500
  console.log("this is a function");
}; //3 levels from null in __proto__ chain

//if x and y are not primitive
//x==y means they are same object or they are actually refers to the same datatype
//with same reference in the meneroy

console.log(typeof String); //function
console.log(String(123));
console.log(String(true));
//String is a function and it will convert all the above into string format

console.log("type of String=", " ", typeof String);
console.log("type of Boolean=", " ", typeof Boolean);
console.log("type of Number=", " ", typeof Number);
console.log("type of Array=", " ", typeof Array);
console.log("type of Object=", " ", typeof Object);
console.log("type of Function=", " ", typeof Function);
//all of these above are functions

console.log(Array(1, 2, 3)); //creates an array of size three with these as values inside it
let arr = Array(1, 2, 3, 4, 5);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(Array(1)); //if the argument is only one and its of numerical then
//the Array function just simnply creates that number if empty slots in the array
console.log(Function()); //create function ie anonymous function
let x = Function();
console.log(typeof x); //function

console.log(Object("x", "y")); //if passed anything in object function it will
//just create string object like String {"x"}
console.log(Object(1, 2)); //just create Number Object like Number{1}

//we are just calling them globally then where are they exist
//actually they exist in window in browser
console.log(window.String);
//whenever we talk about anything that is globally present actually that is present inside
//the window

//now here below
str = "this is string";
console.log(str);
console.log(str.__proto__); //this is inherited from String
console.log(str.__proto__.__proto__); //this is inherited from Object
console.log(str.__proto__.__proto__.__proto__); //now null

console.log(str.__proto__.__proto__ == obj.__proto__); //true
console.log(num.__proto__.__proto__ == obj.__proto__); //true
console.log(fun.__proto__.__proto__ == obj.__proto__); //true

//everything inherits from the same thing
//that obj is inherited from
//ie in javascript essentially an Object
//means everything is inherited from Object

//Object.__proto__ is null means it inherited from null
//that means Object is origin from everything
//root of inheritance tree of javascript
//obj.__proto__ is the most primitive in javascript

console.log(obj.__proto__ == Object.prototype); //true
console.log(str.__proto__ == String.prototype); //true
console.log(num.__proto__ == Number.prototype); //true
console.log(arr.__proto__ == Array.prototype); //true
console.log(fun.__proto__ == Function.prototype); //true

//console.log(document.__proto__); //inherited from HTMLDocument.prototype

//everything is object in javascript

//like in javscript function can also be act like an Objects
//like below we are adding variable to function fun
fun.a=200;
console.log(fun)
console.log(fun.a)//se we can access here a varible of function fun like we can
//access the varibles from the object

//String.prototype inherits from Object.prototype

//typeof Object.create(Boolean.prototype) =>means that it is inheriting from Boolean.prototype
x=Object.create(Boolean.prototype)
bool=true;
console.log(x.__proto__)//Boolean
console.log(bool.__proto__)//Boolean
console.log(x.__proto__ == bool.__proto__)//true means they inherits from same parent
//that does not mean that they are same or they have same type
console.log(typeof x)//object
console.log(typeof bool)//boolean


//here in javascript that object orinted things are done using prototypes
//and here object orinted nature of javascript is driven using prototypes
//and prototypes are the blue prints that which we are using to create things in javascript
//__proto__ is hidden level
//prototype is by default present in javascript
//that shows the current blue print of the object
//and __proto__ just  a point points to where the current object or current things was inherited



let str1="this is string"
console.log(str1.charAt(0))//t
console.log(str1.charAt)//function undefined
let str2="this is also a string"
console.log(str2.charAt(0))
console.log(str2.charAt)//function undefined

console.log(str1.charAt == str2.charAt)//this is true
//how because they both are indirectly or directly inherited from String.prototype
//from single String.prototype these both are inherited mean that charAt function
//is present in String.prototype that both are inherited so therefore its give output
//true because both are actually the same function inside String.prototype

str1.charAt=function(){return 'x'};//doesnt make any change we cant just override
//the functions of any primitive prototype such as String.prototype or Number.prototype
//so they both charAt is present in 
//str1.__proto__.charAt and str2.__proto__.charAt they both are same
//because str1.__proto__ is String.prototype or str2.__proto__ is String.prototype
//like in java we cannot override final class or final methods in java 

//we just cant change in str1.charAt or str2.chatAt
//but we can change in String.prototype.charAt in actual object

String.prototype.charAt=function(){return "qubaisuddin"}
console.log(str1.charAt())
console.log(str2.charAt())
console.log(String.prototype)//here we will get the inbuilt function of Strings
//like split splice 
//charAt concat and all those stuff
//Same goes for Number.prototype and all inbuilts functions are present inside the
//Number.prototype

Array.prototype.joinOriginal=Array.prototype.join
//here above we are creating a new varible and assigning the reference of join function
//that is present inside the Array.prototype
//now here below i am overriding the join function like this in Array.prototype
Array.prototype.join=function(){
  //this because we are calling via object
  console.log(arguments," "," joining to"," ",this)

  //here below this means to the current via calling object we must join the provided arguments
  return this.joinOriginal(...arguments)//here we are using this for calling current object
}//...arguments means we are spreading arguments
let array=[1,2,3,4];
console.log(array.__proto__==Array.prototype)
console.log( array.join(',',';','qubais'))//here we are joining the entire array with comma separated
//you can give how much you wanted but it is only applicable to the first argument


//refer below how the Array.prototype goes
/*
Array.prototype   //basically its is one of the object
{
  join:function(){do something its original},
  joinOriginal:function(){same as join just we passed join function here} 
  //here above we created joinOriginal function using Array.prototype.joinOriginal = Array.prototype.join


  join:function(){
  console.log(arguments," "," joining to"," ",this)
  return this.joinOriginal(...arguments)//here we are using this for calling current object
}//here we just override the join function of Array.prototype
by just using Array.prototype.join=Array.prototype.join=function(){console.log(arguments," "," joining to"," ",this)return this.joinOriginal(...arguments)//here we are using this for calling current object}
}
*/

