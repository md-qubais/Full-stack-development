const express=require('express')
const app=express();
let port=8080

app.get("/",(req,res)=>{
    // console.log("home page")
    res.send("<h1>Home page</h1>")
})
let user={}

app.get("/user",(req,res)=>{
    res.json(user)
})

app.listen(port,()=>{
    console.log("http://localhost:"+port)
})