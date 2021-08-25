//here to overcome the callbacks that are very confusing
//and as it leads to callback hell
//so we are using promises
//and here in promisses
//the pending promise has to way
//either the promise can resolve or either it can be reject
//means the pending request can be resolved or reject
//if resolve then what to do
//if reject then catch and what to do
//then then then is promise chaining
//catch is error handling part


//here we are making sync calls by using async programming paradigm
let stocks={
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolates","peanuts"]
}
let is_shop_open=true

let order=(time,work)=>{
   return new Promise((resolve,reject)=>{
       if(is_shop_open){
           setTimeout(()=>{
               resolve(work());
           },time)
       }else{
           reject(console.log("shop is closed"))
       }
    })
}

order(2000,()=>console.log("strawberry was selected"))
.then(()=>{
    return order(1000,()=>console.log("order was placed"))
})
.then(()=>{
    return order(2000,()=>console.log("the fruit has been chopped"))
})
.then(()=>{
    return order(1000,()=>console.log("water and ice has been added"))
})
.then(()=>{
    console.log("here i am invoking reject")
    is_shop_open=false
    return order(1000,()=>console.log("machine has been started"))
})
.then(()=>{
    return order(1000,()=>console.log("icecream was placed on cone"))
})
.then(()=>{
    return order(2000,()=>console.log("chocolate was added as toppings"))
})

.catch((err)=>{
    console.log("customer left because of your incovenince")
})
.finally(()=>{
    console.log("this will work at last irresepective of then and catch")
    console.log("day is ended shop is closed")
})