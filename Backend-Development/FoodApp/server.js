const express=require('express')
const app=express();
let port=8080

app.listen(port,()=>{
    console.log("http://localhost:"+port)
})



app.use(express.json())//send everything in the form of json
//means frontend se joh bhi data araha hai usse json me update karo
app.use(express.static("public"))

app.get("/",(req,res)=>{
    // console.log("home page")
    res.send("<h1>Home page</h1>")
})
let user=[]

// app.get("/user",(req,res)=>{
//     res.json(user)
// })

let GetUser=(req,res)=>{
    res.json(user)
}

//post request
//clients is sending data to server

//get request
//clients is asking data from server


// app.post("/user",(req,res)=>{
//     user=req.body;
//     console.log(req.body)
//     res.send(`data has been updated`)
// })

let AddUser=(req,res)=>{
    user.push(req.body);
    console.log(req.body)
    res.send(`data has been updated`)
}


// app.patch("/user",(req,res)=>{
//     let obj=req.body;
//     for(let key in obj){
//         user[key]=obj[key];
//     }
//     res.send("<h1>Patched and updated the object</h1>")
// })

let UpdateUser=(req,res)=>{
    let obj=req.body;
    user.push(obj);
    res.send("<h1>Patched and updated the object</h1>")
}


// app.delete("/user",(req,res)=>{
//     user={};
//     res.send("<h1>Deleted the user successfully</h1>")
// })


let DeleteUser=(req,res)=>{
    user=[];
    res.send("<h1>Deleted the user successfully</h1>")
}

// app.get("/user/:id",(req,res)=>{
//     console.log(req.params)
//     console.log(req.params.id)
//     res.send(req.params)//returns an object so we can access .id from it
// })

let getUserId=(req,res)=>{
    console.log(req.params)
    console.log(req.params.id)
    res.send(req.params)//returns an object so we can access .id from it
}



//mounting the routes in express
//we are just merging and combining the routes

//first it will check for the user
//means for the user routes below two things will happen
//either /user with just / means /user/
//or /user with some id ie=> /user/1234
//if first than the userRouter with either of get post patch of delete
//will execute
//if second than the get with inside the getuserid callback will execute
const userRouter=express.Router();
app.use("/user",userRouter)

userRouter
.route("/")
.get(GetUser)
.post(AddUser)
.patch(UpdateUser)
.delete(DeleteUser);

userRouter.route("/:id")
.get(getUserId);


let signup=(req,res)=>{
    let {name,email,password}=req.body;
    user.push({name,email,password});
    console.log({name,email,password});
    console.log("user signed up")
    console.log(req.body)
    res.json({
        message:"user signed up",
        user:req.body
    });
}

const AuthRouter=express.Router();
app.use("/auth",AuthRouter);

AuthRouter
.route("/signup")
.post(signup);
