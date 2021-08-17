
//ES6 promises

/*
function download(done){
    setTimeout(()=>{
        let data="this is some data"
        done(data)
    },2000)
}

download((data)=>{
    console.log(data)  
} )
*/

/*
function DownloadPromise(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(data=="correct"){
                resolve(data)
            }else{
                reject(new Error("the data is incorrect"))
            }
        },200)
    })
}

DownloadPromise("correct").then((data)=>{
    console.log("the data is correct =>",data)
}).catch((err)=>{
  console.log("the data is not correct")
  console.log(err)  
});


//IIFE immediatly inoved functions excpression

(()=>{
    console.log("invoked immediately")
})();



((print,power,sqrt)=>{
    print("power of 2 and 2 is ",power(2,2))
    print("sqrt of 2 is ",sqrt(2))
})(console.log,Math.pow,Math.sqrt)


for(let i=0;i<10;i++){
    
    /*setTimeout(()=>{
        console.log(i);
    },5000)//execute after 2 seconds
    
}
//here what is happeing is everytime for 10 times
//the setTimeout will be in Node area for paralle execution for everything 2 seconds
//and then it will print 10 every time
//because here we are passing indirectly i pass by reference

for(let i=0;i<10;i++){
    ((j)=>{
        setTimeout(()=>{
            console.log(j);
        },200)
    })(i);
}
//here we are passing by value 
//in node areea after ever two seconds its printing the requireed value
//and we are calling it immediately

function hello(name){
    return ()=>{
        console.log("hello ",name);
    }
}
let fun=hello("qubaisuddin")
fun()
*/



function sayHello(){
    console.log("hello")
}
console.log("waiting here")
let interval=setInterval(sayHello,500)//after every 500 mili seconds it will execute
clearInterval(interval)//nothing get printined because we are clearing the interval

let interval_id;
let run_count=0;
interval_id=setInterval(function run(){
    if(run_count<5){
        run_count++;
        console.log(run_count)
    }else{
        clearInterval(interval_id)
    }
},1000)
