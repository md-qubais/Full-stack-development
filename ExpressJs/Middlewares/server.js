const express=require("express")
const app=express()

function m1(req,res,next){
    console.log("middleware1")
    next()
}

//now observe these both middleware
//it will work similar as recursion means
//wirting after basecasae and before base case
//exactly the same because it uses middleware stack

function m2(req,res,next){
    console.log("middleware2")
    res.send("<h1>Hello world : the last middleware</h1>")//the work doing
    //after the response is generated or sent is knonwn as the side effect
    console.log("after response:middleware2")
    next()

}
function m3(req,res,next){
    console.log("middleware3 after response")
    next()
}



function m4(req,res,next){
    console.log("middleware4")
    next()
}

function m5(req,res,next){
    console.log("middleware5")
    next()
}
//any middleware should contain next() or request() if this wont get
//any things than the function will hang


app.get("/",m2,m3,(req,res)=>{
    console.log("this is the last middleware after response")
})

app.listen(3333,()=>{
    console.log("server started on http://localhost:3333")
})