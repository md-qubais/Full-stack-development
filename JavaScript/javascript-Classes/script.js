let age=15;
class Person{
    //here if we are using the class we must use constructor
    //here in javascript the constructor are used to initiliaze
    //and define and declare the variable of that class level
    //we dont have to use let in constructor to create variable
    //we just have to use this to define and declare and initialize the variables
    constructor(name,age){
        this.name=name
        this.age=age
    }
    isAdult(){
        //if we just return age>=18 it then the 
        //javascript may assume there is no age in the current class
        //than it will search it its next global context and 
        //if not present if will give undefined
        //because the objects and classes are bind in runtime in javascript
        
        //in below here if we remove the this keyword from age
        //then the age will get value from the next global context for this function
        //that is the top most of the window global contetxt
        //thata is 15 and always return false so we must use thus
        //to keep track of the age of that age we are calling via that object
        return this.age>=18//jab jiske throguht point hoga uske hisab se 
        //call karega ishe
    }
}
let p=new Person("qubais",21)
let q=new Person("hameed",22);
console.log(p)//object representation of Person
console.log(typeof p)//object
console.log(p.__proto__)
console.log(p.__proto__ == Person.prototype)//true
console.log(p.__proto__ == Object.prototype)//false because p.__proto__ is == Person.Prototype
//because the object p is create but inherited all the properties from Person
console.log(p.__proto__ .__proto__==Object.prototype )//true 
//p.__proto__ is inherited from Perons that is function
//and function like Person is directly inhertied from Object.prototype
//p.__proto__.__proto__ is actually equals to Object.prototype because Person is class or function

console.log(p.__proto__.__proto__.__proto__)//null

console.log(typeof Person)//here it is function
//in javascript there is no seperate topics like classes
//class in javascript is also a simple function
console.log(Function.prototype.__proto__ == Object.prototype)//because functions
//are directly inherited from Object.prototype

console.log(p.name," is he adult ",p.isAdult())
console.log(q.name," is he adult?",q.isAdult())

console.log(p.isAdult == q.isAdult)//true becauwse they are actually both are the same
//function or both has them have the same reference
//becuse p is also inherited from the Person and q is also inherited from the Person
//and they both are same because they both are inherited from the same Persom/class/function
//so the both functions are same because it is belong to only Person class/function

//now what happens if i change function like this
p.isAdult=function(){ console.log("always returns false") 
 return false};//so change occur
//now if we are calling via p the function isAdult we are calling from
//p means that current object p overrided or shadow its .__proto__ function is Adult
//and now it is only avialble for the further use and further inheritance
console.log(p.name," is he adult ",p.isAdult())
console.log(q.name," is he adult?",q.isAdult())


//so if changes happens like this below
//without changing in the actual Person.prototype means 
//that q is object and now there is a new variable (function as a varible) created in that object
//and now always that is going to happen no matter what function the class contain
q.isAdult=function(){
    console.log("always returns true")
    return true;
}//changes happens when we are directly changing from object
//not from Person.prototype

console.log(p.name," is he adult ",p.isAdult())
console.log(q.name," is he adult?",q.isAdult())
//so can we check if the changes happens while we are using the 
//string object or string or number or anything lets us check
let str="this is string"
str.charAt=function(){
    return true;
}//no changes happens
//because we have to change in the actual prototype where the str is inherited from
//that is str.__proto__ == String.prototype because javasript has some
//restrictions that we cant change directly the properties of inbuilt objects
//of prototypes by just using objects
String.prototype.charAt=function(){
    return true;
}//now changes occur becuase we are actually changing in the Acutal prototype
str.__proto__.charAt=function(){
    return false;
}//we can also do the change and can apply changes in this way also
console.log(str.charAt(0))//now changes happens

//and even there is no access modifier because everything is public in javascript
//no class to class inheritance is existed in javascript

//here below inheritance using classes in javascript
//we can use inheritance using extends keyword in javascript
class Student extends Person{
    constructor(name,age,grade){
        super(name,age);//we must first call super method no matter what
        //if not super than the error will be must call super
        //that means the super will initialize the Person constructor
        this.grade=grade
    }
}
let s1=new Student("qubaisuddin",21,'a')
let s2=new Student("abdul hameed",22,'a');
console.log(s1.__proto__ == Student.prototype)//true
console.log(s1.__proto__.__proto__== Person.prototype)//true
//these both above are true becuase the prototype inheritance chaining
let p3=new Person("mohammed",25);
console.log(s1.isAdult == p3.isAdult)//this means
//in java when we create the object in java then the new object is created
//of that class and all the method are of that particular class

//but in javascript when we create object than it wont create any new object
//it will create a new object but it will inherit from the parent object
//parent object is the global object for all its child objects unlike java or c++

//console.log(Person())//error class constuctors cannot be invoke without new
console.log(new Person())//we  musts invoke the class constructor with new keyword
//but when we are using the fucntions as a class representative then
//we can use the Person() to call simply the function
//or we can also use Person() to invoke the Person construcotr means dummy
//constructor and then it can act as class Before ECMAscript2015


//NOTE:
//the inheritance level in javascript is prototype to prototype (__proto__ to __proto__)
//level inheritance means the function or the varible in the super object will
//be same for all the child objects

//the inheritance level in javascript is not class to class inheritance
//means the class object function in obj1 will be completely different from obj2
//in javascript it will be same obj1 and obj2 function are same if inhertied from same object
//or same class/generallyy function