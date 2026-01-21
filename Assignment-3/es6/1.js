//callbacks


// function add(a, b){
//     return a+b;
// }

// function add(a, b, display){
function add(a, b, callback){
    let c = a+b
    callback(c)
}

// function display(data){
//     console.log(data);
// }

// add => high-order function
// display => callback functiuon

// let res = add(10, 20);
// display(res)

// add(1, 2, display)

// add(5, 7, function(data){
//     console.log(data)
// })



// timer
// setTimeout(function(){
//     console.log("Time Out!");
// },2000)


// setInterval(function(){
//     console.log("Hello");
// }, 500)

// setInterval(function(){
//     document.getElementById("clock").innerHTML = new Date().toLocaleTimeString()
// }, 1000)

let count = 0;
let interval = setInterval(function(){
    document.getElementById("clock").innerHTML = ++count
    if(count >= 10){
        clearInterval(interval)
    }
}, 200)


