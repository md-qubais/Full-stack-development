/*
function helloSayer(){
    console.log("world")
    return 'hello'
}
let x=() =>{
    return 10;
}
console.log(x)//function representation of x as x is function
console.log(()=>{
    helloSayer()
})//here in console what is that ...that is function so it print the funciton representation

//where does the normal function and the arrow function different
//in normal function the this keyword behaves which object via we are calling the function
//so in normal function it behaves for the object that we are calling from

//but in the arrow function the this is permanent in that function
//jaha function likha hai toh wahi ka this uske saath rahega hamesha
//lexical this
//kahi aur ka this uske this me attach nhi hosakta
*/

let btnWait=document.getElementById("btnWait")//here we are going to get button element
console.log(btnWait)//here we are priting btnWait that is button element

let btnCount=document.getElementById("btnCount")
let divStatus=document.getElementById("divStatus")
let divVal=document.getElementById("divVal")

//here we are just assing function to onlick function as variable
//while on click on that btn or that event happens
//the javascript will just exectue this function we wont execute this function
let count=0;
btnCount.onclick=()=>{
    count++;
    console.log('count ',count);
    divVal.textContent=count
}

//here we are writing in btnWati means it should wait for 5 seconds when we are clicking 
//that button
/*
btnWait.onclick=()=>{
    divStatus.textContent="WAITING"//why waiting is not showing on browser
    console.log("waiting")
    //here we have to write the logic for waiting for 5 second
    //we can also use Date.now() we can just get the current date
    //and after that we can wait for 5 seconds
    //search in mdn and epoc
    let start_time=Date.now()
    while(Date.now() < start_time + 5000){//current date 
        //do nothing 
    }
    divStatus.textContent="DONE"
    console.log("done")
}

//it meeans batching
//because after executing complete function the javascript
//sends notifiaction to browser to print the things that we have done here
//multiple textContent will leads to print the last textContent
//because after finishing that only will be printed everything will be overrided

//so by the above observation what happens is that 
//we cant click count button we can but
//after 4 clickc it suddently increasing the count by four after waiting for 5 seconds
//while wating it wont show waiting it just waits and then we it shows done
//that was the above porblem

//javascript is single threaded so that setTimeout is not executing by javascript
//thread it will execute by another thing in NodeArea
//no new thread is created

*/



btnWait.onclick=()=>{
    divStatus.textContent="WAITING"//why waiting is not showing on browser
    setTimeout(()=>{
         divStatus.textContent="DONE"
         console.log("done")
    },5000)//this setTIme out funtion takes two arguments
    //one is function and another agrument is that after 5000mili seconds
    //that setTime out function will execute the given function
}
//by this way we can achieve what we want

