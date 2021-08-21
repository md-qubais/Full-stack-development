let item=$("#item")
$("#prepend").click(()=>{
    let text=item.val()//not text val because its single tag elements
    //these functions are polymorphism they are setters and as well as getters
    //no/single param means they are getters and some param means they are setters
    console.log(text)
    //$("#list").prepend($(`<li>${text}</li>`))//by using like this
    //$(`<li>${text}</li>`) we are creating li item
    //the jqery understands that the li is created and its to be returnred

    //$("#list").prepend($("<li>").html(`<b>${text}</b>`))//simpley S("li") creates li item
    $("#list").prepend($(`<li><b>${text}</b></li>`))
    item.val("")
})

$("#append").click(()=>{
    let text=item.val()//not text val because its single tag elements
    //these functions are polymorphism they are setters and as well as getters
    //no/single param means they are getters and some param means they are setters
    console.log(text)
    //$("#list").prepend($(`<li>${text}</li>`))//by using like this
    //$(`<li>${text}</li>`) we are creating li item
    //the jqery understands that the li is created and its to be returnred

    //$("#list").prepend($("<li>").html(`<b>${text}</b>`))//simpley S("li") creates li item
    $("#list").append($(`<li><b>${text}</b></li>`))
    item.val("")
})