
let wait=(timeout)=>{
  return  new Promise((resolve,reject)=>{
        if(timeout>=0){
            setTimeout(resolve,timeout)
        }else{
            reject(new Error("time out should be error or greater than -1"))
        }
    })
}


setTimeout(()=>{
//do something
},1000)//after 1000 miliseconds ie 10 seconds
//means do something after 10 seconds
//that is async function

wait(1000).then(()=>{
    //do something
    console.log("this is async function and we are doing something")
}).catch((err)=>{
    console.log(err)
});