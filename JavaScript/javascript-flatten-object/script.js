let obj1={
    a:10,
    obj2:{
        b:20,
        arr:[1,2,3,4],
        obj3:{
            c:30,
            name:"mohammed qubaisuddin",
            obj4:{
                d:40,
                name2:"mohammed abdul hameed",
                obj5:{
                    e:50,
                    obj6:{
                        f:60,
                        fun:function(){
                            console.log("this is function");
                            return 20;
                        }
                    }
                }
            }
        }
    }
}




//here below is the function used to flatten the object here
function flatten_it(obj){
    for(let i in obj){
        if(obj[i] instanceof Object){
            flatten_it(obj[i]);
        }
    }
    for(let i in obj){
        if(obj[i] instanceof Object){
            let key_arr=Object.keys(obj[i]);
            for(let j=0;j<key_arr.length;j++){
                obj[key_arr[j]]=obj[i][key_arr[j]];
            }
            delete obj[i]
        }
    }
}



flatten_it(obj1)
console.log(obj1)