function Person(name,age){
    this.name=name
    this.age=age

    /*
    here in function as class we cant create function means generall
    //funtions like thisn
    function details(){
        console.log(this.name)
        console.log(this.age)
    }
    //we must create like below as varible as functions
    */
    this.details=function(){
        console.log(this.name)
        console.log(this.age)
    }
    return 10;
}
let p=Person("qubaisuddin",21)//just a simple function call
//it will store the value what has been returned if not returnred anything it 
//will store undefined
console.log(name)
console.log(age)
Person("imad",22)
console.log(name)
console.log(age)
//above we learend a new concept
//that if we are using function as classes
//than we must write in it this.var_names to initialize that as to initialize
//thier memeber
//but observe that we are using this.name and this.name and down
//we are not using new keyword that measn the functions whihc are acting\
//like variable doenot invoke constriuctore kind of thing
//that means those this repsetative keywords will act as a global variables
//and can be available and also can be override anywhere in the ncurrent javascript file

let p1=new Person("raq",23)//we have ti use new to instantiate the funciton as class
console.log(p1.name)//here just name will gicve  use the previous name and age that has
//been overriden by imad and 22
console.log(p1.age)
p1.details()



//now if the function is hoisted
//let us see if functions as the class also hoisted or not
//let see below
//yes functions as classes are hoisted 
let student=new Student("mohammed qubaisuddin",21)
console.log(student.name)
console.log(student.age)

//NOTE
//here below error because they are not hoisted
//adding explicitly anything to object using Prototype will not the part
//be hoisted and we must use them after adding explicitlyyyyyy
//console.log(student.isAdult())//function and method

//calling before adding explicitly in the class or objects
//of function as class are not hoisted
//we must use them and acheive them after we had declare
//them explicitly like below

function Student(name,age){
    this.name=name;
    this.age=age;
    this.details=function(){
        console.log(this.age)//remove this from here it will print imad 22
        //because global variables are create because function as class
        //we didnt use new in Person calling
        console.log(this.name)
    }
}

//if we wanted to add anything in the root level prototype of the fuinction as classes
//or normal Classes or object or anything whihc will be available to all the subobjects
//then we must add liek this below

Student.prototype.isAdult=function(){
    return this.age>=18
}
console.log(student.isAdult())

console.log(JSON.stringify(student))//gives complete representation of that object




let array=[1,2,3,4];
let obj={
    a:10,
    arr:[],
    obj1:{
        name:"quabisuddin"
    }
}
console.log(typeof array)//object
console.log(typeof obj)//object

//but array.__proto__ is not equals to Object.prototype
//its equals to Array.prototype

console.log(array.__proto__==Array.prototype)
console.log(obj.__proto__== Object.prototype)
console.log(obj instanceof Object)
console.log(obj.a)//10
delete obj.a;//here we ahve deleted the property of an object
console.log(obj.a)//undefined\
for(let i in obj){
    console.log(i)
}