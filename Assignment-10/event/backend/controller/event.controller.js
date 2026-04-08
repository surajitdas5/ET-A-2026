import Event from "../models/event.model.js";


async function addEvent(req, res){
    try {
        // console.log(req)
        let newEvent = req.body
        newEvent.imageName = req.file.filename

        newEvent = await Event.create(newEvent)

        res.status(201).send(newEvent)
    } catch (error) {
        console.log(err)
        res.status(500).send({"error": error.message})
    }
}

async function allEvents(req, res) {
    try {
       let events = await Event.find().populate('user', '-password')
        events.forEach( e => e.imageName=`http://localhost:5000/uploads/${e.imageName}`)
        res.send(events)
    } catch (error) {
        console.log(err)
        res.status(500).send({"error": error.message})
    }
}

async function updateEventImage(req, res){
    try {
        
        let { id } = req.params
        let imageName = req.file.filename
        console.log(imageName)
        let event = await Event.findOneAndUpdate({_id: id}, {imageName: imageName}, {returnDocument: 'after'})

        res.status(200).send(event)
    } catch (error) {
        console.log(err)
        res.status(500).send({"error": error.message})
    }
}

async function getEventById(req, res){
    try {
        let { id }= req.params
        // let events = await Event.find()
        let event = await Event.findOne({ _id: id}).populate("user", "-password")
        if(event){
            event.imageName = "http://localhost:5000/uploads/"+event.imageName
            res.send(event)
        } else {
            res.status(404).send({"message": "No Event Found"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "Event not found", "error": error.message})
    }
}

async function searchEvent(req, res){
    try {
        let searchKey = req.body.searchKey
        console.log(searchKey)

        let events = await Event.find({ title: { $regex: searchKey, $options: "i" }})
        if(events.length > 0){
            events.forEach( e => e.imageName = "http://localhost:5000/uploads/"+e.imageName)
            res.send(events)
        } else {
            res.status(404).send({"message": "No Event Found"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "Event not found", "error": error.message})
    }
}

export {addEvent, allEvents, updateEventImage, getEventById, searchEvent}