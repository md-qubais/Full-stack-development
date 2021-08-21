const express=require("express")
const app=express()

app.use(express.urlencoded({extended:true}))//this is known as the middleware
//it runs before all those below functions are going to executre
//it parse the body of request if its in url encoded format


app.get('/',(req,res)=>{
    res.send("<h1>this is just a response for your request</h1>")
})


app.get('/greet',(req,res)=>{
    let person="Guest"
    //console.log(req.headers)
    //console.log(req)
    //console.log(req.url)
    //console.log(req.query)//here it prints empy object is there is no query requested
    if(req.query.person){
        person=req.query.person
    }
    res.send(`<h1>good morning:${person}</h1>`)
})

/*
everything that sends in the get request form
all the things will be visisble on the url of the browser
and it is in the query format and can be accessed using req.query

but by requesting from post method we are going to get everything
in the body and all the things wont be visitble to the browser
we cant just directly aceess like this req.body
there is special way to access these kind of things
*/

app.post("/greet",(req,res)=>{
    let person="Guest"
    console.log(req.query)//nothing
    console.log(req.body)//undefined
    //now the above line wont give undefined because
    ///we have used the urlencoded use method
    /*
    if(req.query.person){
        person=req.query.person
    }*/
    if(req.body.person){
        person=req.body.person
    }
    res.send(`<h1>good morning:${person}</h1>`)
})

/*
app.get("/form",(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Expressjs</title>
    </head>
    <body>
        <form action="">
            <input type="text">
            <input type="text">
            <button type="submit">SUBMIT</button>
        </form>
    </body>
    </html>`)
})
*///actually we can alos write in this way but its not a good programming
//practice

//we must write the html css and javascript and expressjs and reactjs nodejs
//everything in sepearte files


app.get('/form',(req,res)=>{
    res.sendFile(__dirname+"/form.html")
})//here we are sending file response that wuill renedered in the browser



//now we can write in url like this
//hyderabad/welcome or banglore/welcoome anything we can write here
//:city is variable and it can vary in nature
//anything in the place of city will work
app.get('/:city/:street/welcome',(req,res)=>{
    res.send(`welcome to ${req.params.city} and ${req.params.street}`)
})

app.listen(4444,()=>{
    console.log("server is started and the port number is : http://localhost:4444 ")
})



