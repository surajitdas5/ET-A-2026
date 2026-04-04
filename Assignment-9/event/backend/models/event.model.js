import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum : ['Active', 'Completed', 'Cancled']
    },
    imageName: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})


const Event = mongoose.model("Event", eventSchema)

export default Event