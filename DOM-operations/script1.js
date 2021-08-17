let btnPrint=document.getElementById("btnPrint")
let iptNum=document.getElementById("iptNum")
let ulNumList=document.getElementById("ulNumList")
btnPrint.onclick=()=>{
    let num=iptNum.value
    console.log(num)
    let start=Date.now()

    console.log("time take: ",Date.now()-start)
}