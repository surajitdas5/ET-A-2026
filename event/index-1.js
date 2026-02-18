import express from 'express';

let app = express();

app.use(express.json())


// routes
app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.get("/users", (req, res)=>{
    let users = [{name: "John"}, {name: "Jane"}, {name: "Smith"}]
    res.send(users)
})

app.get("/users/:id", (req, res)=>{
    // console.log(req)
    let { id } = req.params
    res.send("User Details of "+id)
})

app.post("/users", (req, res)=>{
    // console.log(req)
    let user = req.body
    // Add logic
    // res.status(201).send({"message": "User Added"})
    res.status(201).send(user)
})

app.put("/users/:id", (req, res)=>{
    let { id } = req.params
    let updatedUser = req.body

    console.log(id, updatedUser)
    res.send({"message": "User Updated"})
})

app.delete("/users/:id", (req, res)=>{
    let { id } = req.params
    res.send({"message": `User with ${id} is deleted`})
})



app.listen(5000, ()=>{
    console.log("Server started at 5000")
})