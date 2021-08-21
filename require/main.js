const lib1=require("./lib1")
console.log("hello world")
if(typeof window =="undefined"){//just window is undefined in node
    //so we must write typeof window
    console.log("running in browser")
}else{
    console.log("running in node")
}
console.log(globalThis)//both in browser and nodejs
//console.log(global==globalThis)//true in nodejs


//the belos sayHello("qubais") only works in browser
//sayHello("qubais")//not need to import export in html javascript to use the files
//because in html if both are attached then we can use the function of all the files
//anywhere within in anywhere in all js files becuase of the files are attached in html
//the all js files will become and all the function will be of window level ie global 
//level of the browser
//no need to export or import if we are using the function of another file in another file
//of javascript untill and unless all the files must be attached to html or link
//in case of nodejs if we wanted to use one function of one file inside another
//file we must export and import or require
console.log(lib1)
console.log(typeof lib1)
lib1.sayHello("mohammed qubaisuddin")

setTimeout(() => {
    console.log(lib1)
}, 2000);
//observe the both settimeout from lib1 and mainjs and observe and than figure out the answer

//here below is the answer for that 
/*
when the const lib1=require("./lib1")
encounters the lib1 javascript files starts gets executed
and its starts exeuctiing the function and require module export
and create reuqire module and thane there all are stack from first line of main.js
till here then it encunters the setTimeout function of lib1 whihc
adds some wow to org and then all the lib1 file will gets out from stack
but the thing is main.js is on stack (Main stack) and after that
line line by its executes main.js that is on main stack till that setTimeout
wont get executed by eventloop on main stack its get executed there after 1 sec
but wont be present in main stack after wards the main.js just prints module.export
with some sayhello function because nothing is added till now at runtime
because sestTImeout whihc adds is on nodearea
and after that in main.js there is setTImeout which agains prints the object
after 2 sec whihc places in node area belwo the lib1.setTimeout function
and then boom main stack get emopty after that setTImout from lib1 get loaded
and then after than module.export.org="wow" will added
after than boom main stacks get empty and then again setTimout of main.js
gets printed and then when its printing the module.exports i mean lib1
a new varibale gets added in it that will the desired output after obseration


*/
//require how many time you need in javascript file but it will loads and refers to that 
//file required file only once