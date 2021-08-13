//this below is not class defining this is just simple
//object defninig

//console.log(obj.a)//not hoisted

let obj={//this is not hoisted like function and var variables 
    a:10,
    b:20
}


//class Definition 
class Student{//this is not hoisted like function means we can create 
    //the object of these type of classes before defining or declarating the classes
    constructor(name ,age){
        this.name=name;
        this.age=age
    }
    print_details(){
        console.log(this.name," ",this.age)//but have to use this instead of sinple variable using
    }
}

let student1=new Student("qubaisuddin",21)
student1.print_details()//see here it prints the exact output
//classes are not hoisted

//class Expression
let Student_class=class{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    Details(){
        console.log(this.name," and now here ",this.age)
    }
}

let student2=new Student_class("hameed",22)
student2.Details()//see here above two lines of code we can use the class experssion