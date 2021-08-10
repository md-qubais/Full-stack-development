//if any language allows function passing as an argument
//or if any language allows the returing the function from another function
//if any of these are possible or if both of them are possible
//such a language support higher order function

//first order functions are those types of function that which are present in the global scope
//and can be called directly wherever we wanted

//higher order function is an another function that we take it as a parameter from
//another function and we call that function inside the function 
//second,third etc order function
//just simnpley means functions inside a function or functions

//in c we cant define the function within body of another function
//buw we can call function witin function


//this below can known as the higher order function
/*
function creategreeter(greeting){
    function greet(name){
        console.log(greeting," ",name)
    }
    return greet // here we are just returning function
}
let g1=creategreeter("good morning");
console.log(g1)//function representation or definition
console.log(typeof g1)//function
*/
function creategreeter(greeting){
    function greet(name){
        console.log(greeting," ",name)
    }
    return greet()//this is a function call that means we are returning here
    //what is greet going to return
}
let g1=creategreeter("good morning");//here we are calling function creategreeter and 
//whataever it will returns we are storing inside the g1
//so the creategreeter at time of returing it calls greet function so that means
//that whatever greet function will returns  that will be stored in g1
//but greet function is just printing and what is is printing 
//means that greet function has greeting value something from creategreeter function
//because the creategreeter function will be the next scope for all the varible that are
//not present in the greet if not find in greet it will check its super context
//if not fuound in its super context it will check in its next super context
//that will go on till there is no further super or global context
// but it does not have any value for name so name is undefined
//so it prints value_present in greeting and then undefined 
//and not returing any thing
//not returing anything means that it will return undefined and the undefined is stored
//in g1
console.log(typeof g1);//so the ouput will be first good morning undefined
//and typeof g1 will be undefined

function CreateGreeter(greeting){//here CreateGreeter is a higher order function for greet function
    function greet(name){//if name is a function than greet can be act as higher order function
        //for name function if name is not a function then greet is not higher order function
        console.log(greeting+" "+name)//if name is a function we have to use name()
        //else if its not a function then use just name
    }
    return greet
}
//what i have done is here above i have 
//create function for greeting to anybody
//we can greet good morning , good evening and any festivals
//so i made generic function to greet anything to anyone
let G1=CreateGreeter("good morning")
let G2=CreateGreeter("good evening")

G1("qubais")//good morning qubais
G1("hameed")//good morning hameed

G2("qubais")//good evening qubais
G2("hameed")//good evening hameed

//in this below greet function we are just bounded to greet anyone with
//just hello 
function greet(name){
    console.log("hello"+" "+name)
}
//here in this function we can greet anyone to anybody
//it does exacly the same greet like the higher order function
//but higher order function are just good for generates different types of greeting function
//that can greet anything to anyone
function greet(greeting,name){
    console.log(greeting," ",name)
}


function getName(){
    return document.getElementById("namebox").value
}

