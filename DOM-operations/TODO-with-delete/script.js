let ipt=document.getElementById("ipt")
let btn=document.getElementById("btn")
let list=document.getElementById("list")
btn.onclick=()=>{
    let task=ipt.value
    let element=document.createElement("li")
    let Taskspan=document.createElement("span");
    Taskspan.innerText=task;
    let up_btn=document.createElement("button")
    up_btn.innerHTML="<span>&\#\8593;</span>"
    up_btn.onclick=(event)=>{
        //logic here
        //event.target is button
        let curr=event.target.parentElement//that is current list
        let parent //that is todo list
        event.target.parentElement.parentElement.insertBefore(event.target.parentElement.nextElementSibling,event.target.parentElement)
    }
    let element_btn=document.createElement("button")
    element_btn.innerText="X"
    element.appendChild(element_btn)
    element_btn.onclick=(event)=>{
        //console.log(event)//it will give me the point event means we have
        //click this button and all the associated things are given here
       // console.log(event)//the event object gives us the exact detail
        //of the event what is the btn everything 
        //and even.target gives that the current element
        //and even.target.parentElement gives us the list to be deleted
        event.target.parentElement.remove()
    }
    element.appendChild(element_btn)
    element.appendChild(up_btn)
    element.appendChild(Taskspan)
    list.appendChild(element)
    ipt.value=""
}