//in javascript this can be used everywhere
//we can just type this in the browser console
//than it will give output as the window
//because it is now pointing to current window or current execution context or global scope

function checkThis() {
  console.log(this); //call checkThis() in browser
  //it will points to window because we are calling checkThis() from th window
}

//this below is object in javascript
//and we can access through obj.a
//obj.b
//obj.c
//obj.d()  //the d is a function and we can call the function like this
let obj = {
  a: 10,
  b: "qubais",
  c: true,
  d: function () {
    console.log("this is a function"); //typeof obj.d "function"
    //so now what happens if we write this in the console.log()
    console.log(this); //if will point to current object means it will the obj representation
    //of that object that has been called this function or the object which calls this function
  },
  //object within object
  e: {
    l: 234,
    m: "this is a string",
  },
};
//now lets just take the obj.d for our observation
//here if we call obj.d() the output will be this is a functiona and than this will give
//the current obj representation ie the object that has been used to call the function

//but what if we assing obj.d function to some variable let say z
//like this let z=obj.d

//now z is a varible acting like a function means its also a function
//now call z function z() like this in browser
//not let us see what will happen and what will be the output

let z = obj.d;
z(); //the ouput of this will be this is a function and then this will give window
//why we are getting window in place of this why not the object representation
//because we just called this function without any object so no object means
//some thing just called the function that thing is window
//thorught window we called this function so in the place of this is window
//similarly the function which is called thorugh object will give this as an output
//as the object by which we have called that function

//NOTE:;
//this is the keyword which bounds in runtime in javascript
//when the function runs the javascript interpreter check if that function
//is called via a object then the this will give us that object
//or if the function not called via object then the this will give us the current scope of that function

console.log(z == obj.d); //here this is true because they both are the same function

//now here is my observation check below
//nested objects and function with them using this keyword
let obj_1 = {
  fun_1: function () {
    console.log("this is function fun_1 output for this->", this);
  },
  obj_2: {
    fun_2: function () {
      console.log("this is function fun_2 output for this->", this);
    },
  },
};
console.log(obj_1.fun_1()); //output=>this is function fun_1 output for this-> repr of obj_1
console.log(obj_1.obj_2.fun_2()); //output=>this is function fun_2 output for this->repr of obj_2
let o_fun = obj_1.fun_1;
o_fun(); //output=>this is function fun_1 output for this-> window
//because we are not calling o_fun() via object we are calling this function
//with the current scope such as window
obj_1.fun_3 = obj_1.obj_2.fun_2;

//here below the output for the below function is
//this is function fun_2 output for this-> repr of obj_1 because we area calling
//that function via obj_1 and that function is inside the object obj_2
obj_1.fun_3();

let o_fun2 = obj_1.fun_3;
o_fun2(); //here the output for the function is
//this function is fun_2 output for this -> window because we are not calling
//this fucntion via any object so window will be the current scope of that function

//here acbove is for the scopes and the closure for the this keywords

//now here below for the objects and key/value pair for the objects
let objects = {
  10: "its number",
  a: function () {
    return 10;
  },
  qubais: "this is name qubais",
  A: "this A is also consider as string in javascript",
  name: "its a name",
};
//by default the javascript assume the key as a string
//so 10 by default is "10" in key side in javsacript
//we can also just write A:'this is a"
//so as far javascript condier all the keyys as string format

//console.log(objects.10)//the numerical value after . in accessing particulat key
//wont be work in javascript

//if we wanted to access 10 key
//then we must you as below
console.log(objects["10"]);
console.log(objects["A"]); //we can access everything like this
console.log(objects.name); //apart from numerical values we can access everything like this
console.log(objects.a());
console.log(objects["a"]()); //here is the way we can access the functions like this
//or anyother thing

//javascript behaves different on nodejs and browser
//window and document does not present in nodejs
