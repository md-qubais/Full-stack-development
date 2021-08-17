let obj1={
    a:10,
    obj2:{
        b:20,
        arr:[1,2,3,4],
        obj3:{
            c:30,
            name:"mohammed qubaisuddin",
            obj4:{
                d:40,
                name2:"mohammed abdul hameed",
                obj5:{
                    e:50,
                    obj6:{
                        f:60,
                        fun:function(){
                            console.log("this is function");
                            return 20;
                        }
                    }
                }
            }
        }
    }
}




//here below is the function used to flatten the object here
function flatten_it(obj){
    for(let i in obj){
        if(obj[i] instanceof Object){
            flatten_it(obj[i]);
        }
    }
    for(let i in obj){
        if(obj[i] instanceof Object){
            let key_arr=Object.keys(obj[i]);
            for(let j=0;j<key_arr.length;j++){
                obj[key_arr[j]]=obj[i][key_arr[j]];
            }
            delete obj[i]
        }
    }
}



flatten_it(obj1)
console.log(obj1)


let arr=[1,2,3];
console.log(arr)
arr.a="mohammed qubaisuddin"
console.log(arr)
arr['b']="mohammed qubaisuddin"
console.log(arr)

let num=20;
console.log(num)
num.a=10
console.log(num)
console.log(num.a)//undefined

let str="qubais"
str.a=20
console.log(str.a)//undefinned



function Student(name,age){
    this.name=name;
    this.age=age
    this.details= function(){
        console.log(this.name," ",this.age)
    }
     this.fun=function(){
        console.log(this.name," ",this.age)
    }
}


let s=new Student("qiubais","name")
s.details()
s.fun()
//console.log(name)
//console.log(age)
/*
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
        this.Details=function(){
            console.log(this.age)
            console.log(this.name)
        }
    }
}
let person=new Person("qubais",21)
person.Details()




function fun1(name){
    function fun2(age){
        console.log(name," ",age);
        return 10;
    }
    return fun2
}
let f=fun1("hammu")(21)
console.log(f)
*/





