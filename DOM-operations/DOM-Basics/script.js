/*
Lmabda functions or pure functions

1->these functions lambda or pure these are stateless functions
2->these functions are only depedent on the input and nothing else
3->for the same input, the output will always be the same

*/
let a=10


//and the functions that can be representated as mathematical
//functions can be known as the lambda functions
//mathematical function for the below
//is like 2*3+3
function fun(x){
    return 2*x+3
}
//that above function is  can be say as lambda or pure function
//because it is dependent upon only the input
//and it is stateless and not calling vai any object
fun(10)//it will always will be 10 whatever will be the case

let count=1;
function fun1(delta){
    count+=delta;
    return count
}
//that above function cannot be say as lambda because its dependent to the global
//variable of its scope that is count
//because in cmmputer science it can exits but in mathematics these type of
//functions wont exists


//so arrow functions introduced in javascript to make lambda or the pure
//fucntions understand and make it easier
let f1=(x)=>{
    return count+x;
}
console.log(f1(10))
count++;
console.log(f1(10))
count++;
console.log(f1(10))
//here diffrent output

let f2=(x)=>(2*x+3);//here is lambda function that just calculates something and returns its
//returing means its a function and we have to call like below way
console.log(f2(10))
console.log(typeof f2)//function
console.log(function(){})//function representation

//arrow functions are here because if its is lambda function or pure function
//so we can define them in shorter syntax and in a very concise way


let f3=(x)=>{
    //do something
    console.log(x)
}//here the lambda  function binds the this because its stateless
//there it just binds the this if we are calling from the object
//and the this wont change in arrow functions
//becuase these functions are not used to give changing values
//depends upon the object

//but these functions can make use of the global state
//and in the above code liek we are using the count and everytime we are increasing
//them and we can see some different outputs for the different count value
//with the same input

//arrow functions never use global varibles inside the functions
//if we dont wanted to use if we donot depend on such things



