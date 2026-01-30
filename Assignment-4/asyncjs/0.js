// console.log("Start")

// setTimeout(()=>{
//     console.log("Time Out")
// }, 0)

// console.log("End")


// function add(a,b){
//     setTimeout(()=>{
//         return a+b;
//     }, 2000)
// }
function add(a,b, callback){
    setTimeout(()=>{
        // return a+b;
        callback(a+b)
    }, 2000)
}


function display(data){
    console.log(data)
}


// let res = add(1, 2)
// display(res)

add(2, 4, display)