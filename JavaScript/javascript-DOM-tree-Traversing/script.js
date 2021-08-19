//we should consider the document as tree
//starting the root as html
//and it contains two childs such as head and body
//and head contains childs and body contains childs soo on

let two=document.querySelector("#two")
console.log(two)
console.log(two.parentElement)//ul
console.log(two.parentElement.parentElement)//ul
console.log(two.parentElement.parentElement.parentElement)//body
console.log(two.parentElement.parentElement.parentElement.parentElement)//html
console.log(two.parentElement.parentElement.parentElement.parentElement.parentElement)//null nothing

console.log(two.nextSibling)//means the text that is next to it its also a sibling
console.log(two.nextElementSibling)//the next element to this i mean just the sibling
//but only element no text nothing 
console.log(two.previousSibling)
console.log(two.previousElementSibling)