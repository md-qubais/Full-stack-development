//here document is an object and all the things are the properties
//of that document

console.log(document.body)
console.log(document.getElementsByTagName("p"))//returns an array of p tags HTMLcollection(3) here
console.log(document.getElementById("id1"))
console.log(document.getElementsByClassName("class1"))//here is also
//array HTMLcollection but we can get class if there is one just return 1
//if more than one element have the same class name it will return HTMLcollection array
console.log(document.getElementsByClassName("class1")[0])//returns the first class1 tag
console.log(document.getElementsByClassName("class1")[0].innerText)
//the inside element of that selected element
console.log(document.getElementsByClassName("class1")[0].innerHTML)
console.log(document.getElementById("nestedli").innerHTML)
//the inner html property
//here we are going to get the innerhtml of the given tag or the id or the class

console.log(document.getElementById("nestedli").outerHTML)
//the outerhtml property
//it just returns the entire html representation of the id or class or tag
//from the starting of that selected thing including the class even the tags
//and the all the attributes till the ending of that html element

//here this below one line wont get any change or eeffect in the html
//because we are just selecting all the tags it returns an array
//how can we just .innerText an array so it wont work
document.getElementsByTagName("p").innerText="some new data"

//now it will work because we are accesing the 0th element of an array
//and then we are changing its innerText
document.getElementsByTagName("p")[0].innerText="some new data"



document.getElementById("id1").innerText="some new data"
console.log(document.getElementById("id1").getAttribute("class"))//null because it contains no class
console.log(document.getElementById("id1").getAttribute("id"))//id1 because it contains id which is id1
let p1=document.getElementsByTagName("p")[0];
console.log(p1)

p1.setAttribute("class","class_qubais")
console.log(p1.getAttribute("class"))
p1.setAttribute("contenteditable",true)
p1.setAttribute("speelcheck",false)



let iptBox=document.getElementById("iptbox")
console.log(iptBox.innerText)
console.log(iptBox.innerHTML)

console.log(iptBox.value)

let btn=document.getElementById("btn")
btn.innerText="this is button"
btn.innerHTML="<b>this is button</b>" //here we are just adding html inside
//the btn id or button tag

//because below is the collection
//so it is an array so we have to dereference the array like [0]
document.getElementsByTagName("h1")[0].innerHTML="<h1>this is header1</h1><h2>this is header2</h2><h3>this is header3</h3>"


console.log(document.getElementsByTagName("h6")[0].parentElement)
let list=document.getElementById("ul")
let childs=list.children
console.log("here below are the childs of list")
console.log(childs)
console.log(childs.length)
console.log("here below removing the element")
while((childs.length > 0)){
    console.log(childs.length)
    let bool =false;
    for(let i of childs){
        console.log(i)
        if(i.innerText=="qubaisuddin"){
            list.removeChild(i);
            bool=true;
        }
    }
    if(bool==false){
        break;
    }
}


console.log(document.getElementById("ul"))