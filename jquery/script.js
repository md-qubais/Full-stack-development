//jquery allows us to select and do some DOM manipulation very easily
let o=$('#one')
console.log(o)
o.html("<h1>this is header h1 </h1>")

//below are the example for polymorphism
console.log( o.text())
//o.text("mohammed qubaisuddin") after writing this the inside of divs everthing
//will be ovrrided and replace with the simple text mohammed qubasiddubi that result
//in removing the h1 tags that we have placed above
console.log(o.html())
o.attr("height",200)
o.attr("height",null)//the attribute will be deleted
o.attr("name","qubaisuddin")
console.log(o.attr("name"))//returns qubaisuddin
o.attr("style","color:red;background-color:bisque")
console.log(o.css("color"))
o.css("color","brown")//we can also change css
o.css("font-size","20pt")//we can alos add css
//and everything we are writing using the jquery it will return that cfurrent object
//we can also see like below
o.css("font-size","30pt").attr("width",500).attr("height",500)