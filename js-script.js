console.log("first TASk");
let add = function  Adder() {
     let  count =0;
    
    return function (res){
        count = count + res;
        return console.log(count) ;
    } ;
};

var counter = add();

counter(10);
counter(11);
counter(4);

console.log("second TASk");
let array =[];

let getUpdatetArr=(something) =>
{
    if(something)
    {
        array.push(something);
        return array.forEach(element => console.log(element));
    }
    else
    {
        array.length = 0   
    }
} 
getUpdatetArr(1);
getUpdatetArr(144);
getUpdatetArr(12);
getUpdatetArr();
getUpdatetArr(9);
