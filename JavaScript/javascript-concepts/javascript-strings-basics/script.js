let str="mohammed qubaisuddin"
let str1=`mohammed qubaisuddin
${10+2}
`
console.log(str)
console.log(str1)
console.log(str.indexOf("qubais",10))//means check qubais after 10 index including 10 and the ans will be -1

console.log(str.lastIndexOf("qubais"))//checking from back
console.log(str.lastIndexOf("qubais",10))//check before 10 including 10

console.log(str.slice(1,9))//it will give us sliced string from index 1 to 9-1
console.log(str)
console.log(str.substr(1,9))//it will give us substring from index 1 to 9 exactly

//in javascript it supports negative indexs in string functions that means we
//have to start doing everything from the back

str="mohammed,qubaisuddin,is,a,very,good,boy"
console.log(typeof str.split(','))//splitting all the string and its characters by ','
//and returing a type of array object to is
let array=[1,2,2,3,false,'string',null]
console.log(array)
console.log(typeof array)//so here the type of array is object
array.name="qubbais"
console.log(array)
console.log(array.name)//because its type is object so we can also use it as an object
function fun(){
    console.log("qubais");
}
fun()
//function is a kind of like an object in javascript so we can add like this in function
//to use it as an object
fun.Name="imad"
fun.age=20
fun.str="iimaduddin"
//fun.name it is default property of every functions that we uise in javascipt
//it returns the name of that particular function
console.log(fun.Name)
console.log(fun.age)
console.log(fun.str)


//below are the kind of loops in javascript
//for loops
let arr=[1,2,3,4,"qubaisuddin","abdul hameed","imaduddin"]

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
for(let i in arr){//in means iterating over its indices
    console.log(i)
}
for(let i of arr){//of means iterating over the contents of that array
    console.log(i)
}


//below are the aray function
console.log(arr.concat(['raq',"man","affan"]))//here it wont just concat
//to that array arr means it will concat to it and returns a new concated array
//and we have to store that array to manipulate
//and it wount perfrom any modification over the current array object
//means it will return a new concated array
console.log(arr)