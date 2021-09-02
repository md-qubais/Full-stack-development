// let name="this is the name"
// let obj={
//     name:"qubais",
//     sayhi:function(){
//         console.log(this.name)
//     }
// }
// obj.sayhi();//calling via object so this will work and check
// //object level vairable
// let func=obj.sayhi;
// func();//not calling via object so this will give nothing but undefined
// //it will check in its greater context means next scope

// // console.log("_______________-")
// // let obj1={
// //     name:"mohammed imaduddin",
// //     sayhi: ()=>{
// //         console.log(this.name);
// //     }
// // }

// class person{
//     constructor(){
//         this.name="mohammed qubaisuddin"
//     }
//     sayhi=()=>{
//         console.log(this.name);
//     }
// }
// let obj1=new person()
// obj1.sayhi();
// let func1=obj1.sayhi;
// func1()

// name="mohammed imaduddin"
// const obj={
//     name:"mohammed qubaisuddin",
//     func:function(){
//         console.log(this.name);
//     }
// }
// obj.func()
// let fun=obj.func;
// fun()
// setTimeout(obj.func,1000);
name="abdul hameed"
class object{
    constructor(){
        // this.name="mohammed qubaisuddin";
    }
     fun(){
        console.log(this.name);
    }
}
let obj=new object();
obj.fun()
let func=obj.fun
func()