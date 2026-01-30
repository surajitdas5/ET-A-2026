function makeCoffee(){
    let myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //task 
            let done = false
            if(done){
                resolve("Coffee Ready")
            } else {
                reject("Someting Missing")
            }
        }, 2000)
    })
    return myPromise 
}


// let res = makeCoffee();
// console.log(res)


// then/catch
// makeCoffee()
//     .then((data)=>{ // resolve
//         console.log("Try Block")
//         console.log(data)
//     })
//     .catch((err)=>{ // reject
//         console.log("Catch Block")
//         console.log(err)
//     })
//     .finally(()=>{
//         console.log("Finally Block")
//     })



// async / await

async function orderCoffee(){
    try{
        let res = await makeCoffee();
        console.log("Try Block: "+res)
    } catch(err){
        console.log("Error: "+err)
    }
}

// orderCoffee()


function evenOdd(num){
    // let eoPromise = new Promise((resolve, reject)=>{
    let eoPromise = new Promise((callback1, callback2)=>{
        setTimeout(()=>{
            if(num % 2==0){
                // resolve("Even Number")
                callback1("Even Number")
            } else {
                // reject("Odd Number")
                callback2("Odd Number")
            }
        }, 500)
    })

    return eoPromise
}

async function checkNumber(n){
    try {
        let res = await evenOdd(n)
        console.log("Try block")
        console.log(res)
    } catch (error) {
        console.log("Catch block")
        console.log(error)
    }
}

checkNumber(110)