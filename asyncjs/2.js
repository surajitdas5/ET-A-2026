// generates a number
function generateNumber(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            try {
                let num = Math.floor(Math.random()*100) +1
                resolve(num)
            } catch (error) {
                reject(error)
            }
        }, 2000)
    })
}

// make a square
function getSquare(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num*num)
        }, 2000)
    })
}

// multiply 10
function mul10(num){
        return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num*10)
        }, 2000)
    })
}


async function operator() {
    try{
        let n = await generateNumber();
        console.log("Generated Number: "+n)
        let sqr = await getSquare(n)
        console.log("Square: "+sqr)
        let res = await mul10(sqr)
        console.log("Result: "+res)
    }catch(error){
        console.log(error)
    }
}

operator()