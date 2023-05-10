/*let name = "Vanshika";
let course="Btech";

var obj ={
    name,
    course,
};

console.log(obj);*/


/*let n = "name";

var obj ={
    [n]:"Vanshika",
    course:"Btech"
};

console.log(obj);
console.log(obj.name);*/

let n = "student";

var obj ={
    [n + "name"]:"Vanshika",
    course:"Btech",

    detail : function(){
        return `${this.studentname} is student of ${this.course} `
    }

};

console.log(obj);
console.log(obj.detail());


