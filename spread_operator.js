// to pass an array as an argument

function sum(name,...args){
    console.log(arguments);

    console.log(`Hello ${name} :`);

    let sum=0;
    for(let i in args){
        sum+=args[i];
    }

    console.log(sum);
}
var arr=[10,20,30]
//sum("Vanshika",arr) taking this as a single value
sum("vanshika", ...arr);
console.log([...arr]);//spread operator


/*var arr1 =[10,20,30,40];

var arr2=[...arr1];
arr1.push(50);

console.log(arr1);
console.log(arr2);*/

var arr1 =[10,20,30,40];
var arr2=[50,60];

var arr3=[...arr2,...arr1];

console.log(arr3);

var obj1={
    name:"vanshika",
};
var obj2={
    age:25,
};

var obj3 ={...obj1,...obj2};
console.log(obj3);

