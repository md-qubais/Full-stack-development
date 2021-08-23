let input_ele=document.querySelector(".input_box")
let tasks=document.querySelector(".task-list")
console.log(input_ele)
input_ele.addEventListener("keypress",(event)=>{
    if(event.key=="Enter"){
        let task=document.createElement("li")
        task.addEventListener("dblclick",(/*event*/)=>{
            //event.target.remove()
            task.remove()
        })
        task.setAttribute("class","task")
        //task.innerText=input_ele.value
        task.textContent=input_ele.value
        tasks.appendChild(task)
        input_ele.value=""
    }
})