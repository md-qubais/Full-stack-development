let iptbox=document.getElementById("iptbox")
let btn=document.getElementById("btn")
let list=document.getElementById("list")

/*
btn.onclick=()=>{
    let num=Number(iptbox.value)
    list.innerHTML=""
    let start=Date.now();
    for(let i=1;i<=num;i++){
        list.innerHTML+="<li>"+i+"</li>"
    }
    console.log("time take ", Date.now()-start)
}
//this above is just worst everything its rendering in the browser
//so O(N^2) time complexity
//like string is immutable string+="qubais"
//first it will add all the previous string and its space and then it adds qubais 
//all the operations twice
*/
/*
btn.onclick=()=>{
    let num=Number(iptbox.value)
     list.innerHTML=""
    let start=Date.now();
    let list_string="";
    for(let i=1;i<=num;i++){
        list_string+="<li>"+i+"</li>"
    }
    list.innerHTML+=list_string
    console.log("time take ", Date.now()-start)
}
//time taken here is less than previouse code
//for 12345 time is 30
*/


//now below by usisng append child 
btn.onclick=()=>{
    let num=Number(iptbox.value)
    list.innerHTML=""
    let start=Date.now();
    for(let i=1;i<=num;i++){
        let element=document.createElement("li")
        element.innerText=i;
        list.appendChild(element)
    }
    console.log("time take ", Date.now()-start)
}
//here the time taken is 23 or 22



let input=document.getElementById("input")
let input_button=document.getElementById("input_button")
input_button.onclick=()=>{
    input.value="qubaios"
    //here input.innerText is not present because its not closing tag
    //thats why
    //its single tag imean only single opening tag there only value is present
    //to manipulate its text
}