let filterOptions=document.querySelectorAll(".filter-colors_container")
let modalFilters=document.querySelectorAll(".modal_filters")
let mainContainer=document.querySelector(".main-container")
let modalContainer=document.querySelector(".modal_container")
let addbtn=document.querySelector(".add")
let removebtn=document.querySelector(".remove")
let descBox=document.querySelector(".task_description")
let cColor="black";
let cColorobj=modalFilters[modalFilters.length-1];
let colors_array=["pink","blue","black","green"]
let flag=false;
let delete_state=false;
let id=1;
for(let i=0;i<filterOptions.length;i++){
    filterOptions[i].addEventListener("click",()=>{
        let arr=filterOptions[i];
        mainContainer.setAttribute("style",`background-color:${arr.classList[2]}`)
    })
}


for(let i=0;i<modalFilters.length;i++){
    modalFilters[i].addEventListener("click",()=>{
        for(let j=0;j<modalFilters.length;j++){
            modalFilters[j].classList.remove("border")//here we are removing the
            //current class border from the class list
        }
        modalFilters[i].classList.add("border")//adding the border to all the classlist array
        //of the current clicked button
        cColor=modalFilters[i].classList[1];
        cColorobj=modalFilters[i];
    })
}

addbtn.addEventListener("click",()=>{
    delete_state=false;
    if(flag==false){
        modalContainer.style.display="flex"
        flag=true;
    }else{
        modalContainer.style.display="none"
        flag=false
    }
})


removebtn.addEventListener("click",()=>{
    if(delete_state){
        delete_state=false;
    }else{
        delete_state=true;
    }
    console.log(removebtn.style.backgroundColor)
})


descBox.addEventListener("keypress",(event)=>{
    if(event.key=="Enter"){
        let task=descBox.value
        //here we have to create ticket with the given description that is task
        //and the given color that is cColor with cColorobj
        let div=document.createElement("div")
        div.addEventListener("click",()=>{
            if(delete_state){
                id--;
                div.remove();
            }
        })
        div.classList.add("box")
        let upper=document.createElement("div")
        upper.addEventListener("click",()=>{
            let num=Math.floor(Math.random()*4);
            console.log(num);
            upper.style.background=colors_array[num]
        })
        upper.classList.add("upper");
        upper.style.background=cColor
        div.appendChild(upper);
        let input=document.createElement("input");
        input.classList.add("exampleid")
        input.value="TICKET id=>"+ Math.floor(Math.random() * Date.now());
        div.append(input)
        let textarea=document.createElement("textarea");
        textarea.classList.add("description")
        textarea.value=task
        div.classList.add("box_shadow")
        div.appendChild(textarea);
        mainContainer.appendChild(div)
        cColor="black";
        if(cColorobj.classList[1]!="black") cColorobj.classList.remove("border")
        modalContainer.style.display="none"
        descBox.value=""
        modalFilters[modalFilters.length - 1].classList.add("border")
    }
})
