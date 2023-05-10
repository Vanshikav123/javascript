//let [name ,age] = user; destructuring array

let user = ["Vanshika",25 ,"lucknow",["Male",25000]];

let [name,age=20,city,[gender,salary]]=user;

console.log(name);
console.log(age);
console.log(city);
console.log(gender);
console.log(salary);

//rest operators make array of remaining element

//let [name ,...args] =user;
//console.log(args);
