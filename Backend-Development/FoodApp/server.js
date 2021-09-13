const express=require('express')
const app=express();
let port=8080

app.listen(port,()=>{
    console.log("http://localhost:"+port)
})

app.use(express.json())


app.get("/",(req,res)=>{
    // console.log("home page")
    res.send("<h1>Home page</h1>")
})
let user={}

app.get("/user",(req,res)=>{
    res.json(user)
})



//post request
//clients is sending data to server

//get request
//clients is asking data from server


app.post("/user",(req,res)=>{
    user=req.body;
    console.log(req.body)
    res.send(`data has been updated`)
})


app.patch("/user",(req,res)=>{
    let obj=req.body;
    for(let key in obj){
        user[key]=obj[key];
    }
    res.send("<h1>Patched and updated the object</h1>")
})

app.delete("/user",(req,res)=>{
    user={};
    res.send("<h1>Deleted the user successfully</h1>")
})
