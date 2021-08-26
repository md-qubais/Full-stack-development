let btn=document.getElementById("btn");
let principal=document.getElementById("principal")
let rate=document.getElementById("rate")
let years=document.getElementById("years")
let time=document.getElementById("time")

btn.onclick=()=>{
    if(principal.value=="" || rate.value=="" || years.value=="" || time.value==""){
        alert("Enter all the values")
    }else{
        //calculate here
        let p=Number(principal.value)
        let r=Number(rate.value)
        let y=Number(years.value)
        let time_period=time.value;
        let mt=0;
        if(time_period=="Yearly"){
            mt=y*1;
        }else if(time_period=="Half Yearly"){
            mt=y*2;
        }else if(time_period=="Quaterly"){
            mt=y*3;
        }else if(time_period=="Monthly"){
            mt=y*12
        }
        let total=(p+Math.pow(1+r/(y*100),mt))
        document.getElementById("answer").value=total
    }
}