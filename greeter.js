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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
