// destructuring

let emp = {
    id: 101,
    name: "Shayam",
    salary: 500000
}

// let { id, name, salary } = emp
let {id, name} = emp
// console.log(id)
// console.log(name)


let arr = [1, 2, 3, 4]
// let [ a, b, c, d] =  arr
let [a] = arr;
// console.log(d);
// console.log(a);



// optional chaining
let std = {
    name: "john",
    address: {
        state: "Odisha"
    }
}

console.log(std?.roll)
console.log(std?.address?.state)