import express from "express";


import {
    addEvent,
    allEvents,
    updateEventImage
} from "./../controller/event.controller.js"

import upload from "../middlewares/fileUpload.middleware.js";

const router = express.Router()

router.post("/", upload.single("image") , addEvent)
router.get("/", allEvents)
router.put("/update-image/:id", upload.single("image") , updateEventImage)

export default router