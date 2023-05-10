/*function sum(){
    console.log(arguments);

    let sum=0;
    for(let i in arguments){
        sum+=arguments[i];
    }

    console.log(sum);
}
sum("Vanshika",20,30,40);*/

function sum(name,...args){
    console.log(arguments);

    console.log(`Hello ${name} :`);

    let sum=0;
    for(let i in args){
        sum+=args[i];
    }

    console.log(sum);
}
sum("Vanshika",20,30,40)
//multiple values to one argument
//used during decalaration of function

