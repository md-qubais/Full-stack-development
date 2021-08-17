function fun(){
    setTimeout(()=>{
        console.log("printing after 2 seconds")
    },2000)//after 2 seconds
    let start=Date.now()
    let start_time=Date.now()
    while(Date.now() < start_time + 5000){//current date 
        //do nothing 
    }
    console.log("after 5 seconds")
}
//here the setTime out function is async function
//means it will go to the NPM and there it will execute
//the setTimeout function and everthing related to it
//when after some time ie 2 seconds the event loop will check
//if there is anything on stack or not 
//if there is anything on the main stack then it will executre
//that everything in the main stack 
//at the time that settimeout function after two seconds it will eventually
//execute
// but it wont come to stack because there is some another thing in the main
//stack after than main stack get empty then the NPM will put everything
//that was in that NPM into the main stack using Event loop proces
//NPM or Node area



//everything is pass by value
//but here arr is passing its reference value
//so we are catching and changing its reference value
let arr=[1,2,3,4];
for(let i of arr){
    console.log(i)
}
let callMe=(arr)=>{
    arr[0]=1000;
}
callMe(arr)
for(let i of arr){
    console.log(i)
}