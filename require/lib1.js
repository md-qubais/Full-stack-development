function sayHello(name){
    console.log("hello ",name)
}
console.log(module.exports)//empty object
module.exports={
    sayHello,
}
console.log(module.exports)//object with sayhello function

setTimeout(() => {
    module.exports.org="wow"
}, 1000);