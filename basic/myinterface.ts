interface Person {
    name:string;
    age:number;
    greet():void;
}

class Student implements Person {
    name: string;
    age: number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    greet(): void {
        console.log(`Hello, My name is ${this.name} and I'm ${this.age} years old.`);
    }

}

let manoj = new Student("Manoj Kumar",20);
manoj.greet(); // Hello, My name is Manoj kumar and I'm 20 years old.