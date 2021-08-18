let ipt=document.getElementById("ipt")
let btn=document.getElementById("btn")
let list=document.getElementById("list")
btn.onclick=(event)=>{
    list.innerHTML=""
    let num=Number(ipt.value)
    ipt.value=""
    let c3=0
    let c5=0
    for(let i=1;i<=num;i++){
        let element=document.createElement("li")
        let print="";
        c3++;
        c5++;
        if(c3==3) {
            c3=0
            print+="fizz "
        }
        if(c5==5){
            c5=0;
            print+="buzz "
        }
        if(print === "") print=i
        element.textContent=print //here element.innerText is costly operation
        list.appendChild(element)
    }
}