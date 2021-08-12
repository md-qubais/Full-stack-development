//here we have observe in javascript that we can create objects directly
//we dont need to create class and than instantiate that class to create objects
//in the javascript
//so here there is one conept of javascript object inheritance
let obj={
    a:10,
    b:20,
    c:30
}
let temp_obj=obj;
console.log(temp_obj==obj)//here it is true because we just assing that object ot another object
//and thus both are the same objects in javascript so true

//now what is below code
let obj2=Object.create(obj);//this is known as object to object inheritance
console.log(obj2)//when we go on and check in the browser console it is an empty object
console.log("comparing both")
console.log(obj2==obj)//here false because they are not same and their referance are not same
obj.d=10000;//see i have added d=1000 in obj after inherting obj2 or after creating obj2
//but below the obj2 can access the properties after inherting also
//because in javascript its dynamic if we change the proerty of obj
//than it can also affect to its subobject also the object that is inheriting obj
//that very powerfrul thing in javascript
//means all things either before or after from super object are inhertied
//to the subobject or child object in javascript before or after createing subobject or after inheriting 
//the super object

//it show nothing here 
//but when i try to acces obj2.a and something lets see whah will happen
console.log(obj2.a)//10
console.log(obj2.b)//20
console.log(obj2.c)//30
console.log(obj2.d)//10000
//but how it will print 10,20,30 it as empty
//it is because it has inherited all the properties of obj1 and it hides them
//obj2 does not have any property of it own actually it get all the properties
//inherited from obj1 so it show itself as an empty
//this is known as the prototype based inheritance in javascript

console.log(1=='1')//true  -->abstrct equeality comparisn (it checks that if it can be same if converted so they becaome same)
console.log(1==="1")//false -->strict equaltiy comparisn ==>it should be striclty same
//==  and === they both are different
//mdn equality and sameness
//in mdn there is a table you can check that able of equality and sameness
//and check and go throgh that table

console.log(0=='')//true but why
//it just converts that empty string into number will leads to zero liek this Number("")
//and zero == zero true

console.log(false=="false")//if left side string and right side boolean
//we just convert them to number and then check if they are equal like sticlty checking ===
//Number(false)=0
//Number("false")=Nan we cant define it in numerical value so NotaNumber

console.log(""==false);//true because type cast both to zero


//every space ie tab\nextline\simnple_space in javascript when converted to number is zero=>0
//\t==0
//\n==0
//' '==0
//""==0

//but \t==\n false apas me ek dusre ke barabar nhi hai yeh sab
//if both have same datatype then typcast karne ki zarurath hi nhi
//hai toh direct check hoga ki yeh same hai ya nhi that if they both are same or not

//a==b and b==c therfore a==c //this is known as abstract euqality that does not 
//hold in javascript

console.log([1,2]==[1,2])//false why becuase we are comparins objects address
//because they both are object and they are of same datatype that is object
//so both have different object 
//because its is non premitive we just compare with its referance

//if it is non primitive such as object or function
//if they are equal means they are actually the same object or function because
//their refereance are same then it must be actually the same thing/object/function


//now here comes the __proto__ keyword
//we must not use this in production level
//or developing because some browsers support this some not
//this is just use for debugging kind of thing
//anyobject.__proto__ means it gives us the super object of the current object

console.log(obj2.__proto__)//it will give repr of obj
console.log(obj2.__proto__==obj)//this will give true because they are acutally the same thing


//let obj2=Object.create(obj);//this is known as object to object inheritance
//here above code is known as the object to object inheritance
/*
obj2.a -->it will try to find in obj2
      if not found it will try to find in obj2.__proto__ means  obj2 parent object
      if not found it will try to find in obj2.__proto__.__proto__ means obj2.__proto__ parent object 
      till it becomes null
*/
//everyobject inheritance chain once become null


//just try out object inhertance chain using proto and with 3 levels of proto chain and inheritace
//with every object should have some different memebers
//and also check what happes if we change one member of obj1.a++ and check
//again than in obj1.a and obj2.a
//and also check what happens if we override one meneber of obj2.a++ and chceck
//thta means obj2.a=obj2.a+1 //means obj2.a get from obj1.a and +1 
//and a new varible is created in obj2 that is a
//again them in obj1.a and obj2.a you will observe the obj2.a can actually have a 
//and it is different from obj1.a check and observe and write
//and what changes will happen in obj3 check all
//this above all known as the prototype based inheritance
let Obj1={
    a:10,
    b:20,
}
console.log(Obj1)//object representation of Obj1
let Obj2=Object.create(Obj1);
console.log(Obj2)//object representation of Obj2
//but Obj2 is empty becuase it doesnt contain anything of itself
console.log(Obj2.a)
console.log(Obj2.b)//but it will get all the meneber of Obj1
Obj2.a++
//now Obj2.a++ means Obj2.a=Obj2.a+1;
//a new memeber will get allocated in Obj2 that is a and that current
//a value will be the a from Obj1 + 1
console.log(Obj2.a)
console.log(Obj2)//now here in Obj2 representation of Obj2 we will get addititional 
//varible a
let Obj3=Object.create(Obj2)
console.log(Obj3.b)//we will get b from Obj1 because b is also not present in Obj3 and Obj2
//means its present in Obj2 but not physically actually it is present only in Obj1
//it will check in Obj3 if not than Obj2 if not it will check in Obj1
console.log(Obj3.a)//here we will get a from Obj2 not from Obj1
//because the a that is present in the Obj2 shadowed the a present in Obj1
//means if the class doesnt contain any varible it will check in its super class
//and if not again in super class of its super class __proto__ and it goes on
//till it becomes null

//in object prototyping or inheritance chain the subobject is not acquiring any properties
//or memeber of the parent or super object it just check in the parent/super object
//to get the property that is not present inside the current object usisng __proto__

