//lets make a ice cream using callbacks 
let stocks={
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolates","peanuts"]
}


let order=(fruit_num,call_production)=>{
    setTimeout(()=>{
        console.log(stocks.fruits[fruit_num]," was selected")
        call_production();
        setTimeout(()=>{
            console.log("the fruit has been chopped")
            setTimeout(()=>{
                console.log(stocks.liquid[0]," and ",stocks.liquid[1]," was added")
                setTimeout(()=>{
                    console.log("machine has been started")
                    setTimeout(()=>{
                        console.log("the icecream was placed on",stocks.holder[0])
                        setTimeout(()=>{
                            console.log(stocks.toppings[1],"was added on icream as toppings")
                        },1000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },2000)//2 seconds
}

//the above is called callback hell
//call backs has relationships

//call backs are very confusing so we have promises
//promises takes some cycle


let production=()=>{
    setTimeout(()=>{
        console.log("production has started")
    },0000)
}

order(0,production)