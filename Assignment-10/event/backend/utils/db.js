import mongoose from "mongoose";

import dns from 'dns';
dns.setServers(['8.8.8.8'])

let DB_URL="use_your_own_url";

async function connectToDB() {
    try {
        await mongoose.connect(DB_URL)
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("MongoDB not connected")
        console.log(error)
    }
}


export default connectToDB;