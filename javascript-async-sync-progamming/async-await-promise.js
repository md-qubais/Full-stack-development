function Time(milliseconds){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,milliseconds)   
    })
}

async function createIceream(){
    try{
        await Time(0)//if it is resolved than and only the next lines will 
        //execute if not reslove the next lines wont execute
        //if not resolve and not reject not even catch and finally wont be executed
        //there should be atleast resolve or reject
        console.log("order placed")

        await Time(1111)
        console.log("production of icecream started")

        await Time(2000)
        console.log("water and ice added")
        await Time(1000)
        console.log("toppins added")

        await Time(0000)
        console.log("cone is added to icecream")

        await Time(4000)
        console.log("icecream served")
    }catch(err){
        console.log("if any await function get rejected so that catch can handle here")
    }finally{
        console.log("Finally the ice cream is served")
    }
}

createIceream()//here can also use .then and .catch and 
//we can return something from createIcecream to add param in both .then and .catch
//because it is async keyword we can let act is as promise

console.log("lets see where it will be placed")

console.log("lets see where it will be placed again")