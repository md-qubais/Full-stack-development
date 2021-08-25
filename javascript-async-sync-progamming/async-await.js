let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolates", "peanuts"],
};

let shop_open = false;

function ask_toppings() {
  return new Promise((resolve, reject) => {
    if (shop_open) {
      setTimeout(() => {
        console.log("which topping do you need");
        resolve(); //here we must write the resolve
        //if not the further task after the asyn wont be executed
      }, 0000);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    console.log("making icream");
    console.log("machine started");
    console.log("scoops served");
    //till here the contraol will follow as per the normal
    //execution of the function

    //after encounter the await keyword the futher task inside the
    //async function will get stopped
    //and that ask toppings function will be gone to the node area
    //for the parallel execution and till that the further tasks
    //that is been inside the async will be stopped
    //and all the task outside the async will be executed normally
    //on the main stack
    await ask_toppings(); //here after executing the above two task
    //the ktichen function furhter executoing will get stops
    //and the control will move to the ask toppings till 3 second
    //and ask toppingsg will get printed and then bool next do the task in kitchen
    console.log("toppings added as per customer");
    console.log("making the icecream done");
  } catch (Error) {//this catch will catch the reject occured in the promise
      console.log("error occured")    
  }
}

kitchen();

console.log("cleaning the disher");
console.log("cleaning the table");
console.log("managing the orders");
