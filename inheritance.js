// class Parent {
//     constructor(){
//         this.father = 'shahrukh';
//     }

// }
// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;

//     }
// }
// const baby = new Child('Arnold');
// const baby2 = new Child('Tom');
// console.log(baby);
// console.log(baby2);
class Parent{
    constructor(){
        this.fatherName = 'shahrukh';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +' '+ this.fatherName;
    }
}
const baby = new Child('tom');
const baby2 = new Child('maria');
console.log(baby.getFullName());
console.log(baby2.getFullName())