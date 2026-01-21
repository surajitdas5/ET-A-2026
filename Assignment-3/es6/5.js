// default params
// function greet(name = "Guest"){
//     console.log(`Hello ${name}`)
// }
// greet("Ram")
// greet()


// function add(a, b, c=0){
function add(a, b, ...nums){ // ... as rest operator
    let sum = a+b;
    for(let n of nums){
        sum += n
    }
    // return a+b+c
    return sum
    // console.log(nums)
}

// let sum = add(10, 20)
// console.log(sum)
// sum = add(10, 20, 30)
// console.log(sum)
// sum = add(10, 20, 30, 40, 50)
// console.log(sum)
// sum = add(10, 20, 30, 40, 50, 60, 70)
// console.log(sum)


let arr = [1, 2, 3, 4, 5]
// let brr = arr
//brr = [...arr] // ... as spread operator
// brr[2] = 200
// let brr = [100, 200, ...arr]
let brr = [...arr, 12, 13, 14]
console.log(arr) //
console.log(brr)