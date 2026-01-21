//array methods

let arr = [3, 5, 2, 6, 10, 14, 19, 23, 1, 2, 4]

// console.log(arr.push(100))
// console.log(arr.pop())
// console.log(arr.indexOf(2))
// console.log(arr.lastIndexOf(2))
// // console.log(arr.indexOf(20))
// console.log(arr.includes(20))
// console.log(arr.includes(5))
// console.log(arr.join(", "))


// higher order array methods
// forEach
// arr.forEach((n, i)=>{
//     console.log(`${i} => ${n}`)
// })


// map
// let newArr = arr.map((n, i)=>{
//     return n*10
// })
// console.log(arr)
// console.log(newArr)

// filter
// let oddNums = arr.filter((n)=>{
//     if(n%2 === 0){
//         return false
//     } else {
//         return true
//     }
// })

// let oddNums = arr.filter( n => n%2 === 1)
// console.log(oddNums)

// let newArr = arr.filter( n => n!==2 )
// console.log(newArr)


// reduce
// let sum = arr.reduce((sum, n)=>{
//     return sum+n
// }, 0)

// let sum = arr.reduce((sum, n) => sum +n, 0 )

// console.log(sum)

// let largest = arr.reduce((largest, n)=>{
//     if(largest > n){
//         return largest
//     } else {
//         return n
//     }
// }, arr[0])

// let lg = arr.reduce((lg, n) => lg>n ? lg : n, arr[0])

// console.log(largest)

// // sort
// arr.sort((a,b)=>{
//     if(a>b) return 1
//     else if(b>a) return -1
//     else 0
// })

arr.sort((a, b) => a-b)

console.log(arr)