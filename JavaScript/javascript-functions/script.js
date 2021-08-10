//languages like javascript called a functional programming languages
//define function like this
console.log(Alpha());//calling before defining
console.log(Beta());//calling before defining
function Alpha(){
    return "A";
}
function Beta(){
    return "B";
}
//there are some languages calling a function before defining works
//and there are some languages calling a function before defining works
//in javascript calling a function before defining works like just above two functions
//are called before the function defining

//this is because when the javascript file get executed
//it goes two pass way means the interpreter goes through the file two times
//the first time it goes through means first the function definitions or the functions
//are going to executed first and in the next pass all the function calls will be executed
//untill and unless the function definition is not stored in some memeory
//we cant just called the functions

//this means two pass way or going throgh two time
//there is a concept called function hositing
//what it means that the javascipt will get take all the function definition in the first pass
//and take it execute it and paste it at the top most of the file or it will execute
//the function definitions or just stored in a memory for the further calls of that function
//in that way the functions are already defined as we are going to call the functions

//console.log(gamma())//here if we are assigning the function to a variable

//than the hoisting concept will not be applicablke for the function as a varible
//the hoisting conceot is only available for just plain function
//not for function as a varible because we can only use variable after its declaration

//here we are assiging funtion to an variable
//we can also write a nmae to right side function and we can also not 
let gamma=function (){
    return "C";
}//we cannot use this funtion as a varible before its definition or declaration
//because cant be use before its declaration and the function hoisting concept
//wont be present in this type of variable as funtion because functions cant be
//use before its declaration
console.log(gamma())

//it is actually a one time pass we say like this two time pass
//the statements other than functions will be put inside a queue
//and the function definitions are executed and put and stored inside a cache
//and then after all the file gets executed and statments are put inside a quueue
//than after line  by line the queue gets executed and whenever we get a function
//call the javvascript asks that  function call execution which was stored in a cache
//here by this type we can just execute the javascript function before its definition or declaration
//this is call function hoisting

//if hoisting is not there the performance will be better
//but the writing the code in javascript will also be get harder


//NOW POLYMORPHISM
//languages like java and c++ accepts polymorphism
//we can write many functions with different parameters

//but in javascript no polymorphism
//so we can write the logic such in a way that it can peform polymorphism
//as below

//we dont specify data type or let while defining var in function parameters
function area(height, width){
    //by default everything holds in javascript is undefined

    //now see here false,0,undefined and null all are (considered as false) in javascript
    if(width==undefined){//or we can also write condition in this way
        //if(typeof width == "undefined") because typeof operator return in string format
        //so we have to check in string
        console.log("the width is undefined so we are working with only one argument")
        console.log("so one argumnet means it wont be rectangle so its working for circle radius")
        console.log("so by this we can achieve polymorphism")
        return Math.PI*height*height
    }
    console.log("here both the argumnets are not undefined so working for rectanlge")
    console.log("so by this we can achieve polymorphism")
    return height*width;
}
console.log("area 3,4"," ",area(3,4));
//what if i send only one argument
//for one argument it will work for circle
//and for two argument it will work for rectangle
//see in actual function
console.log("area 4"," ",area(4))//in static typechecking that compiler wull
//show some error that you are passing only 1 argument and candidate expects two areguments
//but in javascript no concept of static type check every thing will be in runtime
//the thing is first argumnet will get number or int 4 and the second argumnet
//is empty so empty in javascript means undefined 
//so any operation on undefined with number gives is NaN 

//if we write the functon defining twice or the same function twcie with diffrenet
//argumments than the next written will override the prevoious oine like below
function area(x){
    console.log("pass any number of paremaneter this only will get executed")
    console.log("because the previous function is overrided with this one ")
    console.log("because in javascript the next written function will override the previous one ")
    return x
}

console.log(area(7,2))
let num=10
console.log(num)
num="string"
console.log(num)
num=true;
console.log(num)
num=null
console.log(num)//here we can declare the variable once
//and we can also assing different different datatypes of types to the same variable in javascript

let arr=[1,2,3]
console.log(arr," ",typeof arr)


//so what if we pass more number of argumnents than expected in the function
//can we access all another agumnets look below


//here this function does not contain any paramenter
//so is there any way that we can access the argumnet when we are calling
//this below function


//by this argument default variable or by this functionality given by javascript
//we can also do like this and we can also dont define any variable in the 
//function parameters while defining the function we can leave it empty
//because we can access that all the varible using the argument varible or the argumnet
//object that is predefined in the function by javascript
//by this also we can also achieve polymorphism in javascipt by using the argument object or 
//argument variable or argument keyword
function fun(){
    let arguments=10;//so make sure that if we are not using
    //any variables in the function parameter and we have tu use
    //or we are intending to use arguments than we must not initialize
    //or redeclare or override the variable of anything with name arguments
    //it will leads to error in our program
    //by this we can write every function without parameter
    console.log("yes we can access all the arguments by using this->",arguments)
    console.log("arguments is a varible or can be say as a keyword that")
    console.log("is default created in every function or it can be say")
    console.log("as an array as in javascript array is also a one type of object")
    console.log("argument is a type of object like we can say like array ")
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }
    //let arguments=10;//and now all will give error like cacnnot access 
    //before initialize because we have initilezed variable argumnets
    //and we are accessing before its initialization
    //now cut from here copy to top
    console.log(arguments)//now argument is no more object like array
    //which was used to store all the aguments default in the function
    //because we overrided the argument now it is just a simple variable
    //and no more default object provided by that function

}

fun('qubais','imad','hammeed')//here we are calling function fun with 3 argumnet
//but the function fun() doesnt take any agrument