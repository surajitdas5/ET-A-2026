// file system
const fs = require('fs')
const path = require('path')

// console.log(__dirname)
// console.log(__filename)

console.log("Start")
// fs.writeFile("info.txt", "Some Data", (err)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log("Content Written.")
//     }
// })

// try{
//     fs.writeFileSync("info-1.js", "Some other data")
//     console.log("Writen...")
// }catch(err){
//     console.log(err)
// }

// fs.readFile("info.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// try{
//     let data = fs.readFileSync("info.txt", "utf-8")
//     console.log(data)
// }catch(err){
//     console.log(err)
// }

console.log("End")

// let filePath = __dirname+"\\info.txt"
let filePath = path.join(__dirname, "info.txt")
console.log(filePath)