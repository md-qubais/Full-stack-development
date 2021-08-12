function Person(Name,Age){
    this.Name=Name
    this.Age=Age
    console.log(Name," ",Age); //this varibles will give error if we are using it via simple function call
}
let p1=new Person("mohammed qubaisuddin",21);//here we are invoking the function as class
console.log(p1.name)
console.log(p1.age)

console.log(Person())//just a simple function call
//undefined
console.log(new Person())//person object
console.log(p1.__proto__ == Person.prototype)//true inherites from function Person as class
console.log(p1.__proto__.__proto__ ==Object.prototype)//true fucntion
//if functions acts as classes than null is present in 3 levels of that object
//if functions acts as function then null is present in 3 levels of that function
console.log(Person.__proto__ ==  Function.prototype)//Function.prototype
console.log(Person.__proto__ .__proto__ == Object.prototype)//true
console.log(Person.__proto__ .__proto__.__proto__ == null)//true

//this is old now we have class to implement all those kind of things
Person("qubaisuddin",21)//just a function call and the variables this 
//it will print qubaisuddin 21 if we are printing the arguments or parameters
//of that function
//if its function call if we use this.variable_name like defined variables
//then it will show eroors that the varible is not defined


//Now the main question arises that if we can just inherits 
//in the functions as class

let Person2=Object.create(Person.prototype)
console.log(Person2)//object representation of that object Person2
console.log(Person2.__proto__==Person.prototype)//true inheritance exists by this way
//by the way we can inherits object and we can inherits functions as the say
//way that we can inherits objects ie Object.create(Person.prototype) yes we can
//but it can be known as the object inheritance not the actual function inheritance


