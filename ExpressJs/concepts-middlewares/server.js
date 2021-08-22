const express=require("express")
const app=express()

/*
app.get("/",(req,res,next)=>{
    next()
},(req,res,next)=>{
    next()
    res.send("<h1>this is header h1</h1>")
    console.log("after sending response")
},(req,res)=>{
    console.log("this is next and here we are processing even after ther requset has been sesnt")
    //res.send("<h1>second header</h1>")
})
//you can  write first next() and then send response it will seond response
//after processing all the function like just normal function
//or you can call next() after sending response
//but make sure that you must and should have only one response for a single request
*/

//if we are just writing /xyz in url instead of /xyz/a.html or /xyz/b.html
//then it will execute index.html file if there exists or else it will throw
//eroor cannot get
//index.html is the default page that will open in the browser
app.use("/xyz",express.static(__dirname+"/public"))//public folder dirName current folder
//we are mounting public folder to /xyz root


app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})




app.listen(3333,()=>{
    console.log("server started on http://localhost:3333")
})