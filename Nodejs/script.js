function someAsyncTask(callback){
    console.log("task begin")
    setTimeout(()=>{
        console.log("task end")
        callback()
    },3000)
}
let someTaskPromise=()=>{
    return new Promise((resolve,reject)=>{
        someAsyncTask(resolve);
    })
}

someTaskPromise().then(()=>{
    console.log("after the task is complete")
})



function downloadPromise(){
    return new Promise((resolve,reject)=>{
        console.log("starting to download the file")
        setTimeout(()=>{
            console.log("download complete")
            resolve()
        },3000)
    })
}


let downloadFile=downloadPromise()

setTimeout(()=>{
    downloadFile.then(()=>{
        console.log("download complete")
    })
},5000)


function downloadPromise(url){
    return new Promise((resolve,reject)=>{
        
        if(!url.startsWith("http")){
            reject(new Error("url doesnot starts with http"))
        }else{
            setTimeout(()=>{
                let filename=url.split("/").pop();
                resolve(filename)
            },3000)
        }
    })
}

function resizePromise(filename){
    return new Promise((resolve,reject)=>{
        if(!filename.endsWith("png")){
            reject("file name does not contains png")
        }else{
            setTimeout(()=>{
                let resized=filename.split(".")[0]+"-resized.png";
                resolve(resized)
            },2000)
        }
    })
}


let downloadFile=downloadPromise("http:/wwe.png");
downloadFile
.then((filename)=>{return resizePromise(filename)})
.then((resizeFile)=>console.log("the resized file name=>",resizeFile))    
.catch((err)=>{
    console.log(err)
})

// here we are runiing all the promises parallely
// if any of those three cant able to resolve then wont work
// at a time number of promises will execute
Promise.all([downloadPromise("http:/wwe.png"),downloadPromise("http:/wrestling.png"),downloadPromise("http:/ufc.png")])
.then((values)=>{
    return Promise.all(values.map( data=>resizePromise( data) ))
})
.then((data)=>console.log(data))
.catch((err)=>{
    console.log(err);
})


function fun(){
    console.log(c);
     c=100;
    console.log(c);
    if(true){
        var c=20;
    }
    console.log(c);
}
fun()

console.log(c);
