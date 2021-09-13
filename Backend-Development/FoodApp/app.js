const express=require("express")
const app=express();//instantiate expressjs
let port=8080
app.listen(port,function(){
    console.log("server is listening on port :",port)
    console.log(`http://localhost:${port}`)
})

app.get("/",(req,res)=>{
    console.log("hello from page")
    // res.send(`<h1>sending this useless</h1>`)
    res.send(`<h1>hello hi from backend </h1>`)
})

// app.get("/home",function(req,res){
//     console.log(req.hostname)
//     console.log(req.path)
//     console.log(req.method);
//     res.send("<h1>hello world</h1>")
// })
let obj={
    "name":"mohammed qubaisuddin",
    "Designation":"software engineer"
}

app.get("/user",(req,res)=>{
    // res.send(obj);
    res.json(obj) //here we are just sending the json object as response
    //and it can identify as json file
})

app.get("/home",(req,res)=>{
    res.sendFile("./views/index.html",{root:__dirname})
})