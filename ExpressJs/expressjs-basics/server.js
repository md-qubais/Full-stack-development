const express=require("express")

console.log(typeof express)//its a function
const app=express()//we just get an instance of server const app=express() or const server=express()
//server is also application

//basically starts the server on some port
//network ports like usb we can get some input gives ouput
//means response and request
//dont pick up port from 0 to 1024 because they are reserved
//pick greater than this
//first argumnet is port number and the second argumnet is call back function


//below function is known as middlewarae
app.get('/',(req,resp)=>{
    resp.send("<h1>this is response</h1>")
})

app.listen(4444,()=>{
    console.log("server started at the http://localhost:4444")
})
