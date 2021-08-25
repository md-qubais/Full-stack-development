//the async and await is the better way to write promises
//we use async keyword on to the function
//and inside we uses try catch finally
//by using await keyword

function abc(work){
    console.log(work)
}
async function order(){
    try{
         await abc("first")
         await abc("second")
    }
    catch(error){
        console.log("abc doesnt exists ",error)
    }
    finally{
        console.log("it will execute anyways")
    }
    return "mohammed qubaisuddin"
}
order().then((data)=>{
    console.log("data returned from order async function")
    console.log(data)
    console.log("any ways executing the then")
}).then(()=>{
    console.log("because its an async keyword and that async act like promises and what happens iss that it is not rejecting neither resolve but not giving any error so it will execute")
})
.catch(()=>{
    console.log("if wer are returning any data fomr async function")
    console.log("wer must also uses catch function incase the data is")
    console.log("the data is curropeted or error or wrong")
})

//so the conclusion is that the async is also just like promise
//than by calling it can also reject or reslove internally
//and also we can use the then and catch to the async functiton also
//its a improved way of calling async keyword

console.log("executing first")
console.log("executing second")
console.log("executing third")