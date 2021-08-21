const lib1=require("./lib1")//here it will execute the lib1 file only once
const lib2=require("./lib2")


console.log(lib1)
console.log(lib2)

console.log(lib1.lib2)
console.log(lib2.lib1)

//so here the lib1 and lib2 are in the main stack for resolving
//the require if the require didnt resolved and agina we are calling them to require
//than it will return the empty object