import "dotenv/config"
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import cors from 'cors'
import cookieParser from "cookie-parser";


import connectToDB from './utils/db.js';
import userRouter from "./routes/user.router.js"
import eventRouter from "./routes/event.router.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// routes
app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.use("/users", userRouter)
app.use("/events", eventRouter)



app.listen(5000, ()=>{
    console.log("Server started at 5000")
    connectToDB()
})