let wait=document.getElementById("wait")
let cancel=document.getElementById("cancel")

let waiting_id=undefined;
wait.onclick=()=>{
    console.log("waiting")
    waiting_id=setTimeout(()=>{
        console.log("waiting over for 3 seconds")
    },3000)
    console.log(setInterval(() => {
        console.log("useless")
    }, (2000)))
}

cancel.onclick=()=>{
    if(waiting_id!=undefined){
        clearTimeout(waiting_id)
        console.log("waiting canceled")
    }
}