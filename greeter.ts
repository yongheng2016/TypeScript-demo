// function greeter(person: string) {
//  return `hello ${person}`   
// }
// let user =  [1,2,4]

// document.body.innerHTML = greeter(user)

// interface Person {
//     firstName: string,
//     lastName: string
// }

// function myName(person: Person){
//     return `Hello, ${person.firstName} ${person.lastName}`
// }

// let _name = {
//     firstName: 123,
//     lastName: 'yongheng'
// }

// document.body.innerHTML = myName(_name)

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);