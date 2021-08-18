/*
function dosomething(done){
    console.log("doing something")
    done()
}
dosomething(()=>{
    console.log("it was done")
})
console.log("done")
//the above functions are call backs
*/
//by simply wirting call backs it wont become async
//some functions like setTime out , set interval ,set immediate
//apart from these funcbtion generral way to turn any thing async in javascript

function dosomething(done){
    console.log("1. doing something")
    setTimeout(done,0)
}
dosomething(()=>{
    console.log("2. it was done")
})
console.log("3.done")
//now check the output and observe the output
//why setTime on calling after 0milisecond wont be get executed
//it will get executed only after done was printed why
//because the answer is simple the concept of Node area
//and event loop and main stack
//unitl and unless theree is something in the main stack the event lopp chekc
//fron the node area to queue the event loop put the call backs or any async function
//but there is something in the main stack so it wont be able to put that 
//async onto the main stack for some work purpose


//by this above we can create our own callbacks