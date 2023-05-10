//constructor->prototype->static

/*class student{
    constructor(){
        let name;
        console.log("Constructor Function");
    }
    hello(){
        console.log("Hello" + this.name)
    }
}

let a =new student();

a.name="vanshika";
a.hello();*/

class student{
    constructor(name,age){
        this.studentname=name;
        this.studentage=age;
        console.log("Constructor Function");
    }
    hello(){
        console.log(`Hello + ${this.studentname} + your age is + ${this.studentage}`);
    }

    //static method
    static staticMethod(){
        console.log("static function");
    }
}

let a =new student("vanshika",25);
 

a.hello();
student.staticMethod();
