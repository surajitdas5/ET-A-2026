// Arraow function

// function add(a, b){
//     return a+b
// }

// let add = function(a, b){
//     return a+b
// }

// let add = (a,b) => {
//     return a+b
// }

// let add = (a, b) => ( a+b )


// let s = add(10, 20)
// console.log(s)


// let isEven = (num) => {
//     if(num%2 === 0){
//         return true
//     } else {
//         return false
//     }
// }

// let isEven = num => num%2 === 0

// console.log(isEven(10))
// console.log(isEven(11))


// let std = {
//     name: "John",
//     getName: function(){
//         console.log(this)
//     },
//     getStdName: () => {
//         console.log(this)
//     }
// }

// std.getName()
// std.getStdName()



// class
class Student{
    constructor(name){
    // constructor = (name) => {
        this.name = name;
    }

    // display(){
    display = () => {
        console.log(this.name)
    }
}

let std = new Student("Bijay")
std.display()