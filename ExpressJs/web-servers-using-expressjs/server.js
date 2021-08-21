const express=require("express")
const app=express()

//this is default=>"/" if not it will show cant GET /

//get request contains only url no body
//all the request which jaane waala information
//the information which are sending to browser
//dont have any body or any meomory
//just url it only says where to go

//post like go will carry some memeory or area to or some body
//to take some information
//the data which goes will use post kind of methods
//like file uploading and some data stuff which we want to send data into server
//patch put post types whihc can contains the data which goes from user to browser
app.get("/",(req,res)=>{//here below instead of middleware we just used the inline functions
    res.send("<h1>hello world</h1>")
})
/*
GEt post and many more are http methods
go to mdn http methods
*/


//max size 65536 port number
app.listen(3333,()=>{
    console.log("server started on http://localhost:3333")//single server will work on single work
})//network based interface using network users commmunicate with each other


//the function which are triggered after request and gives some response
//via some of the htttp mehtods or some anohter function
//is known as the handler functions or the middleware functions
//middlewaraes can do multiple works sequentially

//even if you are in nested middlewarae in whatever level are you\
//if that nested middleware sends response it will means the response 
//will get directly to the user
//like stack but only if the res is directly sent to user
//if no respinse in any level of middleware ie if only first middlewre
//if there is no respionse then it will hanag
function middleware1(req,res,next){
    console.log(req.url)
    next();//give a call to the next middleware
    //if you are not calling next if there is middlewarae present
    //and you are not giving any response
    //than the server will hang
}

function middlewarae2(req,res,next){
    console.log(req.host)
    res.send("<h1>the respnose has been sent</h1>")//if here no res then
    //the server will hang because no next middleware and not any response
    //has been generated
    //next();//and if we are using this next() if there is no middleware present
    //than theere will be error cannt get the respective url
}
//here for above two middleware you should only either next() or send respoonse
//both will leads to an error saying that you have generated response
//and again you are gnenerting the response
//only one request will get only single respionse


//this below means if there is request of get type which comes to url whihc is 
//  /x in that case call the middleware function wiht req resp and next 
//app.get("/x",middleware1)//we can use middleware functions like this
app.get("/x",middleware1,middlewarae2)//here this is knonw as the middlewares stack
//in this sequence we are calling the middlewares ie handling functions

//generally only get will get triggerred as a user 
//by default the get request or the get method will get execute

//gnerally from tbhe browser url we can just invoke get method
//only because we are just getting the particular url
//thats the reason
//if we wanted to inovke any anohter methods such than get than
//we have to use post methods in the form of action and method=POST