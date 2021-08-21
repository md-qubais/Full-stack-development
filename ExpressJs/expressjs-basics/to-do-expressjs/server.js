const express=require("express")
const app=express()

app.use(express.urlencoded({extended:true}))


//open this todo list in any browser
//it will be on the same state in all the browsers or all the tabs
//it wont get changed
//because the code runs on the backend not in the frontend
//disable the javascript on the frontend even then also the code
//will run because the code is present in the backend
let taskList=["sample task"]
app.get("/",(req,res)=>{
    let tasks=taskList.map((task)=>{
        return `<li>${task}</li>`
    }).join('\n')
    console.log(tasks)
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TODO expressjs</title>
    </head>
    <body>
        <form action="./Task" method="POST">
            <input name="newTask" type="text">
            <button type="submit">SUBMIT</button>
            <ul>
           ${tasks}     
            </ul>
        </form>
    </body>
    </html>
    `)
})

app.post("/Task",(req,res)=>{
    taskList.push(req.body.newTask);
    res.redirect("/")
})

app.listen(4444,()=>{
    console.log("running on http://localhost:4444")
})