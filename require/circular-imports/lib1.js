const lib2=require("./lib2")
module.exports={
    a:10,lib2
}
//so here the lib1 and lib2 are in the main stack for resolving
//the require if the require didnt resolved and agina we are calling them to require
//than it will return the empty object