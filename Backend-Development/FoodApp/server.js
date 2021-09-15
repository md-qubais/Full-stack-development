const express=require('express')
const app=express();
let port=8080

app.listen(port,()=>{
    console.log("http://localhost:"+port)
})

//first execution from top to bottom
//first it will execute becaus not routes
//it matches to no rotues and executes
//and then i am middleware executed 
//and then next() calling to the next middleware function
//and then it just goes to the next middleware
app.use((req,res,next)=>{
    // console.log("i am middleware");
    next();//chalo mera kaam hogaya ab next wala middleware function aajao
    //aur apna kaam karo
})



app.use(express.json())//send everything in the form of json
//means frontend se joh bhi data araha hai usse json me update karo
app.use(express.static("public"))

app.use((req,res,next)=>{
    // console.log("i am middleware 2")
    next();
})


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


//redirects
app.get("/user-all",(req,res)=>{
    console.log("redirection")
    res.redirect("/user")
})





let UIforgetpassword=(req,res)=>{
    res.sendFile("/public/forgetpassword.html",{root:__dirname})
}
let printemailandpassword=(req,res)=>{
    let {name,email,password}=req.body;
    console.log({name,email,password});
    res.json({
        message:"details printed",
        user:{name,email,password},
    })
}

const ForgetPassword=express.Router();
app.use("/forgetpassword",ForgetPassword)
ForgetPassword
.route("/")
.get(UIforgetpassword)
.post(printemailandpassword)





//if no route or route path matches then this middleware will gets executed
app.use((req,res)=>{
    res.sendFile("public/404.html",{root:__dirname})
})//see what happens if we put this first
//it will execute always if its first
//because javascript nodejs is executed from top to bottom
//first this get execute and response sent 
//and then response is sent then there is no more responses will evaluated
//so here middlewares with no path will gets executed anyways
//so we have to use status protocols like 404 at last of the page

// //redirects
// app.get("/user-all",(req,res)=>{
//     console.log("redirection")
//     res.redirect("/user")
// })
//it wont work because we are writing this after 404 error app.use
//because from top to bottom nothing found then that thing will execute
