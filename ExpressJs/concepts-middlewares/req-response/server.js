const express=require("express")
const app=express()

app.use("/",express.static(__dirname+"/public"))
app.get("/hello",(req,res)=>{
    let user="Guest"
    if(req.query.user){
        user=req.query.user
    }
    res.send("<h1>hello and welcome",user,"</h1>")
})

app.listen(3333,()=>{
    console.log("server started on http://localhost:3333")
})