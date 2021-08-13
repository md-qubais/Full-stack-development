/*
let a=10;
console.log(a)
a=[1,2,3,4,5,6]
console.log(a)
*/
//let, var, constant and global variables
//c=10;//global scope
//var d=100//function scope
//let e=200//block scope


//below see here the scopes
function fun(){
    let b=5;
    console.log(d)//if we are going to print the d variable
    //it wont give error like d is not defined because d is var it will
    //be stored in main memeory by javascript in one pass
    //and after executing the function it will give us undefined because it is 
    //defined var but not initialize because the var varible will bind at runtime
    
    //console.log(a)//here a is not defined error because a is neither global nor 
    //var if it would have been let 
    //Uncaught ReferenceError: Cannot access 'a' before initialization
    
    let a=10
    console.log(c)//see here we can use see but it will give us such as undefined
    //we can use like this
    c=350//we have defined c at if block as var 
    //javscript intreperte stored it in memory an then we can use 
    //it till it encounters but it will give use undfined
    //so we can change it frolm undefined to anything and use it after it reacher
    //it definining stage it will agein override the undefined or procided
    //r value and stored what have been provided
    console.log(c)
    if(b==5){
        let a=20;
        var c=1000
        
        //console.log(global_scope)//but we have to use global_scope variables
        //after its declration
        console.log(a);//here we can access a  
        {
            let m=20;{
                var d=500
            }
            {
                {
                    global_scope=123;//here just writing like this creates us global
                    //scope can be use anywhere in javascript file
                    //but we have to use global_scope variables
                    //after its declration
                }
            }
        } 
    }
   // console.log(a)//here we cant access a because a is defined on above blocks
    //and its block scope Uncaught ReferenceError: a is not defined
    console.log(c)//here we can access c anywhere inside the function
    //no matter what and where we have declared the var variable inside any function
    //inside number of nested scope once it declared than we can call that varibale
    //anywhere inside that function itself only
    console.log(d)//se we can access here d even we have declared d inside the nested blocks
    //declare anyywhere and we can call var varible from anywhere after decvlaration
}
fun()
console.log(global_scope)
let obj={
    name:"qubaisddin",
    clg:"shadan college",
    address:'hyderabad'
}
console.log(obj["name"])
console.log(obj.name)


let arr=['qubais','imad','hameed','mansoor','affan']
console.log(arr["length"])//this is same as accessing varibles and methods from object
console.log(arr.length)//same as access the varibbles of object because
//array is one type of object in javascript
//because everything in javascript is inherited from Object in javascript
//so everything is object in javascript

 arr.push("raqeeb")//push to back
 arr.pop()//pop from back
 arr.shift()//pop from front
 arr.unshift()//add to front
 arr.indexOf(1)


//javascript object notation

let Bird={
    x:10,
    y:20,
    color:"blue",
    Eggs:["one","two","three","four"],
    fly:function(){
        console.log("bird is flying ",this.x,this.y)//we cant just siomply use x ahnd y
        //because they are not defined anywheere we should use this to use those object
        //level varible and it will give that varible from which object via the varibales
        //are been used
    }
}

for(let i=0;i<Bird.Eggs.length;i++){
    console.log(Bird.Eggs[i])
}


//one way of extracting elements and its corrosponding index from the object
Bird.Eggs.forEach( function(val,index){
    console.log(val," ",index)
} )

Bird.fly()
Bird.add_fun=function(){
    console.log("this is add_fun added outside the object declaration and definition and is added this way")
}

Bird.add_fun()